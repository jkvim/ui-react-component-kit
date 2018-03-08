import * as React from 'react';
import { kebabCase } from 'lodash';
import { noop } from 'lodash';
import { StyledErrorDiv, StyledLabel, StyledHintDiv, StyledFormGroupDiv, StyledSelect } from '../../theme/common';
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
  setSelectRef?: (ref: HTMLSelectElement) => void;
  errorMessage?: string;
  className?: string;

  // excess property bags mainly used for capturing ARIA tags to be passed down to the HTML Select.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

const Select: React.SFC<SelectProps> =
  ({ label, id, hint, className, value = '', errorMessage = '', placeholder = '', options,
     onBlur = noop, onChange = noop, setSelectRef = noop, disabled }) => {

  return (
    <StyledFormGroupDiv className={className}>
      <StyledLabel htmlFor={id} hasError={!!errorMessage}>
        {label}
      </StyledLabel>
      {hint && <StyledHintDiv hasError={!!errorMessage}>{hint}</StyledHintDiv>}
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
    </StyledFormGroupDiv>
  );
};

export default Select;
