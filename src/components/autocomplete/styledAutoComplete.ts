import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { lighten } from 'polished';
import { theme } from '../../theme/defaultTheme';

/** @component */
export const StyledAutoCompleteContainer = styled.div`
  position: relative;
 `;

/** @component */
export const StyledAutoCompleteResults = styled.div`
   position: absolute;
   z-index: 999;
   width: 100%;
   `;

/** @component */
export const StyledSelectableList = styled.ul`
  border: 1px solid ${props => props.theme.color.border};
  background-color: ${props => props.theme.color.background};
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  
  & mark {
    font-weight: bold;
    background-color: ${props => props.theme.color.background};
  }
`;

StyledSelectableList.defaultProps = {
  theme
};

/** @component */
export const StyledListItem = styled.li`
  border: none;
  padding: 5px 15px 5px 15px;
  color: ${props => props.theme.color.font};
  font-size: ${props => props.theme.font.size};
`;

StyledListItem.defaultProps = {
  theme
};

/** @component */
export const StyledSelectableListItem = StyledListItem.extend`
  &:hover, &[aria-selected="true"] {
    background-color: ${props => lighten(0.5, props.theme.color.hover)};
    cursor: pointer;
    
    & mark {
      background-color: ${props => lighten(0.5, props.theme.color.hover)};
    }
  }
`;

StyledSelectableListItem.defaultProps = {
  theme
};

/** @component */
export const StyledItemAnchor = styled.a`
    text-decoration: none;
    color: ${props => props.theme.color.font};
    font-size: ${props => props.theme.font.size};
  `;

StyledItemAnchor.defaultProps = {
  theme
};