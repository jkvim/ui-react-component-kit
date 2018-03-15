import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { defaultTheme } from '../defaultTheme';

export interface HasErrorProps {
  hasError: boolean;
}

const errorDiv: StyledFunction<HasErrorProps> = styled.div;

/** @component */
export const StyledErrorDiv = errorDiv`
    color: ${props => props.theme.color.error};
    padding-top: ${props => props.hasError ? '10px' : '0px'};
    font-size: ${props => props.theme.font.size};
  `;

StyledErrorDiv.defaultProps = {
  theme: {
    font: {
      size: defaultTheme.font.size
    },
    color: {
      error: defaultTheme.color.error
    }
  }
};