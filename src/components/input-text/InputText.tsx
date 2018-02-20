import * as React from 'react';
import { kebabCase } from 'lodash';
import { noop } from 'lodash';
import { StyledLabel, StyledInputText, StyledFormGroup, StyledErrorDiv } from '../common-styled-components';

interface InputTextProps {
  label: string;
  id: string;
  placeholder?: string;
  onBlur?: (value: string) => void;
  onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (keyCode: number, event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
  errorMessage?: string;
  setInputRef?: (ref: HTMLInputElement) => void;

  // excess property bags mainly used for capturing ARIA tags to be passed down to the HTML Input.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

const InputText: React.SFC<InputTextProps> =
  ({ label, id, value = '', errorMessage = '', placeholder = '', className,
     onBlur = noop, onChange = noop, onKeyDown = noop, setInputRef = noop, disabled }) => {

    return (
      <div className={className}>
        <StyledLabel htmlFor={id} hasError={!!errorMessage}>
          {label}
        </StyledLabel>
        <br />
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
        />
        <StyledErrorDiv>
          {errorMessage}
        </StyledErrorDiv>
      </div>
    );
  };

export default InputText;