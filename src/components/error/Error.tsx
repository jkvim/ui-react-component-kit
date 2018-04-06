import * as React from 'react';
import { ReactNode } from 'react';
import { StyledErrorDiv } from './styledErrorDiv';

export interface ErrorProps {
  id: string;
  children: ReactNode;
}

const Error: React.SFC<ErrorProps> = ({ id, children }) => {
  return (
    <StyledErrorDiv id={`${id}-error`}>
      {children}
    </StyledErrorDiv>
  );
};

export default Error;