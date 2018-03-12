import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';

export interface HasErrorProps {
  hasError: boolean;
}

const hintDiv: StyledFunction<HasErrorProps> = styled.div;

/** @component */
export const StyledHintDiv = hintDiv`
    color: ${props => props.hasError ? props.theme.color.error : props.theme.color.color};
    padding-bottom: 5px;
  `;

StyledHintDiv.defaultProps = {
  theme: {
    color: {
      color: '#333333',
      error: '#9f173f'
    }
  }
};