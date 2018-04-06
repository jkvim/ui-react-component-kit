/// <reference types="react" />
import * as React from 'react';
import { ReactNode } from 'react';
export interface ErrorProps {
    id: string;
    children: ReactNode;
}
declare const Error: React.SFC<ErrorProps>;
export default Error;
