import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';

export interface HasErrorProps {
  hasError: boolean;
}

const label: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

export const StyledLabel = label`
  color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
  display: inline-block;
  font-size: 1.5rem;
  position: relative;
  padding-bottom: 10px;
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

/** @component */
export const StyledLabelCheckbox = labelCheckbox`
  padding: 0 5px 0 35px;
  display: inline-block;
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

const labelRadio: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

/** @component */
export const StyledLabelRadio = labelRadio`
  position: relative;
  line-height: 1;
  padding-left: 40px;
  padding-right: 10px;
  display: inline-block;
  color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
  cursor: pointer;
  
  &:before {
    content: "";
    font-size: 2.6rem;
    height: calc(2.6rem + 2px);
    width: calc(2.6rem + 2px);
    background: ${props => props.theme.color.color};
    border-radius: 100%;
    border: 8px solid #ffffff;
    box-shadow: 0 0 0 1px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    left: 0;
    top: calc((0% - (100% - 1rem)) - 8%);
    background-color: transparent;

  }
`;

StyledLabelRadio.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f',
      color: '#333333'
    }
  }
};
