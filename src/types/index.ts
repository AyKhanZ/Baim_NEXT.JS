import React, {Dispatch, SetStateAction} from "react";
import {QuestionnaireAction, QuestionnaireState} from "@/types/questionnaireTypes";

export type Product = {
    id: number;
    id1C: string;
    name: string;
    desc: string;
    combinedImage: string;
    productType: string;
    isPublic: boolean;
};

export interface FormErrorsStep1 {
    birthDate?: string;
    patronymic?: string;
    password?: string;
    confirmPassword?: string;
    personalEmail?: string;
    phoneNumber?: string;
    businessPhoneNumber?: string;
    gender?: string;
    position?:string;

}

export interface FormErrorsStep2 {
    voen?: string;
    activity?:string;
}

export interface FormInputStep3 {
    id: number;
    name: string;
    lastName: string;
    email: string;
}

export interface FormInputErrorStep3 {
    [key: string]: string | undefined;

    name?: string;
    lastName?: string;
    email?: string;
}

export interface Step2FormProps {
    state: QuestionnaireState;
    dispatch: React.Dispatch<QuestionnaireAction>;
    handleChangeVoen: (event: React.ChangeEvent<HTMLInputElement>) => void;
    goToPreviousStep: () => void;
    handleSubmitStep2: () => void;

}

export interface Step1FormProps {
    state: QuestionnaireState;
    dispatch: Dispatch<QuestionnaireAction>;
    hasErrors: boolean;
    changeTab: (tabId: string) => void;

}

export interface Step3FormProps {
    state: QuestionnaireState;
    dispatch: Dispatch<QuestionnaireAction>;
    errorsStep3: FormInputErrorStep3[];
    setErrorsStep3: Dispatch<SetStateAction<FormInputErrorStep3[]>>;
    handleInputChange: (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>,
        dispatch: Dispatch<QuestionnaireAction>,
        state: QuestionnaireState,
        setErrorsStep3: Dispatch<SetStateAction<FormInputErrorStep3[]>>,
        errorsStep3: FormInputErrorStep3[]
    ) => void;
    handleAddClick: (dispatch: Dispatch<QuestionnaireAction>) => void;
    handleRemoveClick: (index: number, dispatch: Dispatch<QuestionnaireAction>) => void;
    handleSubmitStep3: (
        state: QuestionnaireState,
        dispatch: Dispatch<QuestionnaireAction>,
        setErrorsStep3: Dispatch<SetStateAction<FormInputErrorStep3[]>>
    ) => void;
    goToPreviousStep: (dispatch: Dispatch<QuestionnaireAction>) => void;
}


export interface SvgComponentProps {
    iconStyle: string,
    passwordStyle: string
}

export interface MyDatePickerProps {
    className?: string,
    onChange?: (timestamp: number) => void,
    state?: QuestionnaireState,
    dispatch?: React.Dispatch<QuestionnaireAction>
}

export interface DayDetails {
    date: number;
    day: number;
    month: number;
    timestamp: number;
    dayString: string;
}

export interface MyDatePickerState {
    year: number;
    month: number;
    selectedDay: number;
    monthDetails: DayDetails[];
    showDatePicker: boolean;
}

export interface CompanyForm {
    voen: string;
    companyName: string;
    legalAddress: string;
    legalForm: string;
    legalRepresentative: string;
    selectedActivities: string[];
}

