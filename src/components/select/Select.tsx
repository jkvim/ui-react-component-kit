import * as React from 'react';
import { kebabCase } from 'lodash';
import { noop } from 'lodash';
import { StyledErrorDiv, StyledLabel, StyledFormGroup, StyledSelect } from '../theme/common';
import { SelectItem } from './types';

interface SelectProps {
  label: string;
  id: string;
  placeholder?: string;
  onBlur?: (value: string) => void;
  onChange?: (value: string, event?: React.ChangeEvent<HTMLSelectElement>) => void;
  onKeyDown?: (keyCode: number, event: React.KeyboardEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  options?: SelectItem[];
  value?: SelectItem;
  hint?: string;
  errorMessage?: string;
  setSelectRef?: (ref: HTMLSelectElement) => void;
}

const Select: React.SFC<SelectProps> =
  ({ label, id, hint, value = '', errorMessage = '', placeholder = '', options,
     onBlur = noop, onChange = noop, onKeyDown = noop, setSelectRef = noop, disabled }) => {

  return (
    <StyledFormGroup>
      <StyledLabel htmlFor={id} hasError={!!errorMessage}>
        {label}
      </StyledLabel>
      {hint && <div className={!!errorMessage ? 'error' : ''}>{hint}</div>}
      <StyledSelect
        {...this.props}
        innerRef={ref => setSelectRef(ref)}
        id={id}
        onChange={
          event => onChange(event.target.value, event)
        }
        onBlur={event => onBlur(value)}
        value={value}
        disabled={disabled}
        hasError={!!errorMessage}
      >
        <option value="">{placeholder}</option>
        {options.map((item, index) => <option key={index} value={item.value}>{item.display}</option>)}
      </StyledSelect>
      <StyledErrorDiv>
        {errorMessage}
      </StyledErrorDiv>
    </StyledFormGroup>
  );
};

export default Select;
