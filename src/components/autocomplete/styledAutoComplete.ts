import styled from 'styled-components';

export const StyledAutoCompleteContainer = styled.div`
  position: relative;
 `;

export const StyledAutoCompleteResults = styled.div`
   position: absolute;
   z-index: 999;
   width: 100%;
   `;

export const StyledSelectableList = styled.ul`
  border: 1px solid #ddd;
  background-color: white;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  
  & mark {
    font-weight: bold;
    background-color: white;
  }
`;

export const StyledListItem = styled.li`
  border: none;
  padding: 5px 15px 5px 15px;
  color: black;
`;

export const StyledSelectableListItem = StyledListItem.extend`
  &:hover, &[aria-selected="true"] {
    background-color: #F6F6F6;
    cursor: pointer;
    
    & mark {
      background-color: #F6F6F6;
    }
  }
`;

export const StyledItemAnchor = styled.a`
    text-decoration: none;
    color: black;
  `;
