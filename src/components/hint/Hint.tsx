import * as React from 'react';
import { StyledHintDiv } from './styledHintDiv';

export interface HintProps {
  hint: string;
  hasError?: boolean;
}

const Hint: React.SFC<HintProps> = ({ hint, hasError = false }) => {
  return (
    <StyledHintDiv hasError={hasError}>{hint}</StyledHintDiv>
  );
};

export default Hint;