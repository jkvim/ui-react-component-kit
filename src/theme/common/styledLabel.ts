import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { HasErrorProps } from './props';
import { theme } from '../defaultTheme';

const label: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

export const StyledLabel = label`
  display: inline-block;
  position: relative;
  font-size: ${props => props.theme.font.size.default};
  color: ${props => props.hasError ? props.theme.color.error : props.theme.color.font};
  padding-bottom: 5px;
`;

StyledLabel.defaultProps = {
  theme
};

const labelCheckbox: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

/** @component */
export const StyledLabelCheckbox = labelCheckbox`
  color: ${props => props.hasError ? props.theme.color.error : props.theme.color.font};
  font-size: ${props => props.theme.font.size.default};
  position: relative;
  padding-left: 35px;
  padding-right: 15px;
  display: inline-block;
  cursor: pointer;
  line-height: 1;
  
  &:before {
    content: "";
    font-size: ${props => props.theme.font.size.default};
    height: calc(${props => props.theme.font.size.default} + 4px);
    width: calc(${props => props.theme.font.size.default} + 4px);
    border: 1px solid ${props => props.hasError ? props.theme.color.error : props.theme.color.border};
    box-sizing: border-box;
    box-shadow: 0 0 0 1px ${props => props.hasError ? props.theme.color.error : props.theme.color.border};
    display: inline-block;
    position: absolute;
    top: calc((0% - (100% - ${props => props.theme.font.size.default})) - 10%);
    left: 0;
    background-color: transparent;
  }
`;

StyledLabelCheckbox.defaultProps = {
  theme
};

const labelRadio: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

/** @component */
export const StyledLabelRadio = labelRadio`
  color: ${props => props.hasError ? props.theme.color.error : props.theme.color.font};
  font-size: ${props => props.theme.font.size.default};
  position: relative;
  line-height: 1;
  padding-left: 35px;
  padding-right: 15px;
  display: inline-block;
  cursor: pointer;
  
  &:before {
    content: "";
    font-size: ${props => props.theme.font.size.default};
    height: calc(${props => props.theme.font.size.default} + 4px);
    width: calc(${props => props.theme.font.size.default} + 4px);
    border-radius: 100%;
    border: 4px solid #ffffff;
    box-shadow: 0 0 0 1px ${props => props.hasError ? props.theme.color.error : props.theme.color.border};
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    left: 0;
    top: calc((0% - (100% - ${props => props.theme.font.size.default})) - 10%);
    background-color: transparent;
  }
`;

StyledLabelRadio.defaultProps = {
  theme
};
