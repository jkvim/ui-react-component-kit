import { css, Styles, StyledComponentClass } from 'styled-components';

export const breakpoint = (value, styles) => {
  return ({ theme }) => {

    if (value) {
      return css`
        @media (min-width: ${theme.breakpoint[value]}) {
          ${styles};
        }
    `;
    }

    return css``;
  };
};
