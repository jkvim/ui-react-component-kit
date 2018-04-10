/// <reference types="react" />
import * as React from 'react';
import { AlignmentType, BreakpointType } from '../../constants/types';
export interface InputRadio {
    label: string;
    value: string | number | string[];
}
export interface InputRadioGroupProps {
    id: string;
    name: string;
    options: InputRadio[];
    hint?: string;
    value?: string | number | string[];
    alignment?: AlignmentType;
    breakpoint?: BreakpointType;
    errorMessage?: string;
    className?: string;
    disabled?: boolean;
    setInputRef?: (ref: HTMLInputElement) => void;
    onChange?: (value: string | number | string[], event?: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const InputRadioGroup: React.SFC<InputRadioGroupProps>;
export default InputRadioGroup;
