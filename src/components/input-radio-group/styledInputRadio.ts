import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { HasErrorProps } from '../../theme/common/props';
import { theme } from '../../theme/defaultTheme';

// tslint:disable

const inputRadio: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = styled.input.attrs({
  type: 'radio'
});

/** @component */
export const StyledInputRadio = inputRadio`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  opacity: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  
  &:checked + label:before {
    background-color: ${props => props.hasError ? props.theme.color.error : props.theme.color.default};
    border-color: ${props => props.theme.color.background};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.checked};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.checked};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.checked};
  }
  
  &:hover + label:before {
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
  }
  
  &:focus + label:before {
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
  }
  
  &:disabled + label:before {
    border-color: #ffffff;
    -webkit-box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
    -moz-box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
    box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
  }
  
  &:disabled {
    &:checked + label:before {
      background-color: ${props => props.theme.color.disabled};
    }
  }
`;

StyledInputRadio.defaultProps = {
  theme
};

const inputRadioDiv = styled.div;

/** @component */
export const StyledInputRadioDiv = inputRadioDiv`
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`;
// tslint:enable
