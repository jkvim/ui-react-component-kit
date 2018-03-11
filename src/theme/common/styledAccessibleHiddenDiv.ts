import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';

/** @component */
export const StyledAccessibleHiddenDiv = styled.div`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;