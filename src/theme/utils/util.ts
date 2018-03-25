import { css, Styles, StyledComponentClass } from 'styled-components';

export const breakpoint = (value, styles) => {
  return ({ theme }) => {
    return css`
      @media (min-width: ${theme.breakpoints[value]}px) {
        ${styles};
      }
    `;
  };
};
