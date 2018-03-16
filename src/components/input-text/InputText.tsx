import * as React from 'react';
import { kebabCase } from 'lodash';
import { noop } from 'lodash';
import { StyledLabel, StyledInputText, StyledFormGroupDiv, StyledHintDiv, StyledErrorDiv } from '../../theme/common';

export interface InputTextProps {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  hint?: string;
  errorMessage?: string;
  showError?: boolean;
  className?: string;
  disabled?: boolean;
  setInputRef?: (ref: HTMLInputElement) => void;
  onBlur?: (value: string) => void;
  onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (keyCode: number, event: React.KeyboardEvent<HTMLInputElement>) => void;

  // excess property bags mainly used for capturing ARIA tags to be passed down to the HTML Input.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

const InputText: React.SFC<InputTextProps> =
  ({ label, id, hint, className, value = '', errorMessage = '', showError = true, placeholder = '',
     onBlur = noop, onChange = noop, onKeyDown = noop, setInputRef = noop, disabled }) => {

    return (
      <StyledFormGroupDiv className={className}>

        <StyledLabel htmlFor={id} hasError={!!errorMessage}>
          {label}
        </StyledLabel>

        {hint && <StyledHintDiv hasError={!!errorMessage}>{hint}</StyledHintDiv>}

        <StyledInputText
          {...this.props}
          innerRef={ref => setInputRef(ref)}
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={
            event => onChange(event.target.value, event)
          }
          onKeyDown={
            event => onKeyDown(event.keyCode, event)
          }
          onBlur={event => onBlur(value)}
          value={value}
          disabled={disabled}
          hasError={!!errorMessage}
          aria-invalid={!!errorMessage}
          aria-describedby={`${id}-error`}
        />

        {showError && <StyledErrorDiv id={`${id}-error`} hasError={!!errorMessage}>{errorMessage}</StyledErrorDiv>}

      </StyledFormGroupDiv>
    );
  };

export default InputText;