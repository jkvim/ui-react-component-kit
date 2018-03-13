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
  color: ${props => props.theme.color.font};
  border: 1px solid ${(props) => props.hasError ? props.theme.color.error : props.theme.color.border};
  border-radius: 2px;
  height: auto;
  padding: 8px 12px 5px;
  font-size: 1.8rem;
  font-weight: 100;
  
   &:focus {
    color:  ${props => props.theme.color.font};
    border-color:  ${props => props.theme.color.focus};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
  }
  
  &:hover {
    color:  ${props => props.theme.color.font};
    border-color:  ${props => props.theme.color.hover};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
  }
  
  &:disabled {
    color:  ${props => props.theme.color.disabled};
    border-color:  ${props => props.theme.color.disabled};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.disabled};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.disabled};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.disabled};
  }
`;

StyledSelect.defaultProps = {
  theme: {
    color: {
      default: '#2fa4e7',
      font: '#868e96',
      border: '#2fa4e7',
      background: '#ffffff',
      hover: '#178acc',
      focus: '#54b4eb',
      error: '#c71c22',
      disabled: '#acacac'
    }
  }
};
