import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { HasErrorProps, LabelProps } from '../../theme/common/props';
import { theme } from '../../theme/defaultTheme';

// tslint:disable

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

const labelnline: StyledFunction<LabelProps & HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

/** @component */
export const StyledLabelInline = labelnline`
  display: flex;
  color: ${props => props.hasError ? props.theme.color.error : props.theme.color.font};
  font-size: ${props => props.theme.font.size.default};
  position: relative;
  padding-right: 25px;
  cursor: pointer;
  
  &:before {
    display: flex;
    justify-content: center;
    line-height: 1;
    margin-right: 10px;
    content: "";
    font-size: ${props => props.theme.font.size.default};
    height: calc(${props => props.theme.font.size.default} + 5px);
    width: calc(${props => props.theme.font.size.default} + 5px);
    border-radius: ${props => props.type === 'radio' ? '100%' : '0%'};
    border: ${props => (props.type === 'radio' ? '4px solid #ffffff' : '1px solid' + props.hasError ? props.theme.color.error : props.theme.color.border)};
    box-shadow: 0 0 0 1px ${props => props.hasError ? props.theme.color.error : props.theme.color.border};
    box-sizing: border-box;
    background-color: transparent;
    left: 0;
    top: 0;
  }
`;

StyledLabelInline.defaultProps = {
  theme
};

// tslint:enable
