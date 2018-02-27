import * as React from 'react';
import { omit, noop } from 'lodash';
import {
  StyledHintDiv,
  StyledErrorDiv,
  StyledFormGroup,
  StyledInputCheckbox,
  StyledLabelCheckbox
} from '../../theme/common';

export interface CheckBoxFieldProps {
  id: string;
  label: string;
  hint?: string;
  value?: boolean;
  onChange?: (value: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  setInputRef?: (ref: HTMLInputElement) => void;
  errorMessage?: string;
  className?: string;

  // excess property bags mainly used for capturing ARIA tags to be passed down to the HTML Input.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

const InputCheckbox: React.SFC<CheckBoxFieldProps> =
  ({ label, id, hint, className, value = '', errorMessage = '', onChange = noop, setInputRef = noop, disabled }) => {

    return (
      <StyledFormGroup className={className}>
        {hint && <StyledHintDiv>{hint}</StyledHintDiv>}
        <StyledInputCheckbox
          {...this.props}
          innerRef={ref => setInputRef(ref)}
          id={id}
          type="checkbox"
          checked={value}
          onChange={
            event => onChange(event.target.checked, event)
          }
          disabled={disabled}
          hasError={!!errorMessage}
        />
        <StyledLabelCheckbox htmlFor={id} hasError={!!errorMessage}>
          {label}
        </StyledLabelCheckbox>

        <StyledErrorDiv>
          {errorMessage}
        </StyledErrorDiv>
      </StyledFormGroup>
    );
};

export default InputCheckbox;
