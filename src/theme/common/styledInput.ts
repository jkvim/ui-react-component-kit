import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';

// tslint:disable
export interface HasErrorProps {
  hasError: boolean;
}

// ### Input Text ###

const inputText: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = styled.input.attrs({
    type: 'text'
  });

/** @component */
export const StyledInputText = inputText`
  width: 100%;
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.font};
  border: 1px solid ${(props) => props.hasError ? props.theme.color.error : props.theme.color.border};
  border-radius: 2px;
  height: auto;
  padding: 8px 12px 5px;
  font-size: 1.8rem;
  font-weight: 100;
  
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
    color: {
      default: '#2fa4e7',
      font: '#868e96',
      border: '#178acc',
      background: '#ffffff',
      hover: '#178acc',
      focus: '#54b4eb',
      error: '#c71c22',
      disabled: '#acacac'
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
    color: {
      default: '#2fa4e7',
      border: '#178acc',
      background: '#ffffff',
      hover: '#178acc',
      focus: '#54b4eb',
      checked: '#2fa4e7',
      error: '#c71c22',
      disabled: '#acacac'
    }
  }
};

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
    
    &:checked {
      background-color: red;
    }
  }
  
  &:disabled {
    &:checked + label:before {
      background-color: ${props => props.theme.color.disabled};
    }
  }
`;

StyledInputRadio.defaultProps = {
  theme: {
    color: {
      default: '#2fa4e7',
      border: '#178acc',
      background: '#ffffff',
      hover: '#178acc',
      focus: '#54b4eb',
      checked: '#2fa4e7',
      error: '#c71c22',
      disabled: '#acacac'
    }
  }
};
// tslint:enable
