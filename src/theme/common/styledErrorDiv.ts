import styled from 'styled-components';

export const StyledErrorDiv = styled.div`
    color: ${props => props.theme.color.errorColor};
    padding-top: 5px;
  `;

StyledErrorDiv.defaultProps = {
  theme: {
    color: {
      errorColor: 'red'
    }
  }
};