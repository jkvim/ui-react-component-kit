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
  color: #333;
  border: ${(props) => props.hasError ? 
  `1px solid ${props.theme.color.errorColor}` : 
  `1px solid  ${props.theme.color.borderColor}`};
  border-radius: 2px;
  height: auto;
  padding: 8px 12px 5px;
  font-size: 1.5rem;
  font-weight: 100;
  
  &:disabled {
    color:  ${props => props.theme.color.disabledColor};
    border-color:  ${props => props.theme.color.disabledColor};
  }
`;

StyledSelect.defaultProps = {
  theme: {
    color: {
      color: '#333',
      borderColor: '#333',
      errorColor: '#9f173f',
      disabledColor: '#acacac'
    }
  }
};
