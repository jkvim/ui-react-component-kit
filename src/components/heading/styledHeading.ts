import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';
import { theme } from '../../theme/defaultTheme';

const h1 = styled.h1;

/** @component */
export const StyledH1 = h1`
  color: ${props => props.theme.color.font};
  font-size: 2.8rem;
  font-weight: 100;
`;

StyledH1.defaultProps = {
  theme
};

const h2 = styled.h2;

/** @component */
export const StyledH2 = h2`
  color: ${props => props.theme.color.font};
  font-size: 2.1rem;
  font-weight: 100;
`;

StyledH2.defaultProps = {
  theme
};

const h3 = styled.h3;

/** @component */
export const StyledH3 = h3`
  color: ${props => props.theme.color.font};
  font-size: 1.6rem;
  font-weight: 100;
`;

StyledH3.defaultProps = {
  theme
};

const h4 = styled.h4;

/** @component */
export const StyledH4 = h4`
  color: ${props => props.theme.color.font};
  font-size: 1.3rem;
  font-weight: bold;
`;

StyledH4.defaultProps = {
  theme
};

const h5 = styled.h5;

/** @component */
export const StyledH5 = h5`
  color: ${props => props.theme.color.font};
  font-size: 1.2rem;
  font-weight: bold;
`;

StyledH5.defaultProps = {
  theme
};

const h6 = styled.h6;

/** @component */
export const StyledH6 = h6`
  color: ${props => props.theme.color.font};
  font-size: 1.1rem;
  font-weight: bold;
`;

StyledH6.defaultProps = {
  theme
};
