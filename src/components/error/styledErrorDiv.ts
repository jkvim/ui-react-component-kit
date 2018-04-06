import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { theme } from '../../theme/defaultTheme';

const errorDiv = styled.div;

/** @component */
export const StyledErrorDiv = errorDiv`
    padding-top: 10px;
    color: ${props => props.theme.color.error};
    font-size: ${props => props.theme.font.size.default};
  `;

StyledErrorDiv.defaultProps = {
  theme
};