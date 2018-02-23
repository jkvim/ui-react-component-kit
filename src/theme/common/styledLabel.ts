import styled, { StyledFunction } from 'styled-components';
import * as React from 'react';

interface HasErrorProps {
  hasError: boolean;
}

const label: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

export const StyledLabel = label`
  color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
  display: inline-block;
  font-size: 1.5rem;
  position: relative;
`;

StyledLabel.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f',
      color: '#333'
    }
  }
};

const labelCheckbox: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

export const StyledLabelCheckbox = labelCheckbox`
  padding: 0 5px 0 45px;
  color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
  cursor: pointer;
  
  &:before {
    content: "";
    line-height: 1;
    font-size: 1.8rem;
    height: 25px;
    width: 25px;
    background: #fff;
    padding-top: 0.1rem;
    border: 1px solid ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    box-sizing: border-box;
    margin-top: -5px;
    display: inline-block;
    margin-left: 0.1em;
    position: absolute;
    left: 0;
    background-color: transparent;
    top: 0;
  }
`;

StyledLabelCheckbox.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f',
      color: '#333'
    }
  }
};

/* Checkbox styling */

/*.checkbox label {
  margin-bottom: 10px;
}

.checkbox label:before {
  content: "";
  font-size: 32px;
  font-size: 3.2rem;
  height: 30px;
  width: 30px;
  background: #fff;
  padding-top: 0.1em;
  border: 1px solid black;
  box-sizing: border-box;
  margin-top: -5px;
}

.checkbox input[type=checkbox]:checked + label:before {
  content: "\E0AC";
  color: #0E8387;
  border-color: #0E8387;
}

input[type="checkbox"]:focus + label:before {
  color: #0E8387;
  border-color: #0E8387;
  -webkit-box-shadow: 0 0 0px 2px #0E8387;
  -moz-box-shadow: 0 0 0px 2px #0E8387;
  box-shadow: 0 0 0px 2px #0E8387;
}

input[type=checkbox]:disabled + label:before {
  border-color:  #ACACAC;
}

input[type=checkbox]:checked:disabled + label:before {
  border-color: transparent;
}

input[type=checkbox]:disabled + label, input[type=radio]:disabled + label {
  cursor: not-allowed;
}*/

const labelRadio: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

export const StyledLabelRadio = labelRadio`
  color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
  
  &:before {
    content: "";
    font-size: 32px;
    font-size: 3.2rem;
    height: 30px;
    width: 30px;
    background: #fff;
    padding-top: 0.1em;
    border: 1px solid ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    box-sizing: border-box;
    margin-top: -5px;
  }
`;

StyledLabelRadio.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f',
      color: '#333'
    }
  }
};

/*Radio styling*/

/*
.radio {
  padding-left: 0;
}

.radio label {
  padding: 0 20px 0 56px;
  box-sizing: border-box;
  margin: 20px 10px 18px 0;
}

.radio label:before {
  content: '';
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 8px solid #fff;
  box-shadow: 0 0 0 1px #9e9e9e;
  transition: 0.3s ease all;
  background-color: #ffffff;
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -17px;
  z-index:2;
}

.radio label:after {
  content: '';
  position:absolute;
  left: 0;
  top: -19px;
  border: 1px solid #A0A0A0;
  padding: 15px 0 18px 0;
  box-sizing: border-box;
  border-radius: 2px;
  width: 100%;
  bottom: -16px;
  background-color: transparent;
  z-index:1;
}

.radio label:hover:after {
  background-color: rgba(0,0,0,0.025);
}

.radio input[type=radio]:checked + label {
  color: #04545D;
}

.radio input[type=radio]:checked + label:before {
  background: #0E8387;
}

.radio input[type=radio]:checked + label:after {
  border-color: #0E8387;
  border-width: 3px;
}

.radio input[type=radio]:disabled + label {
  color: #666666;
}

.radio input[type=radio]:disabled + label:before {
  background: none;
  border-color: #EAEDEE;
}

.radio input[type=radio]:checked:disabled + label:before {
  background: #666666;
  border-color: #FFFFFF;
}

.radio input[type=radio]:checked:disabled + label:after {
  border-color: #A0A0A0;
}

.radio input[type=radio]:disabled + label:after {
  background-color: rgba(0,30,4,0.08)
}

.radio input[type=radio]:disabled {
  cursor: not-allowed;
}

.radio label[disabled] {
  cursor: not-allowed;
}

.radio input[type="radio"]:focus + label:before {
  color: #0E8387;
}

.radio input[type="radio"]:focus + label:after {
  border-color: #0E8387;
  box-shadow: 0 0 0 1px #0E8387;
}*/
