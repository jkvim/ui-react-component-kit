import styled, { StyledFunction } from 'styled-components';
import * as React from 'react';

interface HasErrorProps {
  hasError: boolean;
}
const label: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = styled.label;

export const StyledLabel = label`
  color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
  display: inline-block;
  font-size: 1.5rem;
`;

StyledLabel.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f',
      color: '#333'
    }
  }
};
