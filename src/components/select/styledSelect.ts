import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { HasErrorProps } from '../../theme/common/props';
import { theme } from '../../theme/defaultTheme';

// tslint:disable

const select: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>> = styled.select;

/** @component */
export const StyledSelect = select`
  width: 100%;
  font-size: ${props => props.theme.font.size.default};
  font-weight: ${props => props.theme.font.weight.default};
  color: ${props => props.theme.color.font};
  background-color: ${props => props.theme.color.background};
  border: ${props => props.theme.border.size} solid ${(props) => props.hasError ? props.theme.color.error : props.theme.color.border};
  border-radius: ${props => props.theme.border.radius.edge};
  appearance: none;
  cursor: pointer;
  padding: 8px 12px 5px;
  
  &:focus {
    color:  ${props => props.theme.color.font};
    border-color:  ${props => props.theme.color.focus};
    box-shadow: 0 0 0 ${props => props.theme.border.radius.edge} ${props => props.hasError ? props.theme.color.error : props.theme.color.focus};
  }
  
  &:hover {
    color:  ${props => props.theme.color.font};
    border-color:  ${props => props.theme.color.hover};
    box-shadow: 0 0 0 ${props => props.theme.border.radius.edge} ${props => props.hasError ? props.theme.color.error : props.theme.color.hover};
  }
  
  &:disabled {
    cursor: auto;
    color:  ${props => props.theme.color.disabled};
    border-color:  ${props => props.theme.color.disabled};
    box-shadow: 0 0 0 ${props => props.theme.border.radius.edge} ${props => props.hasError ? props.theme.color.error : props.theme.color.disabled};
  }
 
`;

StyledSelect.defaultProps = {
  theme
};

const selectWrapperDiv = styled.div;

/** @component */
export const StyledSelectWrapperDiv = selectWrapperDiv`
  position: relative;
  
  &:after {
    font-family: "Font Awesome\\ 5 Free";
    font-weight: 900;
    content: "\\f078";
    background: #000000;
    color: #ffffff;
    padding: .6em 1em;
    font-size: ${props => props.theme.font.size.default};
    position: absolute;
    right: -1px;
    top: 0;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
    border-radius: 0 ${props => props.theme.border.radius.edge} ${props => props.theme.border.radius.edge} 0;
  }
`;

StyledSelectWrapperDiv.defaultProps = {
  theme
};

// tslint:enable
