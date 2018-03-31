import * as React from 'react';
import { omit, noop } from 'lodash';
import { AlignmentType, BreakpointType } from '../../constants/types';
import { Fieldset } from '../fieldset';
import { Hint } from '../hint';
import { Error } from '../error';
import { Label } from '../label';
import { StyledInputRadioDiv, StyledInputRadio } from './styledInputRadio';
import { AllProps } from '../../theme/common/props';
import {
  StyledFormGroupDiv,
  StyledInputGroupDiv
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
  alignment?: AlignmentType;
  breakpoint?: BreakpointType;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
  setInputRef?: (ref: HTMLInputElement) => void;
  onChange?: (value: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputRadioGroup: React.SFC<InputRadioGroupProps> =
  ({ id, name, hint, className, options, value, breakpoint, errorMessage = '',
     alignment = 'horizontal', onChange = noop, setInputRef = noop, disabled }) => {

  return (
    <StyledFormGroupDiv className={className}>

      {hint && <Hint hasError={!!errorMessage} hint={hint} />}

      <Fieldset id={`${id}-fieldset`} aria-describedby={`${id}-error`}>

        <StyledInputGroupDiv alignment={alignment} breakpoint={breakpoint}>

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

            <Label type={'radio'} htmlFor={`${id}-${index}`} hasError={!!errorMessage} value={item.label}  />

          </StyledInputRadioDiv>
        )}

        </StyledInputGroupDiv>

      </Fieldset>

      <Error id={`${id}-error`} errorMessage={errorMessage} />

    </StyledFormGroupDiv>
  );

};

export default InputRadioGroup;
