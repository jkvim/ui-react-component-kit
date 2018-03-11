import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';

export interface HasErrorProps {
  hasError: boolean;
}

const hintDiv: StyledFunction<HasErrorProps> = styled.div;

/** @component */
export const StyledHintDiv = hintDiv`
    color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    padding-bottom: 5px;
    padding-top: 5px;
  `;

StyledHintDiv.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f'
    }
  }
};