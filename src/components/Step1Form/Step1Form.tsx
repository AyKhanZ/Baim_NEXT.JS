import styles from '../Step1Form/Step1Form.module.css'
import React, {ChangeEvent, useRef, useState} from 'react';
import {Step1FormProps} from "@/types";
import {
    handleChangeBirthDate,
    handleChangeConfirmPassword,
    handleChangeInBusinessPhoneNum,
    handleChangeInPhoneNum,
    handleChangePassword,
    handleChangePatronymic,
    handleChangePersonalEmail,
    handleOptionChange,
    handleImageUpload, handleChangePosition
} from "@/components/utils/formHandlers";

import {toggleConfirmPasswordVisibility, togglePasswordVisibility} from "@/components/utils/formActions";
import HidePassword from "@/icons/HidePassword";
import ShowPassword from '@/icons/ShowPassword';
import DatePicker from '../DatePicker/DatePicker';
import CheckBox from "@/components/CheckBox/CheckBox";
const Step1Form: React.FC<Step1FormProps> = ({ state, dispatch, hasErrors, changeTab }) => {
    const businessPhoneRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string>('');

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked((prev) => !prev);
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };
    const handleChange1 = () => {
        const checkbox = document.getElementById('checkbox') as HTMLInputElement;
        const path = document.getElementById('path')  as HTMLInputElement;
        const bow = document.getElementById('bow')  as HTMLInputElement;
        const male = document.getElementById('male1')  as HTMLInputElement;
        console.log(checkbox?.checked)

        if (checkbox?.checked) {
            male?.classList.remove(styles.ma);
            setTimeout(() => {
                path?.classList.add(styles.fe);
                male?.classList.add(styles.fe);
                bow?.classList.add(styles.fe);
            }, 390);

        } else {
            male?.classList.add(styles.ma);
            setTimeout(() => {
                path?.classList.remove(styles.fe);
                male?.classList.remove(styles.fe);
                bow?.classList.remove(styles.fe);
            }, 390);

        }
        console.log(path)
    }

    return (
        <div className={styles.containerStep1}>
            <div className={styles.firstSection}>
                <h3>1. Personal Info</h3>
                <div className={styles.personalInfoDiv}>
                    <div className={styles.formControll}>
                        <div className={styles.formInput}>
                            <input readOnly={true} type="text" name="nameStep1" id="nameStep1"
                                   required
                                   className={styles.formInput}/>
                            <label htmlFor="nameStep1">Name</label>
                        </div>
                    </div>
                    <div className={styles.formControll}>
                        <div className={styles.formInput}>
                            <input readOnly={true} type="text" name="lastNameStep1"
                                   id="lastNameStep1"
                                   required
                                   className={styles.formInput}/>
                            <label htmlFor="lastNameStep1">Last
                                name</label>
                        </div>
                    </div>
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
                    <DatePicker state={state} dispatch={dispatch}/>
                    <div className={styles.formControll}>
                        <div className={styles.formInputGender}>
                            <div className={styles.genderInnerContainer}>
                                <div className={styles.gender}>
                                    <input className={styles.genderInput} name="gender" type="radio"
                                           id="male" value="male"
                                           checked={state.selectedOption === 'male'}
                                           onClick={(event) => event.stopPropagation()}
                                           onChange={(event) => handleOptionChange(event, dispatch)}
                                           required/>
                                    <label className={styles.labelGender}
                                           htmlFor="male">Male</label>
                                </div>
                                <div className={styles.gender}>
                                    <input className={styles.genderInput} name="gender" type="radio"
                                           value="female"
                                           onClick={(event) => event.stopPropagation()}
                                           checked={state.selectedOption === 'female'}
                                           onChange={(event) => handleOptionChange(event, dispatch)}
                                           id="female"
                                           required/>
                                    <label className={styles.labelGender}
                                           htmlFor="female">Female</label>
                                </div>

                            </div>

                        </div>
                        <label className={`${styles.required} ${styles.mainGenderLabel}`}
                               htmlFor="gender">Gender</label>
                        {state.errors.gender && (
                            <p className={styles.errorText}>{state.errors.gender}</p>
                        )}
                    </div>
                    <div className={styles.formControll}>
                        <div className={styles.formInput}>
                            <input value={state.position} type="text" name="position"
                                   id="position"
                                   required
                                   onChange={(e) => handleChangePosition(dispatch, e)}
                                   className={`${styles.formInput} ${state.errors.position ? styles.error : ''}`}/>
                            <label className={styles.required}
                                   htmlFor="position">Job position</label>

                        </div>
                        {state.errors.position && (
                            <p className={styles.errorText}>{state.errors.position}</p>
                        )}
                    </div>
                    <div className={styles.formInputPhoto}>
                        <p className={styles.photoLabel}>Photo</p>
                        <div className={styles.uploadFileWrapper}>
                            <input
                                type="file"
                                name="files[]"
                                id="uploadFileInput1"
                                className={styles.uploadFileInput}
                                accept=".jpg, .jpeg, .png"
                                onChange={handleFileChange}
                                onClick={(event) => event.stopPropagation()}
                            />
                            <label className={styles.uploadFileLabel} htmlFor="uploadFileInput1">
                                <svg className={styles.uploadFileIcon} xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path
                                        d="M286 384h-80c-14.2 1-23-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c11.6 11.6 3.7 33.1-13.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-23-23V366c0-13.3 10.7-24 24-24h136v8c0 31 24.3 56 56 56h80c30.9 0 55-26.1 57-55v-8h135c13.3 0 24 10.6 24 24zm-124 88c0-11-9-20-19-20s-19 9-20 20 9 19 20 20 21-9 20-20zm64 0c0-12-9-20-20-20s-20 9-19 20 9 20 20 20 21-9 20-20z"></path>
                                </svg>
                                <span
                                    className={styles.uploadFileText}>{fileName ? fileName : 'Browse...'}</span>
                            </label>
                        </div>
                    </div>

                </div>
                <h3>2. Contact Info</h3>
                <div className={styles.contactInfo}>
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

                        )}
                    </div>

                    <div className={styles.formControll}>
                        <div className={styles.formInput}>
                            <input readOnly={true} type="text" name="emailStep1" id="emailStep1"
                                   required
                                   className={styles.formInput}/>
                            <label
                                htmlFor="emailStep1">Email</label>
                        </div>
                    </div>
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

                </div>
                <h3>3. Account Settings</h3>
                <div className={styles.accountSettings}>

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
                                                                    <HidePassword iconStyle={styles.icon} passwordStyle={styles.hidePassword}/>

                                                                ) : (
                                                                    <ShowPassword iconStyle={styles.icon} passwordStyle={styles.showPassword}/>

                                                                )}
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <p className={styles.errorText}>{state.errors.confirmPassword}</p>


                                                </div>

                </div>
            </div>


            {/*                <ul className={styles.ulColumn}>*/}
            {/*                    <li className={styles.liColumn}>*/}
            {/*                        <div className={styles.formControll}>*/}
            {/*                            <div className={styles.formInput}>*/}
            {/*                                <input readOnly={true} type="text" name="nameStep1" id="nameStep1"*/}
            {/*                                       required*/}
            {/*                                       className={styles.formInput}/>*/}
            {/*                                <label htmlFor="nameStep1">Name</label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*                    <li className={styles.liColumn}>*/}
            {/*                        <CheckBox title="male" setCheck={()=>{}} defaultValue={true}/>*/}
            {/*                        <div className={styles.formControll}>*/}
            {/*                            <div className={styles.formInput}>*/}
            {/*                                <input readOnly={true} type="text" name="lastNameStep1"*/}
            {/*                                       id="lastNameStep1"*/}
            {/*                                       required*/}
            {/*                                       className={styles.formInput}/>*/}
            {/*                                <label  htmlFor="lastNameStep1">Last*/}
            {/*                                    name</label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*                    <li className={styles.liColumn}>*/}
            {/*                        <div className={styles.formControll}>*/}
            {/*                            <div className={styles.formInput}>*/}
            {/*                                <input value={state.patronymic} type="text" name="patronymic"*/}
            {/*                                       id="patronymic"*/}
            {/*                                       required*/}
            {/*                                       onChange={(e) => handleChangePatronymic(dispatch, e)}*/}
            {/*                                       className={`${styles.formInput} ${state.errors.patronymic ? styles.error : ''}`}/>*/}
            {/*                                <label className={styles.required}*/}
            {/*                                       htmlFor="patronymic">Patronymic</label>*/}

            {/*                            </div>*/}
            {/*                            {state.errors.patronymic && (*/}
            {/*                                <p className={styles.errorText}>{state.errors.patronymic}</p>*/}
            {/*                            )}*/}
            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*                    <li className={styles.liColumn}>*/}
            {/*                        <div className={styles.genderContainer}>*/}
            {/*                            <div className={styles.genderInnerContainer}>*/}

            {/*                                <label className={styles.label}>Gender</label>*/}

            {/*                                <div className={styles.gender}>*/}
            {/*                                    <input className={styles.genderInput} name="gender" type="radio"*/}
            {/*                                           id="male" value="male"*/}
            {/*                                           checked={state.selectedOption === 'male'}*/}
            {/*                                           onChange={(event) => handleOptionChange(event, dispatch)}*/}
            {/*                                           required/>*/}
            {/*                                    <label className={styles.labelGender}*/}
            {/*                                           htmlFor="male">Male</label>*/}
            {/*                                </div>*/}
            {/*                                <div className={styles.gender}>*/}
            {/*                                    <input className={styles.genderInput} name="gender" type="radio"*/}
            {/*                                           value="female"*/}
            {/*                                           checked={state.selectedOption === 'female'}*/}
            {/*                                           onChange={(event) => handleOptionChange(event, dispatch)}*/}
            {/*                                           id="female"*/}
            {/*                                           required/>*/}
            {/*                                    <label className={styles.labelGender}*/}
            {/*                                           htmlFor="female">Female</label>*/}
            {/*                                </div>*/}

            {/*                            </div>*/}
            {/*                            <p className={styles.errorText}>{state.errors.gender}</p>*/}

            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*                    <li className={styles.liColumn}>*/}
            {/*                        <div >*/}
            {/*                            <div>*/}
            {/*                                <input className={styles.formInput} type="date" name="date"*/}
            {/*                                       id="date"*/}
            {/*                                       value={state.birthDate}*/}
            {/*                                       onChange={(e) => handleChangeBirthDate(dispatch, e)} aria-label="Pick a date"/>*/}
            {/*                                <label className={styles.required} htmlFor="date">Date of*/}
            {/*                                    birth</label>*/}
            {/*<DatePicker/>*/}
            {/*                            </div>*/}
            {/*                            <p className={styles.errorText}>{state.errors.birthDate}</p>*/}

            {/*                        </div>*/}
            {/*                    </li>*/}


            {/*                </ul>*/}
            {/*            </div>*/}
            {/*            <div className={styles.column}>*/}
            {/*                <ul className={styles.ulColumn}>*/}


            {/*                    <li className={styles.liColumn}>*/}
            {/*                        <div className={styles.formControll}>*/}
            {/*                            <div className={styles.formInput}>*/}
            {/*                                <input readOnly={true} type="text" name="emailStep1" id="emailStep1"*/}
            {/*                                       required*/}
            {/*                                       className={styles.formInput}/>*/}
            {/*                                <label*/}
            {/*                                       htmlFor="emailStep1">Email</label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*                    <li className={styles.liColumn}>*/}
            {/*                        <div className={styles.formControll}>*/}
            {/*                            <div className={styles.formInput}>*/}
            {/*                                <input type="text" name="workEmail" id="workEmail" required*/}
            {/*                                       value={state.personalEmail}*/}
            {/*                                       onChange={(e) => handleChangePersonalEmail(dispatch, e)}*/}
            {/*                                       className={`${styles.formInput} ${state.errors.personalEmail ? styles.error : ''}`}/>*/}
            {/*                                <label htmlFor="workEmail">Personal email</label>*/}
            {/*                            </div>*/}
            {/*                            {state.errors.personalEmail && (*/}
            {/*                                <p className={styles.errorText}>{state.errors.personalEmail}</p>*/}
            {/*                            )}*/}
            {/*                        </div>*/}

            {/*                    </li>*/}
            {/*                    <li className={styles.liColumn}>*/}
            {/*                        <div className={styles.formControll}>*/}
            {/*                            <div className={styles.formInput}>*/}
            {/*                                <div className={styles.phoneInput}>*/}
            {/*                                    <text className={styles.code}>+994</text>*/}
            {/*                                    <input type="tel" name="phoneNum" id="phoneNum" required*/}
            {/*                                           ref={phoneRef}*/}
            {/*                                           value={state.phoneNumber}*/}
            {/*                                           onChange={(e) => handleChangeInPhoneNum(dispatch, phoneRef, e)}*/}
            {/*                                           className={`${styles.formInput} ${state.errors.phoneNumber ? styles.error : ''}`}/>*/}
            {/*                                    <label className={`${styles.required} ${styles.phoneLabel}`}*/}
            {/*                                           htmlFor="phoneNum">Phone*/}
            {/*                                        number</label>*/}

            {/*                                </div>*/}

            {/*                            </div>*/}
            {/*                            {state.errors.phoneNumber && (*/}
            {/*                                <p className={styles.errorText}>{state.errors.phoneNumber}</p>*/}
            {/*                            )}*/}
            {/*                        </div>*/}

            {/*                    </li>*/}
            {/*                    <li className={styles.liColumn}>*/}
            {/*                        <div className={styles.formControll}>*/}
            {/*                            <div className={styles.formInput}>*/}
            {/*                                <div className={styles.phoneInput}>*/}
            {/*                                    <text className={styles.code}>+994</text>*/}
            {/*                                    <input type="tel" name="businessPhoneNum" id="businessPhoneNum"*/}
            {/*                                           required*/}
            {/*                                           ref={businessPhoneRef}*/}
            {/*                                           value={state.businessPhoneNumber}*/}
            {/*                                           onChange={(e) => handleChangeInBusinessPhoneNum(dispatch, businessPhoneRef, e)}*/}
            {/*                                           className={`${styles.formInput} ${state.errors.businessPhoneNumber ? styles.error : ''}`}/>*/}
            {/*                                    <label className={`${styles.phoneLabel}`}*/}
            {/*                                           htmlFor="businessPhoneNum">Business phone number*/}
            {/*                                    </label>*/}

            {/*                                </div>*/}

            {/*                            </div>*/}
            {/*                            {state.errors.businessPhoneNumber && (*/}
            {/*                                <p className={styles.errorText}>{state.errors.businessPhoneNumber}</p>*/}
            {/*                            )}                                    </div>*/}
            {/*                    </li>*/}
            {/*                    <li>*/}

            {/*                        <div className={styles.formControll}>*/}
            {/*                            <div className={styles.formInput}>*/}
            {/*                                <input type={state.passwordVisibility ? 'text' : 'password'}*/}
            {/*                                       name="password"*/}
            {/*                                       id="password"*/}
            {/*                                       required*/}
            {/*                                       className={`${styles.formInput} ${state.errors.password ? styles.error : ''}`}*/}
            {/*                                       value={state.password}*/}
            {/*                                       onChange={(e) => handleChangePassword(dispatch, e)}*/}
            {/*                                />*/}

            {/*                                <label className={styles.required} htmlFor="password">Create a new*/}
            {/*                                    password</label>*/}

            {/*                                <div className={styles.passwordShowHide}*/}
            {/*                                     onClick={() => togglePasswordVisibility(dispatch)}>*/}
            {/*                                    {state.passwordVisibility ? (*/}
            {/*                                        <HidePassword iconStyle={styles.icon} passwordStyle={styles.hidePassword} />*/}

            {/*                                    ) : (*/}
            {/*                                        <ShowPassword iconStyle={styles.icon} passwordStyle={styles.showPassword}/>*/}

            {/*                                        )}*/}
            {/*                                </div>*/}

            {/*                            </div>*/}
            {/*                            <p className={styles.errorText}>{state.errors.password}</p>*/}

            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*            <div className={styles.column}>*/}
            {/*                <ul className={styles.ulColumn}>*/}
            {/*                    <li className={styles.liColumn}>*/}
            {/*                        <div className={styles.formInput}><p className={styles.photoLabel}>Photo</p>*/}
            {/*                            <div className={styles.uploadFileWrapper}>*/}
            {/*                                <input*/}
            {/*                                    type="file"*/}
            {/*                                    name="files[]"*/}
            {/*                                    id="uploadFileInput1"*/}
            {/*                                    className={styles.uploadFileInput}*/}
            {/*                                    accept=".jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .xls, .xlsx, .txt, .tar, .zip, .7z, .7zip"*/}
            {/*                                    onChange={handleFileChange}*/}
            {/*                                />*/}
            {/*                                <label className={styles.uploadFileLabel} htmlFor="uploadFileInput1">*/}
            {/*                                    <svg className={styles.uploadFileIcon} xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                         viewBox="0 0 512 512">*/}
            {/*                                        <path*/}
            {/*                                            d="M286 384h-80c-14.2 1-23-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c11.6 11.6 3.7 33.1-13.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-23-23V366c0-13.3 10.7-24 24-24h136v8c0 31 24.3 56 56 56h80c30.9 0 55-26.1 57-55v-8h135c13.3 0 24 10.6 24 24zm-124 88c0-11-9-20-19-20s-19 9-20 20 9 19 20 20 21-9 20-20zm64 0c0-12-9-20-20-20s-20 9-19 20 9 20 20 20 21-9 20-20z"></path>*/}
            {/*                                    </svg>*/}
            {/*                                    <span*/}
            {/*                                        className={styles.uploadFileText}>{fileName ? fileName : 'Прикрепить файл'}</span>*/}
            {/*                                </label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*                    <li className={styles.liColumn}>*/}
            {/*                        <div className={styles.formControll}>*/}
            {/*                            <div className={styles.formInput}>*/}
            {/*                                <input type={state.confirmPasswordVisibility ? 'text' : 'password'}*/}
            {/*                                       name="password_confirmation" id="password_confirmation"*/}
            {/*                                       required*/}
            {/*                                       className={`${styles.formInput} ${state.errors.confirmPassword ? styles.error : ''}`}*/}
            {/*                                       value={state.confirmPassword}*/}
            {/*                                       onChange={(e) => handleChangeConfirmPassword(dispatch, e)}/>*/}

            {/*                                <label className={styles.required} htmlFor="password_confirmation">Confirm*/}
            {/*                                    password</label>*/}
            {/*                                <div className={styles.passwordShowHide}>*/}
            {/*                                    <div className={styles.passwordShowHide}*/}
            {/*                                         onClick={() => toggleConfirmPasswordVisibility(dispatch)}>*/}
            {/*                                        {state.confirmPasswordVisibility ? (*/}
            {/*                                            <HidePassword iconStyle={styles.icon} passwordStyle={styles.hidePassword}/>*/}

            {/*                                        ) : (*/}
            {/*                                            <ShowPassword iconStyle={styles.icon} passwordStyle={styles.showPassword}/>*/}

            {/*                                        )}*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}

            {/*                            </div>*/}
            {/*                            <p className={styles.errorText}>{state.errors.confirmPassword}</p>*/}


            {/*                        </div>*/}
            {/*                    </li>*/}


            {/*                </ul>*/}


            {/*            </div>*/}

        </div>
    );
};

export default Step1Form;
