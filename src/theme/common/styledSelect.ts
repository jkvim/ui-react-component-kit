import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';

export interface HasErrorProps {
  hasError: boolean;
}

const select: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>> = styled.select;

/** @component */
export const StyledSelect = select`
  width: 100%;
  background-color: white;
  color: ${props => props.theme.color.color};
  border: 1px solid ${(props) => props.hasError ? props.theme.color.error : props.theme.color.border};
  border-radius: 2px;
  height: auto;
  padding: 8px 12px 5px;
  font-size: 1.5rem;
  font-weight: 100;
  
  &:disabled {
    color:  ${props => props.theme.color.disabled};
    border-color:  ${props => props.theme.color.disabled};
  }
`;

StyledSelect.defaultProps = {
  theme: {
    color: {
      color: '#333333',
      border: '#333333',
      error: '#9f173f',
      disabled: '#acacac'
    }
  }
};
