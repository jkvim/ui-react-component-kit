import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { defaultTheme } from '../defaultTheme';
import { HasErrorProps } from './props';

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
  font-size: ${props => props.theme.font.size};
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
    font: {
      size: defaultTheme.font.size
    },
    color: {
      default: defaultTheme.color.default,
      font: defaultTheme.color.font,
      border: defaultTheme.color.border,
      background: defaultTheme.color.background,
      hover: defaultTheme.color.hover,
      focus: defaultTheme.color.focus,
      error: defaultTheme.color.error,
      disabled: defaultTheme.color.disabled
    }
  }
};
