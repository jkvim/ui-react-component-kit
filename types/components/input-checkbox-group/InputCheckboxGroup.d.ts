/// <reference types="react" />
import * as React from 'react';
import { AlignmentType, BreakpointType } from '../../constants/types';
export interface CheckBox {
    label: string;
    value: string;
}
export interface CheckBoxFieldProps {
    id: string;
    name: string;
    options: CheckBox[];
    hint?: string;
    values?: string[];
    alignment?: AlignmentType;
    breakpoint?: BreakpointType;
    errorMessage?: string;
    className?: string;
    disabled?: boolean;
    setInputRef?: (ref: HTMLInputElement) => void;
    onChange?: (values: string[], event?: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const InputCheckbox: React.SFC<CheckBoxFieldProps>;
export default InputCheckbox;
