// tslint:disable
import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';

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
    color:  ${props => props.theme.color.disableColor};
    border-color:  ${props => props.theme.color.disableColor};
  }
`;

StyledInputText.defaultProps = {
  theme: {
    color: {
      color: '#333',
      errorColor: '#9f173f',
      borderColor: '#333',
      disableColor: '#acacac'
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
    color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    border-color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
  }
  
  &:focus + label:before {
    color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    border-color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
  }
  
  &:disabled + label:before {
    color:  ${props => props.theme.color.disableColor};
    border-color:  ${props => props.theme.color.disableColor};
  }
`;

StyledInputCheckbox.defaultProps = {
  theme: {
    color: {
      color: '#333',
      errorColor: '#9f173f',
      borderColor: '#333',
      disableColor: '#acacac'
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
    background-color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    border-color: #ffffff;
  }
  
  &:focus + label:before {
    color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    border-color: #ffffff;
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
  }
  
  &:disabled + label:before {
    border-color:  ${props => props.theme.color.disableColor};
  }
`;

StyledInputRadio.defaultProps = {
  theme: {
    color: {
      color: '#333333',
      errorColor: '#9f173f',
      borderColor: '#333333',
      disableColor: '#acacac'
    }
  }
};
// tslint:enable
