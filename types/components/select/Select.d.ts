/// <reference types="react" />
import * as React from 'react';
import { SelectItem } from './types';
export interface SelectProps {
    label: string;
    id: string;
    placeholder?: string;
    onBlur?: (value: string) => void;
    onChange?: (value: string, event?: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
    options?: SelectItem[];
    value?: string;
    hint?: string;
    setSelectRef?: (ref: HTMLSelectElement) => void;
    errorMessage?: string;
    className?: string;
}
declare const Select: React.SFC<SelectProps>;
export default Select;
