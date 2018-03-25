import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { ButtonTypeProps } from '../../theme/common/props';
import { theme } from '../../theme/defaultTheme';

const button: StyledFunction<ButtonTypeProps &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = styled.button;

/** @component */
export const StyledButton = button`
  font-size: ${props => props.theme.font.size.default};
  color: ${props => props.buttonType === 'primary' ? '#ffffff' : props.theme.color.default};
  background-color: ${props => backgroundColor(props)};
  border: ${props => props.theme.border.size} solid ${(props) => props.theme.color.border};
  border-radius: ${props => props.theme.border.radius.edge};
  width: 100%;
  font-weight: 400;
  padding: 15px;
  cursor: pointer;
  
  &:focus {
    box-shadow: 
      0 0 0 ${props => props.theme.border.radius.edge} ${props => props.theme.color.focus};
  }
  
  &:hover {
    box-shadow: 
      0 0 0 ${props => props.theme.border.radius.edge} ${props => props.theme.color.hover};
  }
  
  &:disabled {
    cursor: auto;
    color: #ffffff;
    background-color: ${props => props.theme.color.disabled};
    box-shadow: 
      0 0 0 ${props => props.theme.border.radius.edge} ${props => props.theme.color.disabled};
  }
`;

StyledButton.defaultProps = {
  theme
};

const backgroundColor = (props) => {
  return (props.buttonType === 'primary' ? props.theme.color.primary :
    props.buttonType === 'secondary' ? props.theme.color.secondary :
      props.buttonType === 'tertiary' ? props.theme.color.tertiary :
        props.theme.color.background);
};