import * as React from 'react';
import { StyledLabel, StyledLabelInline } from './styledLabel';
import { LabelType } from '../../constants/types';

export interface LabelProps {
  htmlFor: string;
  value: string;
  type?: LabelType;
  hasError?: boolean;
}

// tslint:disable-next-line:no-shadowed-variable
const Label: React.SFC<LabelProps> = ({ htmlFor, value, hasError = false, type = 'standard' }) => {
  if (type === 'radio' || type === 'checkbox') {
    return (
      <StyledLabelInline
        htmlFor={htmlFor}
        hasError={hasError}
        type={type}
      >
        {value}
      </StyledLabelInline>
    );
  }

  return (
    <StyledLabel
      htmlFor={htmlFor}
      hasError={hasError}
    >
      {value}
    </StyledLabel>
  );
};

export default Label;