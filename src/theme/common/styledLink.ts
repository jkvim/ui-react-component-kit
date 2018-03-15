import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { defaultTheme } from '../defaultTheme';

const link: StyledFunction<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = styled.a;

/** @component */
export const StyledLink = link`
  color: ${props => props.theme.color.default};
  font-size: ${props => props.theme.font.size};
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.color.hover};
  }
  
  &:focus {
    color: ${props => props.theme.color.focus};
  }
`;

StyledLink.defaultProps = {
  theme: {
    font: {
      size: defaultTheme.font.size
    },
    color: {
      default: defaultTheme.color.default,
      hover: defaultTheme.color.hover,
      focus: defaultTheme.color.focus,
      error: defaultTheme.color.error,
      disabled: defaultTheme.color.disabled
    }
  }
};

const linkExternalSpan = styled.span;

/** @component */
export const StyledLinkExternalSpan = linkExternalSpan`
  &:after {
    font-family: "fontawesome";
    font-weight: 900;
    content: '\\f35d';
    margin-left: 5px;
  }
`;