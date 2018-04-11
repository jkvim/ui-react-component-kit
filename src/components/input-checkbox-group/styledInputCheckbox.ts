import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { HasErrorProps } from '../../theme/common/props';
import { theme } from '../../theme/defaultTheme';

// tslint:disable

const inputCheckbox: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = styled.input.attrs({
  type: 'checkbox'
});

/** @component */
export const StyledInputCheckbox = inputCheckbox`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  opacity: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  
  &:checked + label:before {
    font-family: "Font Awesome\\ 5 Free";
    content: "\\f00c";
    font-weight: 900;
    color: ${props => props.hasError ? props.theme.color.error : props.theme.color.default};
    border-color: ${props => props.theme.color.border};
    box-shadow: 0 0 0 ${props => props.theme.border.radius.edge} ${props => props.hasError ? props.theme.color.error : props.theme.color.checked};
  }
  
  &:focus + label:before {
    box-shadow: 0 0 0 ${props => props.theme.border.radius.edge} ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
  }
  
  &:hover + label:before {
    box-shadow: 0 0 0 ${props => props.theme.border.radius.edge} ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
  }
  
  &:disabled + label:before {
    color: ${props => props.theme.color.disabled};
    border-color: ${props => props.theme.color.disabled};
    box-shadow: 0 0 0 ${props => props.theme.border.radius.edge} ${props => props.theme.color.disabled};
  }
`;

StyledInputCheckbox.defaultProps = {
  theme
};

const inputCheckboxDiv = styled.div;

/** @component */
export const StyledInputCheckboxDiv = inputCheckboxDiv`
  display: flex;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`;

// tslint:enable
