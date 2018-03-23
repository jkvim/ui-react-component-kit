import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { HasErrorProps } from './props';
import { theme } from '../defaultTheme';

const errorDiv: StyledFunction<HasErrorProps> = styled.div;

/** @component */
export const StyledErrorDiv = errorDiv`
    color: ${props => props.theme.color.error};
    padding-top: ${props => props.hasError ? '10px' : '0px'};
    font-size: ${props => props.theme.font.size.default};
  `;

StyledErrorDiv.defaultProps = {
  theme
};