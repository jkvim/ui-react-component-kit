import * as React from 'react';
import { omit, noop } from 'lodash';
import { StyledHintDiv, StyledErrorDiv, StyledFormGroup, StyledInputRadio, StyledLabelRadio } from '../../theme/common';

export enum alignment {
  horizontal,
  vertical,
}

// TODO: alignment
export interface InputRadioProps {
  id: string;
  label: string;
  hint?: string;
  value?: boolean;
  onChange?: (value: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
  align?: alignment;
  disabled?: boolean;
  setInputRef?: (ref: HTMLInputElement) => void;
  errorMessage?: string;
  className?: string;

  // excess property bags mainly used for capturing ARIA tags to be passed down to the HTML Input.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

const InputRadio: React.SFC<InputRadioProps> =
  ({ label, id, hint, className, value = '', errorMessage = '', onChange = noop, setInputRef = noop, disabled }) => {

  /*isHorizontal() {
    return (this.props.align as alignment === alignment.horizontal);
  }*/

  return (
    <StyledFormGroup className={className}>
      {hint && <StyledHintDiv>{hint}</StyledHintDiv>}
      <StyledInputRadio
        {...this.props}
        innerRef={ref => setInputRef(ref)}
        id={id}
        type="radio"
        checked={value}
        onChange={
          event => onChange(event.target.checked, event)
        }
        disabled={disabled}
        hasError={!!errorMessage}
      />
      <StyledLabelRadio htmlFor={id} hasError={!!errorMessage}>
        {label}
      </StyledLabelRadio>

      <StyledErrorDiv>
        {errorMessage}
      </StyledErrorDiv>
    </StyledFormGroup>
  );

};

export default InputRadio;
