/// <reference types="react" />
import * as React from 'react';
import { AllProps } from '../../theme/common/props';
export interface FieldsetProps extends AllProps {
    id: string;
    legend?: string;
    className?: string;
}
declare const Fieldset: React.SFC<FieldsetProps>;
export default Fieldset;
