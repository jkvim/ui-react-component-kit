/// <reference types="react" />
import * as React from 'react';
import { AllProps } from '../../theme/common/props';
export interface InputTextProps extends AllProps {
    id: string;
    label: string;
    placeholder?: string;
    value?: string;
    hint?: string;
    errorMessage?: string;
    showError?: boolean;
    className?: string;
    disabled?: boolean;
    setInputRef?: (ref: HTMLInputElement) => void;
    onBlur?: (value: string) => void;
    onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (keyCode: number, event: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const InputText: React.SFC<InputTextProps>;
export default InputText;
