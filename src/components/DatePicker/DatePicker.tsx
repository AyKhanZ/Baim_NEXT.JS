import React, { Component, RefObject, ChangeEvent } from "react";
import ReactDOM from "react-dom";
import styles from "./DatePicker.module.css";
import { MyDatePickerProps, MyDatePickerState, DayDetails } from "@/types";
import { monthMap } from "@/components/utils/constants";
import {
  getDayDetails,
  getNumberOfDays,
  getDateStringFromTimestamp,
} from "../utils/dateUtils";
import { renderCalendar } from "@/components/DatePicker/Calendar/Calendar";
import { startOfDay, subDays } from 'date-fns';

const startOfToday = startOfDay(new Date());

const todayTimestamp = startOfToday.getTime() - new Date().getTimezoneOffset() * 60 * 1000;


export default class MyDatePicker extends Component<
  MyDatePickerProps,
  MyDatePickerState
> {
  private readonly inputRef: RefObject<HTMLInputElement>;

  constructor(props: MyDatePickerProps) {
    super(props);
    this.inputRef = React.createRef();

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    this.state = {
      year,
      month,
      selectedDay: todayTimestamp,
      monthDetails: this.getMonthDetails(year, month),
      showDatePicker: false,
    };
  }

  componentDidMount() {
    window.addEventListener("click", this.addBackDrop);
    this.setDateToInput(this.state.selectedDay);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.addBackDrop);
  }

  addBackDrop = (e: MouseEvent) => {
    e.preventDefault();
    const datePickerContainer = document.querySelector(
      `.${styles.MyDatePicker}`
    );

    if (
      this.state.showDatePicker &&
      datePickerContainer &&
      !datePickerContainer.contains(e.target as Node)
    ) {
      this.showDatePicker(false);
    }
  };

  showDatePicker = (showDatePicker = true) => {
    this.setState({ showDatePicker });
  };

  getMonthDetails = (year: number, month: number): DayDetails[] => {
    const firstDay = new Date(year, month).getDay();
    const numberOfDays = getNumberOfDays(year, month);
    const monthArray: DayDetails[] = [];
    const rows = 6;
    let index = 0;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < 7; col++) {
        monthArray.push(
          getDayDetails({
            index,
            numberOfDays,
            firstDay,
            year,
            month,
          })
        );
        index++;
      }
    }
    return monthArray;
  };

  getDateFromDateString = (
    dateValue: string
  ): { year: number; month: number; date: number } | null => {
    const dateData = dateValue.split("-").map((d) => parseInt(d, 10));
    if (dateData.length < 3) return null;

    const [year, month, date] = dateData;
    return { year, month, date };
  };

  setDate = (dateData: { year: number; month: number; date: number }): void => {
    const { year, month, date } = dateData;
    const selectedDay = new Date(year, month - 1, date).getTime();
    this.setState({ selectedDay });
    if (this.props.onChange) {
      this.props.onChange(selectedDay);
    }
  };

  updateDateFromInput = () => {
    if (this.inputRef.current) {
      const dateValue = this.inputRef.current.value;
      const dateData = this.getDateFromDateString(dateValue);
      if (this.props.dispatch)
        this.props.dispatch({ type: "SET_BIRTH_DATE", birthDate: dateValue });

      if (dateData) {
        this.setDate(dateData);
        this.setState({
          year: dateData.year,
          month: dateData.month - 1,
          monthDetails: this.getMonthDetails(dateData.year, dateData.month - 1),
        });
      }
    }
  };

  setDateToInput = (timestamp: number) => {
    if (this.inputRef.current) {
      const dateString = getDateStringFromTimestamp(timestamp);
      this.inputRef.current.value = dateString;
      if (this.props.dispatch)
        this.props.dispatch({ type: "SET_BIRTH_DATE", birthDate: dateString });
    }
  };

  onDateClick = (day: DayDetails) => {
    this.setState({ selectedDay: day.timestamp }, () =>
      this.setDateToInput(day.timestamp)
    );
    if (this.props.onChange) {
      this.props.onChange(day.timestamp);
    }
  };

  setYear = (offset: number) => {
    const { year, month } = this.state;
    this.setState({
      year: year + offset,
      monthDetails: this.getMonthDetails(year + offset, month),
    });
  };

  setMonth = (offset: number) => {
    const { year, month } = this.state;
    let newYear = year;
    let newMonth = month + offset;

    if (newMonth === -1) {
      newMonth = 11;
      newYear--;
    } else if (newMonth === 12) {
      newMonth = 0;
      newYear++;
    }

    this.setState({
      year: newYear,
      month: newMonth,
      monthDetails: this.getMonthDetails(newYear, newMonth),
    });
  };

  render() {
    const { showDatePicker, month, year, monthDetails, selectedDay } =
      this.state;

    return (
      <div className={`${styles.MyDatePicker} `}>
        <div className={`${styles.formControll} ${styles.formControllData} `}>
          <div
            className={styles.formInput}
            onClick={() => this.showDatePicker(true)}
          >
            <input
              className={`${styles.formInput} ${
                this.props.state?.errors.birthDate ? styles.error : ""
              }`}
              type="date"
              onChange={this.updateDateFromInput}
              ref={this.inputRef}
            />
            <label className={styles.required} htmlFor="date">
              Date of birth
            </label>
          </div>
          <p className={styles.errorText}>
            {this.props.state?.errors.birthDate}
          </p>
        </div>

        {showDatePicker && (
          <div className={styles["mdp-container"]}>
            <div className={styles["mdpc-head"]}>
              <div
                className={styles["mdpch-button"]}
                onClick={() => this.setYear(-1)}
              >
                <div className={styles["mdpchb-inner"]}>
                  <span className={styles["mdpchbi-left-arrows"]}></span>
                </div>
              </div>
              <div
                className={styles["mdpch-button"]}
                onClick={() => this.setMonth(-1)}
              >
                <div className={styles["mdpchb-inner"]}>
                  <span className={styles["mdpchbi-left-arrow"]}></span>
                </div>
              </div>
              <div className={styles["mdpch-container"]}>
                <div className={styles["mdpchc-year"]}>{year}</div>
                <div className={styles["mdpchc-month"]}>{monthMap[month]}</div>
              </div>
              <div
                className={styles["mdpch-button"]}
                onClick={() => this.setMonth(1)}
              >
                <div className={styles["mdpchb-inner"]}>
                  <span className={styles["mdpchbi-right-arrow"]}></span>
                </div>
              </div>
              <div
                className={styles["mdpch-button"]}
                onClick={() => this.setYear(1)}
              >
                <div className={styles["mdpchb-inner"]}>
                  <span className={styles["mdpchbi-right-arrows"]}></span>
                </div>
              </div>
            </div>
            <div className={styles["mdpc-body"]}>
              {renderCalendar(monthDetails, this.onDateClick, selectedDay)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
