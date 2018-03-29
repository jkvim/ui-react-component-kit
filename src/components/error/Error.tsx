import * as React from 'react';
import { StyledErrorDiv } from './styledErrorDiv';

export interface ErrorProps {
  id: string;
  errorMessage: string;
}

const Error: React.SFC<ErrorProps> = ({ id, errorMessage }) => {
  return (
    <StyledErrorDiv id={`${id}-error`} hasError={!!errorMessage}>
      {errorMessage}
    </StyledErrorDiv>
  );
};

export default Error;