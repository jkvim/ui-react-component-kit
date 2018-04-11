import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { theme } from '../../theme/defaultTheme';

const link: StyledFunction<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = styled.a;

/** @component */
export const StyledLink = link`
  text-decoration: none;
  color: ${props => props.theme.color.default};
  font-size: ${props => props.theme.font.size.default};
  
  &:hover {
    color: ${props => props.theme.color.hover};
  }
  
  &:focus {
    color: ${props => props.theme.color.focus};
  }
`;

StyledLink.defaultProps = {
  theme
};

const linkExternalSpan = styled.span;

/** @component */
export const StyledLinkExternalSpan = linkExternalSpan`
  &:after {
    font-family: "Font Awesome\\ 5 Free";
    font-weight: 900;
    content: '\\f35d';
    margin-left: 5px;
  }
`;