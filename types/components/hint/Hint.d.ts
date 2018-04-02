/// <reference types="react" />
import * as React from 'react';
export interface HintProps {
    hint: string;
    hasError?: boolean;
}
declare const Hint: React.SFC<HintProps>;
export default Hint;
