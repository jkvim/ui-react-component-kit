import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';

export interface HasErrorProps {
  hasError: boolean;
}

const errorDiv: StyledFunction<HasErrorProps> = styled.div;

/** @component */
export const StyledErrorDiv = errorDiv`
    color: ${props => props.theme.color.error};
    padding-top: ${props => props.hasError ? '10px' : '0px'};
  `;

StyledErrorDiv.defaultProps = {
  theme: {
    color: {
      error: '#9f173f'
    }
  }
};