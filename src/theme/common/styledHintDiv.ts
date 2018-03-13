import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';

export interface HasErrorProps {
  hasError: boolean;
}

const hintDiv: StyledFunction<HasErrorProps> = styled.div;

/** @component */
export const StyledHintDiv = hintDiv`
    color: ${props => props.hasError ? props.theme.color.error : props.theme.color.font};
    padding-bottom: 5px;
  `;

StyledHintDiv.defaultProps = {
  theme: {
    color: {
      font: '#868e96',
      error: '#c71c22'
    }
  }
};