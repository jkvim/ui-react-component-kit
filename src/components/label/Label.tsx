import * as React from 'react';
import { ReactNode } from 'react';
import { StyledLabel, StyledLabelInline } from './styledLabel';
import { LabelType } from '../../constants/types';

export interface LabelProps {
  htmlFor: string;
  children: ReactNode;
  type?: LabelType;
  hasError?: boolean;
}

// tslint:disable-next-line:no-shadowed-variable
const Label: React.SFC<LabelProps> = ({ htmlFor, children, hasError = false, type = 'standard' }) => {
  if (type === 'radio' || type === 'checkbox') {
    return (
      <StyledLabelInline
        htmlFor={htmlFor}
        hasError={hasError}
        type={type}
      >
        {children}
      </StyledLabelInline>
    );
  }

  return (
    <StyledLabel
      htmlFor={htmlFor}
      hasError={hasError}
    >
      {children}
    </StyledLabel>
  );
};

export default Label;