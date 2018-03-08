import * as React from 'react';
import { omit, noop } from 'lodash';
import { alignment } from '../../constants/constants';
import {
  StyledHintDiv,
  StyledErrorDiv,
  StyledFormGroupDiv,
  StyledInputCheckbox,
  StyledLabelCheckbox,
  StyledInputCheckboxDiv,
  StyledInputGroupDiv
} from '../../theme/common';

export interface CheckBox {
  label: string;
  value: string;
}

export interface CheckBoxFieldProps {
  id: string;
  name: string;
  hint?: string;
  options: CheckBox[];
  values?: string[];
  onChange?: (value: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
  align?: alignment;
  disabled?: boolean;
  setInputRef?: (ref: HTMLInputElement) => void;
  errorMessage?: string;
  className?: string;

  // excess property bags mainly used for capturing ARIA tags to be passed down to the HTML Input.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

const InputCheckbox: React.SFC<CheckBoxFieldProps> =
  ({ id, name, hint, options, values = [], className, errorMessage = '',
     align = alignment.horizontal, onChange = noop, setInputRef = noop, disabled }) => {

    return (
      <StyledFormGroupDiv className={className}>

        {hint && <StyledHintDiv hasError={!!errorMessage}>{hint}</StyledHintDiv>}

        <StyledInputGroupDiv alignment={align}>

          {options.map((item, index) =>

            <StyledInputCheckboxDiv key={index} alignment={align}>

              <StyledInputCheckbox
                {...this.props}
                innerRef={ref => setInputRef(ref)}
                id={`${id}-${index}`}
                name={name}
                type="checkbox"
                value={item.value}
                checked={values.includes(item.value)}
                onChange={
                  event => onChange(values, event.target.value, event)
                }
                disabled={disabled}
                hasError={!!errorMessage}
              />

              <StyledLabelCheckbox htmlFor={`${id}-${index}`} hasError={!!errorMessage}>
                {item.label}
              </StyledLabelCheckbox>

            </StyledInputCheckboxDiv>
          )}

        </StyledInputGroupDiv>

        <StyledErrorDiv>
          {errorMessage}
        </StyledErrorDiv>

      </StyledFormGroupDiv>
    );
};

export default InputCheckbox;
