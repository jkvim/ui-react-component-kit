import styled, { StyledFunction } from 'styled-components';

interface HasErrorProps {
  hasError: boolean;
}

const hintDiv: StyledFunction<HasErrorProps> = styled.div;

export const StyledHintDiv = hintDiv`
    color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    padding-bottom: 4px;
    padding-top: 4px;
  `;

StyledHintDiv.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f'
    }
  }
};