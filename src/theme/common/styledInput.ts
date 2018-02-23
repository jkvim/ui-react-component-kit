// tslint:disable
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
      borderColor: '#333'
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
    font-family: "glyphicons";
    content: "\\E013";
    padding-left: 2px;
    color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    border-color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
  }
  
  &:focus + label:before {
    color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.color};
    border-color: ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
    -webkit-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
    -moz-box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
    box-shadow: 0 0 0px 2px ${props => props.hasError ? props.theme.color.errorColor : props.theme.color.borderColor};
  }
  
  &:disabled + label:before {
    color:  ${props => props.theme.color.disableColor};
    border-color:  ${props => props.theme.color.disableColor};
  }
`;

StyledInputCheckbox.defaultProps = {
  theme: {
    color: {
      errorColor: '#9f173f',
      borderColor: '#333',
      disableColor: '#acacac'
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
      borderColor: '#333'
    }
  }
};
// tslint:enable
