import styled from 'styled-components';

export const StyledErrorDiv = styled.div`
    color: ${props => props.theme.color.errorColor};
  `;

StyledErrorDiv.defaultProps = {
  theme: {
    color: {
      errorColor: 'red'
    }
  }
};