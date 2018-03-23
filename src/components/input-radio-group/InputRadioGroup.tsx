import * as React from 'react';
import { omit, noop } from 'lodash';
import { alignment } from '../../constants/constants';
import { Fieldset } from '../fieldset';
import { StyledInputRadioDiv, StyledInputRadio } from './styledInputRadio';
import { AllProps } from '../../theme/common/props';
import {
  StyledHintDiv,
  StyledErrorDiv,
  StyledFormGroupDiv,
  StyledInputGroupDiv,
  StyledLabelRadio
} from '../../theme/common';

export interface InputRadio {
  label: string;
  value: string|number|boolean;
}

export interface InputRadioGroupProps extends AllProps {
  id: string;
  name: string;
  options: InputRadio[];
  hint?: string;
  value?: string|number|boolean;
  align?: string;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
  setInputRef?: (ref: HTMLInputElement) => void;
  onChange?: (value: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputRadioGroup: React.SFC<InputRadioGroupProps> =
  ({ id, name, hint, className, options, value, errorMessage = '',
     align = alignment.horizontal, onChange = noop, setInputRef = noop, disabled }) => {

  return (
    <StyledFormGroupDiv className={className}>

      {hint && <StyledHintDiv hasError={!!errorMessage}>{hint}</StyledHintDiv>}

      <Fieldset id={`${id}-fieldset`} aria-describedby={`${id}-error`}>

        <StyledInputGroupDiv alignment={align}>

        {options.map((item, index) =>

          <StyledInputRadioDiv key={index}>

            <StyledInputRadio
              {...this.props}
              innerRef={ref => setInputRef(ref)}
              id={`${id}-${index}`}
              name={name}
              type="radio"
              value={item.value}
              checked={value === item.value}
              onChange={
                event => onChange(event.target.value, event)
              }
              disabled={disabled}
              hasError={!!errorMessage}
              aria-invalid={!!errorMessage}
            />

            <StyledLabelRadio htmlFor={`${id}-${index}`} hasError={!!errorMessage}>
              {item.label}
            </StyledLabelRadio>

          </StyledInputRadioDiv>
        )}

        </StyledInputGroupDiv>

      </Fieldset>

      <StyledErrorDiv id={`${id}-error`} hasError={!!errorMessage}>
        {errorMessage}
      </StyledErrorDiv>

    </StyledFormGroupDiv>
  );

};

export default InputRadioGroup;
