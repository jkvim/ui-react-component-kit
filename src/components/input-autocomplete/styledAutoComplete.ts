import styled from 'styled-components';

export const AutoCompleteContainer = styled.div`
  position: relative;
 `;

export const AutoCompleteResults = styled.div`
   position: absolute;
   z-index: 999;
   width: 100%;
   `;

export const SelectableList = styled.ul`
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

export const ListItem = styled.li`
  border: none;
  padding: 5px 15px 5px 15px;
  color: black;
`;

export const SelectableListItem = ListItem.extend`
  &:hover, &[aria-selected="true"] {
    background-color: #F6F6F6;
    cursor: pointer;
    
    & mark {
      background-color: #F6F6F6;
    }
  }
`;

export const ItemAnchor = styled.a`
    text-decoration: none;
    color: black;
  `;
