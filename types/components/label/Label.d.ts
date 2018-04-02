/// <reference types="react" />
import * as React from 'react';
import { LabelType } from '../../constants/types';
export interface LabelProps {
    htmlFor: string;
    value: string;
    type?: LabelType;
    hasError?: boolean;
}
declare const Label: React.SFC<LabelProps>;
export default Label;
