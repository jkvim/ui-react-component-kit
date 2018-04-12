/// <reference types="react" />
import * as React from 'react';
import { ReactNode } from 'react';
import { AlertType } from '../../constants/types';
export interface AlertProps {
    id: string;
    children?: ReactNode;
    type?: AlertType;
    className?: string;
}
declare const Alert: React.SFC<AlertProps>;
export default Alert;
