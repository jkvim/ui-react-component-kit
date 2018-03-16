import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { buttonType } from '../../constants/constants';
import { defaultTheme } from '../defaultTheme';
import { ButtonTypeProps } from './props';

const button: StyledFunction<ButtonTypeProps &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = styled.button;

/** @component */
export const StyledButton = button`
  font-size: ${props => props.theme.font.size};
  color: ${props => props.buttonType === buttonType.primary ? '#ffffff' : props.theme.color.default};
  background-color: ${props =>
  props.buttonType === buttonType.primary ? props.theme.color.primary :
    props.buttonType === buttonType.secondary ? props.theme.color.secondary :
      props.buttonType === buttonType.tertiary ? props.theme.color.tertiary : props.theme.color.background};
  border: 1px solid ${props => props.theme.color.border};
  width: 100%;
  font-weight: 400;
  border-radius: 2px;
  padding: 15px;
  cursor: pointer;
  
  &:hover {
    -webkit-box-shadow: 0 0 0px 2px ${props => props.theme.color.hover};
    -moz-box-shadow: 0 0 0px 2px ${props => props.theme.color.hover};
    box-shadow: 0 0 0px 2px ${props => props.theme.color.hover};
  }
  
  &:focus {
    -webkit-box-shadow: 0 0 0px 2px ${props => props.theme.color.focus};
    -moz-box-shadow: 0 0 0px 2px ${props => props.theme.color.focus};
    box-shadow: 0 0 0px 2px ${props => props.theme.color.focus};
  }
  
  &:disabled {
    color: #ffffff;
    background-color: ${props => props.theme.color.disabled};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
    -moz-box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
    box-shadow: 0 0 0px 2px ${props => props.theme.color.disabled};
    cursor: auto;
  }
`;

StyledButton.defaultProps = {
  theme: {
    font: {
      size: defaultTheme.font.size
    },
    color: {
      default: defaultTheme.color.default,
      border: defaultTheme.color.border,
      background: defaultTheme.color.background,
      primary: defaultTheme.color.primary,
      secondary: defaultTheme.color.secondary,
      tertiary: defaultTheme.color.tertiary,
      hover: defaultTheme.color.hover,
      focus: defaultTheme.color.focus,
      disabled: defaultTheme.color.disabled
    }
  }
};