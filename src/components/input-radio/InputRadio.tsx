import * as React from 'react';
import { omit, noop } from 'lodash';
import { StyledErrorDiv, StyledFormGroup, StyledInputRadio, StyledLabelRadio } from '../../theme/common';

export enum alignment {
  horizontal,
  vertical,
}

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

  // excess property bags mainly used for capturing ARIA tags to be passed down to the HTML Input.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

const InputRadio: React.SFC<InputRadioProps> =
  ({ label, id, hint, value = '', errorMessage = '', onChange = noop, setInputRef = noop, disabled }) => {

  /*isHorizontal() {
    return (this.props.align as alignment === alignment.horizontal);
  }*/

  return (
    <StyledFormGroup>
      {hint && <div className={!!errorMessage ? 'error' : ''}>{hint}</div>}
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

/*const { onChange, fieldState, disabled = false } = this.props;

const optionalProps = {
  onChange: () => {
    // Always update fieldState model
    fieldState.onChange(this.props.value);

    // Optional onChange event to be called
    if (onChange) {
      onChange();
    }
  },
};

const input = () => {
  return (
    <input
      id={this.props.id}
      name={this.props.name}
      type="radio"
      className={getValidationState(this.props.fieldState.error)}
      checked={this.isChecked()}
      value={this.props.value.value}
      disabled={disabled}
      {...optionalProps}
    />
  );
};

if (this.isHorizontal()) {
  return (
    <span className="form-group">
          {input()}
      <label htmlFor={this.props.id}>
            {this.props.value.display}
          </label>
        </span>
  );
} else {
  return (
    <FormGroup className="radio">
      {input()}
      <label htmlFor={this.props.id} className="justify">
        {this.props.value.display}
      </label>
    </FormGroup>
  );
}
}*/

export default InputRadio;
