import styled, { StyledFunction } from 'styled-components';

interface HasErrorProps {
  hasError: boolean;
}

const errorDiv: StyledFunction<HasErrorProps> = styled.div;

/** @component */
export const StyledErrorDiv = errorDiv`
    color: ${props => props.theme.color.errorColor};
    padding-top: ${props => props.hasError ? '10px' : '0px'};
  `;

StyledErrorDiv.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f'
    }
  }
};