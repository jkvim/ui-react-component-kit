import * as React from 'react';
import { kebabCase } from 'lodash';
import { noop } from 'lodash';
import { StyledErrorDiv, StyledLabel, StyledFormGroup, StyledSelect } from '../../theme/common';
import { SelectItem } from './types';

interface SelectProps {
  label: string;
  id: string;
  placeholder?: string;
  onBlur?: (value: string) => void;
  onChange?: (value: string, event?: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  options?: SelectItem[];
  value?: string;
  hint?: string;
  errorMessage?: string;
  setSelectRef?: (ref: HTMLSelectElement) => void;

  // excess property bags mainly used for capturing ARIA tags to be passed down to the HTML Select.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

const Select: React.SFC<SelectProps> =
  ({ label, id, hint, value = '', errorMessage = '', placeholder = '', options,
     onBlur = noop, onChange = noop, setSelectRef = noop, disabled }) => {

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
