import * as React from 'react';
import { omit, noop } from 'lodash';
import { alignment } from '../../constants/constants';
import {
  StyledHintDiv,
  StyledErrorDiv,
  StyledFormGroupDiv,
  StyledInputGroupDiv,
  StyledInputRadioDiv,
  StyledInputRadio,
  StyledLabelRadio
} from '../../theme/common';

export interface InputRadio {
  label: string;
  value: string|number|boolean;
}

export interface InputRadioGroupProps {
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

  // excess property bags mainly used for capturing ARIA tags to be passed down to the HTML Input.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

const InputRadioGroup: React.SFC<InputRadioGroupProps> =
  ({ id, name, hint, className, options, value, errorMessage = '',
     align = alignment.horizontal, onChange = noop, setInputRef = noop, disabled }) => {

  return (
    <StyledFormGroupDiv className={className}>

      {hint && <StyledHintDiv hasError={!!errorMessage}>{hint}</StyledHintDiv>}

      <StyledInputGroupDiv alignment={align}>

        {options.map((item, index) =>

          <StyledInputRadioDiv key={index} alignment={align}>

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
            />

            <StyledLabelRadio htmlFor={`${id}-${index}`} hasError={!!errorMessage}>
              {item.label}
            </StyledLabelRadio>

          </StyledInputRadioDiv>
        )}

      </StyledInputGroupDiv>

      <StyledErrorDiv hasError={!!errorMessage}>
        {errorMessage}
      </StyledErrorDiv>

    </StyledFormGroupDiv>
  );

};

export default InputRadioGroup;
