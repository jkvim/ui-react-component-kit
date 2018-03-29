import * as React from 'react';
import styled, { StyledComponentClass, StyledFunction } from 'styled-components';
import { AlignmentProps, BreakpointProps } from './props';
import { breakpoint } from '../utils/util';
import { StyledErrorDiv } from '../../components/error/styledErrorDiv';
import { theme } from '../defaultTheme';

const inputGroup: StyledFunction<AlignmentProps & BreakpointProps> = styled.div;

/** @component */
export const StyledInputGroupDiv = inputGroup`
  display: flex;
  flex-direction: ${props => props.breakpoint ? 'column' : props.alignment === 'horizontal' ? 'row' : 'column'};
    
  ${props => breakpoint(props.breakpoint, `
    flex-direction: ${props.alignment === 'horizontal' ? 'row' : 'column'};
  `)}
`;

StyledInputGroupDiv.defaultProps = {
  theme
};