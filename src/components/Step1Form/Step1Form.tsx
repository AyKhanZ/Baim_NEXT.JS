import styles from '../MultiStepForm/MultiStepForm.module.css'
import React, {useRef} from 'react';
import {Step1FormProps} from "@/types";
import {
    handleChangeBirthDate,
    handleChangeConfirmPassword,
    handleChangeInBusinessPhoneNum,
    handleChangeInPhoneNum,
    handleChangePassword,
    handleChangePatronymic,
    handleChangePersonalEmail,
    handleOptionChange
} from "@/components/utils/formHandlers";
import {toggleConfirmPasswordVisibility, togglePasswordVisibility} from "@/components/utils/formActions";
import UploadImage from "@/components/UploadImage/UploadImage";
import HidePassword from "@/icons/HidePassword";
import ShowPassword from '@/icons/ShowPassword';
const Step1Form: React.FC<Step1FormProps> = ({ state, dispatch, hasErrors, changeTab }) => {
    const businessPhoneRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);


    return (
        <div className={styles.containerStep1}>
            <div className={styles.column}>
                <ul className={styles.ulColumn}>
                    <li className={styles.liColumn}>
                        <div className={styles.formControll}>
                            <div className={styles.formInput}>
                                <input readOnly={true} type="text" name="nameStep1" id="nameStep1"
                                       required
                                       className={styles.formInput}/>
                                <label className={styles.required} htmlFor="nameStep1">Name</label>
                            </div>
                        </div>
                    </li>
                    <li className={styles.liColumn}>
                        <div className={styles.formControll}>
                            <div className={styles.formInput}>
                                <input readOnly={true} type="text" name="lastNameStep1"
                                       id="lastNameStep1"
                                       required
                                       className={styles.formInput}/>
                                <label className={styles.required} htmlFor="lastNameStep1">Last
                                    name</label>
                            </div>
                        </div>
                    </li>
                    <li className={styles.liColumn}>
                        <div className={styles.formControll}>
                            <div className={styles.formInput}>
                                <input value={state.patronymic} type="text" name="patronymic"
                                       id="patronymic"
                                       required
                                       onChange={(e) => handleChangePatronymic(dispatch, e)}
                                       className={`${styles.formInput} ${state.errors.patronymic ? styles.error : ''}`}/>
                                <label className={styles.required}
                                       htmlFor="patronymic">Patronymic</label>

                            </div>
                            {state.errors.patronymic && (
                                <p className={styles.errorText}>{state.errors.patronymic}</p>
                            )}
                        </div>
                    </li>
                    <li className={styles.liColumn}>
                        <div className={styles.genderContainer}>
                            <div className={styles.genderInnerContainer}>

                                <label className={styles.label}>Gender</label>

                                <div className={styles.gender}>
                                    <input className={styles.genderInput} name="gender" type="radio"
                                           id="male" value="male"
                                           checked={state.selectedOption === 'male'}
                                           onChange={(event) => handleOptionChange(event, dispatch)}
                                           required/>
                                    <label className={styles.labelGender}
                                           htmlFor="male">Male</label>
                                </div>
                                <div className={styles.gender}>
                                    <input className={styles.genderInput} name="gender" type="radio"
                                           value="female"
                                           checked={state.selectedOption === 'female'}
                                           onChange={(event) => handleOptionChange(event, dispatch)}
                                           id="female"
                                           required/>
                                    <label className={styles.labelGender}
                                           htmlFor="female">Female</label>
                                </div>

                            </div>
                            <p className={styles.errorText}>{state.errors.gender}</p>

                        </div>
                    </li>
                    <li className={styles.liColumn}>
                        <div className={`${styles.formControll} ${styles.dateControll}`}>
                            <div className={styles.formInput}>
                                <input className={styles.formInput} type="date" name="date"
                                       id="date"
                                       value={state.birthDate}
                                       onChange={(e) => handleChangeBirthDate(dispatch, e)} aria-label="Pick a date"/>
                                <label className={styles.required} htmlFor="date">Date of
                                    birth</label>

                            </div>
                            <p className={styles.errorText}>{state.errors.birthDate}</p>

                        </div>
                    </li>


                </ul>
            </div>
            <div className={styles.column}>
                <ul className={styles.ulColumn}>


                    <li className={styles.liColumn}>
                        <div className={styles.formControll}>
                            <div className={styles.formInput}>
                                <input readOnly={true} type="text" name="emailStep1" id="emailStep1"
                                       required
                                       className={styles.formInput}/>
                                <label className={styles.required}
                                       htmlFor="emailStep1">Email</label>
                            </div>
                        </div>
                    </li>
                    <li className={styles.liColumn}>
                        <div className={styles.formControll}>
                            <div className={styles.formInput}>
                                <input type="text" name="workEmail" id="workEmail" required
                                       value={state.personalEmail}
                                       onChange={(e) => handleChangePersonalEmail(dispatch, e)}
                                       className={`${styles.formInput} ${state.errors.personalEmail ? styles.error : ''}`}/>
                                <label htmlFor="workEmail">Personal email</label>
                            </div>
                            {state.errors.personalEmail && (
                                <p className={styles.errorText}>{state.errors.personalEmail}</p>
                            )}
                        </div>

                    </li>
                    <li className={styles.liColumn}>
                        <div className={styles.formControll}>
                            <div className={styles.formInput}>
                                <div className={styles.phoneInput}>
                                    <text className={styles.code}>+994</text>
                                    <input type="tel" name="phoneNum" id="phoneNum" required
                                           ref={phoneRef}
                                           value={state.phoneNumber}
                                           onChange={(e) => handleChangeInPhoneNum(dispatch, phoneRef, e)}
                                           className={`${styles.formInput} ${state.errors.phoneNumber ? styles.error : ''}`}/>
                                    <label className={`${styles.required} ${styles.phoneLabel}`}
                                           htmlFor="phoneNum">Phone
                                        number</label>

                                </div>

                            </div>
                            {state.errors.phoneNumber && (
                                <p className={styles.errorText}>{state.errors.phoneNumber}</p>
                            )}
                        </div>

                    </li>
                    <li className={styles.liColumn}>
                        <div className={styles.formControll}>
                            <div className={styles.formInput}>
                                <div className={styles.phoneInput}>
                                    <text className={styles.code}>+994</text>
                                    <input type="tel" name="businessPhoneNum" id="businessPhoneNum"
                                           required
                                           ref={businessPhoneRef}
                                           value={state.businessPhoneNumber}
                                           onChange={(e) => handleChangeInBusinessPhoneNum(dispatch, businessPhoneRef, e)}
                                           className={`${styles.formInput} ${state.errors.businessPhoneNumber ? styles.error : ''}`}/>
                                    <label className={`${styles.phoneLabel}`}
                                           htmlFor="businessPhoneNum">Business phone number
                                    </label>

                                </div>

                            </div>
                            {state.errors.businessPhoneNumber && (
                                <p className={styles.errorText}>{state.errors.businessPhoneNumber}</p>
                            )}                                    </div>
                    </li>
                    <li>

                        <div className={styles.formControll}>
                            <div className={styles.formInput}>
                                <input type={state.passwordVisibility ? 'text' : 'password'}
                                       name="password"
                                       id="password"
                                       required
                                       className={`${styles.formInput} ${state.errors.password ? styles.error : ''}`}
                                       value={state.password}
                                       onChange={(e) => handleChangePassword(dispatch, e)}
                                />

                                <label className={styles.required} htmlFor="password">Create a new
                                    password</label>

                                <div className={styles.passwordShowHide}
                                     onClick={() => togglePasswordVisibility(dispatch)}>
                                    {state.passwordVisibility ? (
                                        <HidePassword iconStyle={styles.icon} passwordStyle={styles.hidePassword} />

                                    ) : (
                                        <ShowPassword iconStyle={styles.icon} passwordStyle={styles.showPassword}/>

                                        )}
                                </div>

                            </div>
                            <p className={styles.errorText}>{state.errors.password}</p>

                        </div>
                    </li>
                    <li className={styles.liColumn}>
                        <div className={styles.formControll}>
                            <div className={styles.formInput}>
                                <input type={state.confirmPasswordVisibility ? 'text' : 'password'}
                                       name="password_confirmation" id="password_confirmation"
                                       required
                                       className={`${styles.formInput} ${state.errors.confirmPassword ? styles.error : ''}`}
                                       value={state.confirmPassword}
                                       onChange={(e) => handleChangeConfirmPassword(dispatch, e)}/>

                                <label className={styles.required} htmlFor="password_confirmation">Confirm
                                    password</label>
                                <div className={styles.passwordShowHide}>
                                    <div className={styles.passwordShowHide}
                                         onClick={() => toggleConfirmPasswordVisibility(dispatch)}>
                                        {state.confirmPasswordVisibility ? (
                                            <HidePassword iconStyle={styles.icon} passwordStyle={styles.hidePassword} />

                                        ) : (
                                            <ShowPassword iconStyle={styles.icon} passwordStyle={styles.showPassword}/>

                                        )}
                                    </div>
                                </div>

                            </div>
                            <p className={styles.errorText}>{state.errors.confirmPassword}</p>


                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.column}>
                <ul className={styles.ulColumn}>
                    <li className={styles.liColumn}>
                        <div className={styles.formInput}><p className={styles.photoLabel}>Photo</p>

                            <div className={styles.uploadIn}><UploadImage/></div>
                        </div>
                    </li>

                </ul>


            </div>

        </div>
    );
};

export default Step1Form;
