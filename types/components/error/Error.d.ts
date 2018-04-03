/// <reference types="react" />
import * as React from 'react';
export interface ErrorProps {
    id: string;
    message: string;
}
declare const Error: React.SFC<ErrorProps>;
export default Error;
