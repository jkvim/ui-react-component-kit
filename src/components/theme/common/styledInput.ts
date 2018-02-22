import styled, { StyledFunction } from 'styled-components';

interface HasErrorProps {
  hasError: boolean;
}

// ### Input Text ###

const inputText: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = styled.input.attrs({
    type: 'text'
  });

export const StyledInputText = inputText`
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

StyledInputText.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f',
      borderColor: '#9e9e9e'
    }
  }
};

// ### Input Checkbox ###

const inputCheckbox: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = styled.input.attrs({
  type: 'checkbox'
});

export const StyledInputCheckbox = inputCheckbox`
  position: absolute;
  width: 22px;
  height: 22px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  opacity: 0;
  
  &:checked + label:before {
    content: "\\E0AC";
    color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    border-color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
  }
  
  &:focus + label:before {
    color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    border-color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
  }
  
  &:disabled + label:before {
    border-color:  #ACACAC;
  }
`;

StyledInputCheckbox.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f',
      borderColor: '#9e9e9e'
    }
  }
};

// ### Input Radio ###

const inputRadio: StyledFunction<HasErrorProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = styled.input.attrs({
  type: 'radio'
});

export const StyledInputRadio = inputRadio`
`;

StyledInputRadio.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f',
      borderColor: '#9e9e9e'
    }
  }
};
