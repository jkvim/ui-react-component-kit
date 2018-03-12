import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';

const screenReaderSpan = styled.span;

/** @component */
export const StyledScreenReaderSpan = screenReaderSpan`
  position: absolute;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;