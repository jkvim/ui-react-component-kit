import styled, { StyledFunction } from 'styled-components';

interface HasErrorProps {
  hasError: boolean;
}

const hint: StyledFunction<HasErrorProps> = styled.div;

export const StyledHintDiv = hint`
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