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
    border-radius: ${props => props.type === 'radio' ? '100%' : '0%'};
    border: ${props => (props.type === 'radio' ? '4px solid #ffffff' : '1px solid' + props.hasError ? props.theme.color.error : props.theme.color.border)};
    box-shadow: 0 0 0 1px ${props => props.hasError ? props.theme.color.error : props.theme.color.border};
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    left: 0;
    top: calc((0% - (100% - ${props => props.theme.font.size.default})) - 10%);
    background-color: transparent;
  }
`;

StyledLabelInline.defaultProps = {
  theme
};

// tslint:enable
