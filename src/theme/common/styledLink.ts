import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';

const link: StyledFunction<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = styled.a;

/** @component */
export const StyledLink = link`
  color: ${props => props.theme.color.default};
  text-decoration: none;
  font-size: 1.8rem;
  
  &:hover {
    color: ${props => props.theme.color.hover};
  }
  
  &:focus {
    color: ${props => props.theme.color.focus};
  }
`;

StyledLink.defaultProps = {
  theme: {
    color: {
      default: '#2fa4e7',
      hover: '#178acc',
      focus: '#54b4eb',
      error: '#c71c22',
      disabled: '#acacac'
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