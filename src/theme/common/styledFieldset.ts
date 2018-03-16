import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { alignment } from '../../constants/constants';
import { AlignmentProps } from './props';

const fieldset: StyledFunction<AlignmentProps &
  React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>> = styled.fieldset;

/** @component */
export const StyledFieldset = fieldset`
  display: flex;
  flex-direction: ${props => 
    props.alignment === alignment.horizontal ? 'row' : 'column'};
`;