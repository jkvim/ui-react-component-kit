import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { AllProps, HasErrorProps } from '../../theme/common/props';
import { theme } from '../../theme/defaultTheme';

const errorDiv: StyledFunction<HasErrorProps & AllProps> = styled.div;

/** @component */
export const StyledErrorDiv = errorDiv`
    color: ${props => props.theme.color.error};
    padding-top: ${props => props.hasError ? '10px' : '0px'};
    font-size: ${props => props.theme.font.size.default};
  `;

StyledErrorDiv.defaultProps = {
  theme
};