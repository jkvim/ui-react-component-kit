import * as React from 'react';
import { omit, noop } from 'lodash';
import { Fieldset } from '../fieldset';
import { AlignmentType, BreakpointType } from '../../';
import { StyledInputCheckboxDiv, StyledInputCheckbox } from './styledInputCheckbox';
import { AllProps } from '../../theme/common/props';
import {
  StyledHintDiv,
  StyledErrorDiv,
  StyledFormGroupDiv,
  StyledInputGroupDiv,
  StyledLabelCheckbox,
} from '../../theme/common';

export interface CheckBox {
  label: string;
  value: string;
}

export interface CheckBoxFieldProps extends AllProps {
  id: string;
  name: string;
  options: CheckBox[];
  hint?: string;
  values?: string[];
  alignment?: AlignmentType;
  breakpoint?: BreakpointType;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
  setInputRef?: (ref: HTMLInputElement) => void;
  onChange?: (value: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputCheckbox: React.SFC<CheckBoxFieldProps> =
  ({ id, name, hint, options, breakpoint, values = [], className, errorMessage = '',
     alignment = 'horizontal', onChange = noop, setInputRef = noop, disabled }) => {

    return (
      <StyledFormGroupDiv className={className}>

        {hint && <StyledHintDiv hasError={!!errorMessage}>{hint}</StyledHintDiv>}

        <Fieldset id={`${id}-fieldset`} aria-describedby={`${id}-error`}>

          <StyledInputGroupDiv alignment={alignment} breakpoint={breakpoint}>

          {options.map((item, index) =>

            <StyledInputCheckboxDiv key={index}>

              <StyledInputCheckbox
                {...this.props}
                innerRef={ref => setInputRef(ref)}
                id={`${id}-${index}`}
                name={name}
                type="checkbox"
                value={item.value}
                checked={values.includes(item.value)}
                onChange={ event => {
                    let value = event.target.value;

                    if (values.includes(value)) {
                      // tslint:disable-next-line:no-shadowed-variable
                      values = values.filter(item => item !== value);
                    } else {
                      values.push(value);
                    }

                    onChange(values);
                  }
                }
                disabled={disabled}
                hasError={!!errorMessage}
                aria-invalid={!!errorMessage}
              />

              <StyledLabelCheckbox htmlFor={`${id}-${index}`} hasError={!!errorMessage}>
                {item.label}
              </StyledLabelCheckbox>

            </StyledInputCheckboxDiv>
          )}

          </StyledInputGroupDiv>

        </Fieldset>

        <StyledErrorDiv id={`${id}-error`} hasError={!!errorMessage}>
          {errorMessage}
        </StyledErrorDiv>

      </StyledFormGroupDiv>
    );
};

export default InputCheckbox;
