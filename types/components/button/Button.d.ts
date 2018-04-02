/// <reference types="react" />
import * as React from 'react';
import { ReactNode } from 'react';
import { ButtonType } from '../../constants/types';
export interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    type?: ButtonType;
    disabled?: boolean;
}
declare const Button: React.SFC<ButtonProps>;
export default Button;
