import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { defaultTheme } from '../defaultTheme';

export interface HasErrorProps {
  hasError: boolean;
}

const label: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

export const StyledLabel = label`
  color: ${props => props.hasError ? props.theme.color.error : props.theme.color.font};
  font-size: ${props => props.theme.font.size};
  display: inline-block;
  position: relative;
  padding-bottom: 5px;
`;

StyledLabel.defaultProps = {
  theme: {
    font: {
      size: defaultTheme.font.size
    },
    color: {
      font: defaultTheme.color.font,
      error: defaultTheme.color.error
    }
  }
};

const labelCheckbox: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

/** @component */
export const StyledLabelCheckbox = labelCheckbox`
  color: ${props => props.hasError ? props.theme.color.error : props.theme.color.font};
  font-size: ${props => props.theme.font.size};
  position: relative;
  padding-left: 35px;
  padding-right: 15px;
  display: inline-block;
  cursor: pointer;
  line-height: 1;
  
  &:before {
    content: "";
    line-height: 1;
    font-size: ${props => props.theme.font.size};
    height: 25px;
    width: 25px;
    background: #ffffff;
    padding-top: 0.1rem;
    border: 1px solid ${props => props.hasError ? props.theme.color.error : props.theme.color.border};
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
    font: {
      size: defaultTheme.font.size
    },
    color: {
      border: defaultTheme.color.border,
      font: defaultTheme.color.font,
      error: defaultTheme.color.error
    }
  }
};

const labelRadio: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

/** @component */
export const StyledLabelRadio = labelRadio`
  color: ${props => props.hasError ? props.theme.color.error : props.theme.color.font};
  position: relative;
  line-height: 1;
  padding-left: 30px;
  padding-right: 15px;
  display: inline-block;
  cursor: pointer;
  font-size: ${props => props.theme.font.size};
  
  &:before {
    content: "";
    font-size: ${props => props.theme.font.size};
    height: calc(${props => props.theme.font.size} + 2px);
    width: calc(${props => props.theme.font.size} + 2px);
    border-radius: 100%;
    border: 4px solid #ffffff;
    box-shadow: 0 0 0 1px ${props => props.hasError ? props.theme.color.error : props.theme.color.border};
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    left: 0;
    top: calc((0% - (100% - ${props => props.theme.font.size})) - 10%);
    background-color: transparent;
  }
`;

StyledLabelRadio.defaultProps = {
  theme: {
    font: {
      size: defaultTheme.font.size
    },
    color: {
      border: defaultTheme.color.border,
      font: defaultTheme.color.font,
      error: defaultTheme.color.error
    }
  }
};
