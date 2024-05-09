import styles from '../MultiStepForm/MultiStepForm.module.css';
import React, { useState, useEffect } from 'react';
import AddIcon from '@/icons/AddIcon';
import DeleteIcon from "@/icons/DeleteIcon";
import RemoveIcon from "@/icons/RemoveIcon";
import {CompanyForm, Step2FormProps} from "@/types";
import Loading from "@/components/Loading/Loading";
import LoadIcon from "@/icons/LoadIcon";
import Image from 'next/image'
const Step2Form: React.FC<Step2FormProps> = ({ state,dispatch, goToPreviousStep, handleSubmitStep2 }) => {
    const [companyForms, setCompanyForms] = useState<CompanyForm[]>([
        { voen: '', companyName: '', legalAddress: '', legalForm: '', legalRepresentative: '', selectedActivities: [] }
    ]);
    const [voenErrors, setVoenErrors] = useState<string[]>(['']);
    const [activityErrors, setActivityErrors] = useState<string[]>(['']);
    const [nextClicked, setNextClicked] = useState<boolean>(false);
    const [formValidated, setFormValidated] = useState<boolean>(false);
    const activities: string[] = ['Спорт', 'Прогулка', 'Путешествие', 'Кино', 'Ресторан'];

    useEffect(() => {
        if (nextClicked) {
            validateForms();
        }
    }, [nextClicked, companyForms]);

    const addCompanyForm = () => {
        setCompanyForms(prevForms => [
            ...prevForms,
            { voen: '', companyName: '', legalAddress: '', legalForm: '', legalRepresentative: '', selectedActivities: [] }
        ]);
        setVoenErrors(prevErrors => [...prevErrors, '']);
        setActivityErrors(prevErrors => [...prevErrors, '']);
    };

    const removeCompanyForm = (index: number) => {
        setCompanyForms(prevForms => prevForms.filter((_, i) => i !== index));
        setVoenErrors(prevErrors => prevErrors.filter((_, i) => i !== index));
        setActivityErrors(prevErrors => prevErrors.filter((_, i) => i !== index));
    };

    const handleVoenChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const voen = event.target.value;
        setCompanyForms(prevForms => {
            const newForms = [...prevForms];
            newForms[index].voen = voen;
            return newForms;
        });
    };

    const handleSelectActivity = (activity: string, index: number) => {
        setCompanyForms(prevForms => {
            const newForms = [...prevForms];
            if (!newForms[index].selectedActivities.includes(activity)) {
                newForms[index].selectedActivities.push(activity);
            }
            return newForms;
        });
    };

    const removeActivity = (formIndex: number, activityToRemove: string) => {
        setCompanyForms(prevForms => {
            const newForms = [...prevForms];
            newForms[formIndex].selectedActivities = newForms[formIndex].selectedActivities.filter(activity => activity !== activityToRemove);
            return newForms;
        });
    };

    const validateForms = () => {
        const newVoenErrors = companyForms.map((form) => {
            if (form.voen.trim() === '' || form.voen.length !== 10) {
                return 'VOEN must be 10 digits long.';
            }
            return '';
        });

        const newActivityErrors = companyForms.map((form) => {
            if (form.selectedActivities.length === 0) {
                return 'Please select at least one activity.';
            }
            return '';
        });

        setVoenErrors(newVoenErrors);
        setActivityErrors(newActivityErrors);
        setFormValidated(true);
    };

    const handleSubmit = () => {
        setNextClicked(true);
        validateForms();

        if (formValidated) {
            const hasErrors = voenErrors.some(error => !!error) || activityErrors.some(error => !!error);
            if (!hasErrors) {
                const formData = companyForms.filter(form => Object.keys(form).length !== 0);
                dispatch({ type: 'SET_COMPANY_FORM_DATA', formData: formData }); // Assuming you're using Redux or similar state management
                handleSubmitStep2();
            }
        }
    };

    return (
        <div className={styles.step2Container}>
            <div className={styles.inputs2}>
                {companyForms.map((form, formIndex) => (
                    <div key={formIndex} className={styles.inputRow}>
                        <div className={styles.inputCol}>
                            <div className={styles.formControll}>
                                <div className={styles.formInput}>
                                    <input
                                        type="text"
                                        name={`voen-${formIndex}`}
                                        id={`voen-${formIndex}`}
                                        required
                                        value={form.voen}
                                        onChange={(event) => handleVoenChange(event, formIndex)}
                                        className={`${styles.formInput}  ${
                                            voenErrors[formIndex] ? styles.error : ''
                                        }`}
                                    />
                                    <label className={`${styles.required} ${styles.voenLabel} `} htmlFor={`voen-${formIndex}`}>
                                        VOEN
                                    </label>
                                    <p className={styles.errorText}>{nextClicked && voenErrors[formIndex]}</p>
                                </div>
                            </div>
                            <div>
                                <label className={`${styles.photoLabel} ${styles.activityLabel} `}
                                       htmlFor={`voen-${formIndex}`}>
                                    Type of activity
                                </label>
                                <select
                                    className={styles.select}
                                    onChange={(event) => {
                                        const selectedActivity = event.target.value;
                                        if (selectedActivity !== "") {
                                            handleSelectActivity(selectedActivity, formIndex);
                                        }
                                    }}
                                >
                                    <option value="">Choose a type of activity</option>
                                    {activities.map((activity, index) => (
                                        <option key={index} value={activity}>
                                            {activity}
                                        </option>
                                    ))}
                                </select>
                                <p className={styles.errorText}>{nextClicked && activityErrors[formIndex]}</p>
                                <div>
                                    <ul className={styles.ulStyled}>
                                        {form.selectedActivities.map((activity, activityIndex) => (
                                            <li className={styles.liStyled} key={activityIndex}>
                                                {activity}
                                                <span
                                                    className={styles.removeIcon}
                                                    onClick={() => removeActivity(formIndex, activity)}
                                                >
                                                    <RemoveIcon/>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.formSubmit} ${styles.formsubmitmini} `}>
                            <button className={`${styles.formSubmit} ${styles.hiddenButton} `} type="button">Find Details</button>
                            <div className={styles.hiddenLoading}><Loading/></div>

                        </div>
                        <div className={styles.inputCol}>
                            <div className={styles.formControll}>
                                <div className={styles.formInput}>
                                    <input
                                        type="text"
                                        name={`companyName${formIndex}`}
                                        id={`companyName${formIndex}`}
                                        readOnly
                                        tabIndex={-1}
                                        className={styles.formInputField}
                                        placeholder={"Company Name"}
                                    />
                                    <label htmlFor={`companyName${formIndex}`}>Name of company</label>
                                </div>
                            </div>
                            <div className={styles.formControll}>
                                <div className={styles.formInput}>
                                    <input
                                        value={form.legalAddress}
                                        type="text"
                                        name={`legalAddress${formIndex}`}
                                        id={`legalAddress${formIndex}`}
                                        readOnly
                                        placeholder={"Legal Address"}
                                        tabIndex={-1}
                                        className={styles.formInputField}
                                    />
                                    <label htmlFor={`legalAddress${formIndex}`}>Legal Address</label>
                                </div>
                            </div>
                            <div className={styles.formControll}>
                                <div className={styles.formInput}>
                                    <input
                                        value={form.legalForm}
                                        type="text"
                                        placeholder={"Legal Form"}
                                        name={`legalForm${formIndex}`}
                                        id={`legalForm${formIndex}`}
                                        readOnly
                                        tabIndex={-1}
                                        className={styles.formInputField}
                                    />
                                    <label htmlFor={`legalForm${formIndex}`}>Legal Form</label>
                                </div>
                            </div>
                            <div className={styles.formControll}>
                                <div className={styles.formInput}>
                                    <input
                                        value={form.legalRepresentative}
                                        type="tel"
                                        placeholder={"Legal Representative"}
                                        name={`legalRepresentative${formIndex}`}
                                        id={`legalRepresentative${formIndex}`}
                                        readOnly
                                        tabIndex={-1}
                                        className={styles.formInputField}
                                    />
                                    <label htmlFor={`legalRepresentative${formIndex}`}>Name of director</label>
                                </div>
                            </div>
                        </div>
                        {companyForms.length > 1 && (
                            <button
                                className={`${styles.btnDelete} ${styles.btnDelete2}`}
                                onClick={() => removeCompanyForm(formIndex)}
                            >
                                <DeleteIcon />
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <div className={`${styles.formSubmit} ${styles.grid2}`}>
                <button className={styles.formBtn} onClick={addCompanyForm}>
                    <AddIcon />
                    <span className={styles.labelAdd}>Add more</span>
                </button>
            </div>
            <div className={`${styles.formSubmit} ${styles.grid2}`}>
                <button type="button" className={styles.formBtn} onClick={goToPreviousStep}>
                    Previous
                </button>
                <button type="button" className={styles.formBtn} onClick={handleSubmit}>
                    Next
                </button>
                <div className={styles.logoDiv} >
                    <Image
                        src="logoIcon.svg"
                        width={100}
                        height={100}
                        alt="logo"
                    />
                </div>
            </div>


        </div>
    );
};

export default Step2Form;
