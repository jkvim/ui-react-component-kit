import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';
import { theme } from '../../theme/defaultTheme';

const paragraph = styled.p;

/** @component */
export const StyledParagraph = paragraph`
  color: ${props => props.theme.color.font};
  font-size: ${props => props.theme.font.size.default};
  font-weight: ${props => props.theme.font.weight.default};
`;

StyledParagraph.defaultProps = {
  theme
};
