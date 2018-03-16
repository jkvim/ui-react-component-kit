import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { defaultTheme } from '../defaultTheme';
import { alignment } from '../../constants/constants';
import { HasErrorProps, AlignmentProps } from './props';

// tslint:disable

// ### Input Text ###

const inputText: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = styled.input.attrs({
    type: 'text'
  });

/** @component */
export const StyledInputText = inputText`
  font-size: ${props => props.theme.font.size};
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.font};
  border: 1px solid ${(props) => props.hasError ? props.theme.color.error : props.theme.color.border};
  border-radius: 2px;
  height: auto;
  padding: 8px 12px 5px;
  font-weight: 100;
  width: 100%;
  
  &:hover {
    border-color:  ${props => props.theme.color.hover};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
  }
  
  &:focus {
    border-color: ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
  }
  
  &:disabled {
    color:  ${props => props.theme.color.disabled};
    border-color:  ${props => props.theme.color.disabled};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
    -moz-box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
    box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
  }
`;

StyledInputText.defaultProps = {
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

// ### Input Checkbox ###

const inputCheckbox: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = styled.input.attrs({
  type: 'checkbox'
});

/** @component */
export const StyledInputCheckbox = inputCheckbox`
  position: absolute;
  width: 22px;
  height: 22px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  opacity: 0;
  
  &:checked + label:before {
    font-family: "glyphicons";
    content: "\\E013";
    padding-left: 2px;
    color: ${props => props.hasError ? props.theme.color.error : props.theme.color.default};
    border-color: ${props => props.theme.color.border};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.checked};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.checked};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.checked};
  }
  
  &:focus + label:before {
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
  }
  
  &:hover + label:before {
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
  }
  
  &:disabled + label:before {
    color: ${props => props.theme.color.disabled};
    border-color: ${props => props.theme.color.disabled};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
    -moz-box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
    box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
  }
`;

StyledInputCheckbox.defaultProps = {
  theme: {
    font: {
      size: defaultTheme.font.size
    },
    color: {
      default: defaultTheme.color.default,
      border: defaultTheme.color.border,
      background: defaultTheme.color.background,
      hover: defaultTheme.color.hover,
      focus: defaultTheme.color.focus,
      checked: defaultTheme.color.checked,
      error: defaultTheme.color.error,
      disabled: defaultTheme.color.disabled
    }
  }
};

const inputCheckboxDiv: StyledFunction<AlignmentProps> = styled.div;

/** @component */
export const StyledInputCheckboxDiv = inputCheckboxDiv`
  position: relative;
  padding-top: ${props =>
  props.alignment === alignment.horizontal ? '10px' : '10px'};
  
  padding-bottom: ${props =>
  props.alignment === alignment.horizontal ? '10px' : '10px'};
`;

// ### Input Radio ###

const inputRadio: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = styled.input.attrs({
  type: 'radio'
});

/** @component */
export const StyledInputRadio = inputRadio`
  position: absolute;
  left: 0;
  top: 0;
  min-width: 1em;
  width: 100%;
  height: 100%;
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
  theme: {
    font: {
      size: defaultTheme.font.size
    },
    color: {
      default: defaultTheme.color.default,
      border: defaultTheme.color.border,
      background: defaultTheme.color.background,
      hover: defaultTheme.color.hover,
      focus: defaultTheme.color.focus,
      checked: defaultTheme.color.checked,
      error: defaultTheme.color.error,
      disabled: defaultTheme.color.disabled
    }
  }
};

const inputRadioDiv: StyledFunction<AlignmentProps> = styled.div;

/** @component */
export const StyledInputRadioDiv = inputRadioDiv`
  position: relative;
  padding-top: ${props =>
  props.alignment === alignment.horizontal ? '10px' : '10px'};
  
  padding-bottom: ${props =>
  props.alignment === alignment.horizontal ? '10px' : '10px'};
`;
// tslint:enable
