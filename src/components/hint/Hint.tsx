import * as React from 'react';
import { ReactNode } from 'react';
import { StyledHintDiv } from './styledHintDiv';

export interface HintProps {
  children: ReactNode;
  hasError?: boolean;
}

const Hint: React.SFC<HintProps> = ({ children, hasError = false }) => {
  return (
    <StyledHintDiv hasError={hasError}>
      {children}
    </StyledHintDiv>
  );
};

export default Hint;