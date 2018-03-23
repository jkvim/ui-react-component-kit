import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';

const fieldset: StyledFunction<
  React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>> = styled.fieldset;

/** @component */
export const StyledFieldset = fieldset``;