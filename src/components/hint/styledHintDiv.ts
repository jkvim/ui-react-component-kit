import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { HasErrorProps } from '../../theme/common/props';
import { theme } from '../../theme/defaultTheme';

const hintDiv: StyledFunction<HasErrorProps> = styled.div;

/** @component */
export const StyledHintDiv = hintDiv`
    color: ${props => props.hasError ? props.theme.color.error : props.theme.color.font};
    padding-bottom: 5px;
  `;

StyledHintDiv.defaultProps = {
  theme
};