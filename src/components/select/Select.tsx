import * as React from 'react';
import { kebabCase, noop } from 'lodash';
import { SelectItem } from './types';
import { Hint } from '../hint';
import { Error } from '../error';
import { Label } from '../label';
import { StyledFormGroupDiv } from '../../theme/common';
import { StyledSelect, StyledSelectWrapperDiv } from './styledSelect';

export interface SelectProps {
  id: string;
  label: string;
  options: SelectItem[];
  placeholder?: string;
  onBlur?: (value: string) => void;
  onChange?: (value: string, event?: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  value?: string;
  hint?: string;
  setSelectRef?: (ref: HTMLSelectElement) => void;
  errorMessage?: string;
  className?: string;
}

const Select: React.SFC<SelectProps> =
  ({ label, id, hint, className, value = '', errorMessage = '', placeholder = '', options,
     onBlur = noop, onChange = noop, setSelectRef = noop, disabled }) => {

  return (
    <StyledFormGroupDiv className={className}>

      <Label htmlFor={id} hasError={!!errorMessage}>
        {label}
      </Label>

      {hint && <Hint hasError={!!errorMessage}>{hint}</Hint>}

      <StyledSelectWrapperDiv>

        <StyledSelect
          innerRef={ref => setSelectRef(ref)}
          id={id}
          onChange={
            event => onChange(event.target.value, event)
          }
          onBlur={() => onBlur(value)}
          value={value}
          disabled={disabled}
          hasError={!!errorMessage}
          aria-invalid={!!errorMessage}
          aria-describedby={`${id}-error`}
        >
          <option value="">{placeholder}</option>
          {options.map((item, index) => <option key={index} value={item.value}>{item.display}</option>)}
        </StyledSelect>

      </StyledSelectWrapperDiv>

      <Error id={`${id}-error`}>
        {errorMessage}
      </Error>

    </StyledFormGroupDiv>
  );
};

export default Select;
