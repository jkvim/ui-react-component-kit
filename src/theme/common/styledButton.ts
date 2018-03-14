import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { buttonType } from '../../constants/constants';

export interface ButtonTypeProps {
  buttonType: string;
}
const button: StyledFunction<ButtonTypeProps &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = styled.button;

/** @component */
export const StyledButton = button`
  width: 100%;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${props => props.buttonType === buttonType.primary ? '#ffffff' : props.theme.color.default};
  background-color: ${props => 
    props.buttonType === buttonType.primary ? props.theme.color.primary :
      props.buttonType === buttonType.secondary ? props.theme.color.secondary :
        props.buttonType === buttonType.tertiary ? props.theme.color.tertiary : props.theme.color.background};
  border: 1px solid ${props => props.theme.color.border};
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
    color: {
      default: '#2fa4e7',
      border: '#2fa4e7',
      background: '#ffffff',
      primary: '#2fa4e7',
      secondary: '#e9ecef',
      tertiary: '#343a40',
      hover: '#178acc',
      focus: '#54b4eb',
      disabled: '#acacac'
    }
  }
};