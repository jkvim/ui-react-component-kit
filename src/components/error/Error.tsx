import * as React from 'react';
import { StyledErrorDiv } from './styledErrorDiv';

export interface ErrorProps {
  id: string;
  message: string;
}

const Error: React.SFC<ErrorProps> = ({ id, message }) => {
  return (
    <StyledErrorDiv id={`${id}-error`} hasError={!!message}>
      {message}
    </StyledErrorDiv>
  );
};

export default Error;