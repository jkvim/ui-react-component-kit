import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { HasErrorProps } from '../../theme/common/props';
import { theme } from '../../theme/defaultTheme';

// tslint:disable

const inputText: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = styled.input.attrs({
    type: 'text'
  });

/** @component */
export const StyledInputText = inputText`
  width: 100%;
  font-size: ${props => props.theme.font.size.default};
  font-weight: ${props => props.theme.font.weight.default};
  color: ${props => props.theme.color.font};
  background-color: ${props => props.theme.color.background};
  border: ${props => props.theme.border.size} solid ${(props) => props.hasError ? props.theme.color.error : props.theme.color.border};
  border-radius: ${props => props.theme.border.radius.edge};
  height: auto;
  padding: 8px 12px 5px;
  
  &:focus {
    color:  ${props => props.theme.color.font};
    border-color:  ${props => props.theme.color.focus};
    box-shadow: 0 0 0 ${props => props.theme.border.radius.edge} ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
  }
  
  &:hover {
    color:  ${props => props.theme.color.font};
    border-color:  ${props => props.theme.color.hover};
    box-shadow: 0 0 0 ${props => props.theme.border.radius.edge} ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
  }
  
  &:disabled {
    color:  ${props => props.theme.color.disabled};
    border-color:  ${props => props.theme.color.disabled};
    box-shadow: 0 0 0 ${props => props.theme.border.radius.edge} ${props => props.hasError ? props.theme.color.error : props.theme.color.disabled};
  }
`;

StyledInputText.defaultProps = {
  theme
};

// tslint:enable
