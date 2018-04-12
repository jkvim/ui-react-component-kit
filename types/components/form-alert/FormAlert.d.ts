/// <reference types="react" />
import * as React from 'react';
export interface FieldErrorProps {
    id: string;
    label: string | Function;
    msg: string;
    hasError: boolean;
}
export interface FormFieldsProps {
    id: string;
    formFields: FieldErrorProps[];
    title: string;
    isVisible: boolean;
}
export declare const scrollOnClick: (event: any, elementId: any) => void;
declare class FormAlert extends React.Component<FormFieldsProps, {}> {
    render(): JSX.Element;
}
export default FormAlert;
