import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';

const link: StyledFunction<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = styled.a;

/** @component */
export const StyledLink = link`
  color: ${props => props.theme.color.color};
`;

StyledLink.defaultProps = {
  theme: {
    color: {
      color: '#333333'
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