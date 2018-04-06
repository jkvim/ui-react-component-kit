/// <reference types="react" />
import * as React from 'react';
import { ReactNode } from 'react';
export interface HintProps {
    children: ReactNode;
    hasError?: boolean;
}
declare const Hint: React.SFC<HintProps>;
export default Hint;
