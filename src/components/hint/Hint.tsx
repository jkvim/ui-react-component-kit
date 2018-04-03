import * as React from 'react';
import { StyledHintDiv } from './styledHintDiv';

export interface HintProps {
  value: string;
  hasError?: boolean;
}

const Hint: React.SFC<HintProps> = ({ value, hasError = false }) => {
  return (
    <StyledHintDiv hasError={hasError}>{value}</StyledHintDiv>
  );
};

export default Hint;