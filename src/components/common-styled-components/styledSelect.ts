import styled, { StyledFunction } from 'styled-components';

interface HasErrorProps {
  hasError: boolean;
}

const select: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>> = styled.select;

export const StyledSelect = select`
  width: 100%;
  background-color: white;
  color: #333;
  border: ${(props) => props.hasError ? 
  `1px solid ${props.theme.color.errorColor}` : 
  `1px solid  ${props.theme.color.borderColor}`};
  border-radius: 2px;
  height: auto;
  padding: 8px 12px 5px;
  font-size: 1.5rem;
  font-weight: 100;
`;

StyledSelect.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f',
      borderColor: '#9e9e9e'
    }
  }
};
