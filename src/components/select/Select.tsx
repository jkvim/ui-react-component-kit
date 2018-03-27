import * as React from 'react';
import { kebabCase } from 'lodash';
import { noop } from 'lodash';
import { StyledErrorDiv, StyledLabel, StyledHintDiv, StyledFormGroupDiv } from '../../theme/common';
import { SelectItem } from './types';
import { AllProps } from '../../theme/common/props';
import { StyledSelect, StyledSelectWrapperDiv } from './styledSelect';

export interface SelectProps extends AllProps {
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

      <StyledSelectWrapperDiv>

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

      </StyledSelectWrapperDiv>

      <StyledErrorDiv hasError={!!errorMessage}>
        {errorMessage}
      </StyledErrorDiv>

    </StyledFormGroupDiv>
  );
};

export default Select;
