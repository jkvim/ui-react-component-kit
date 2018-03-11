import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { alignment } from '../../constants/constants';

export interface AlignmentProps {
  alignment: alignment;
}

const inputGroupDiv: StyledFunction<AlignmentProps> = styled.div;

/** @component */
export const StyledInputGroupDiv = inputGroupDiv`
  display: flex;
  flex-direction: ${props => 
    props.alignment === alignment.horizontal ? 'row' : 'column'};
`;

const inputRadioDiv: StyledFunction<AlignmentProps> = styled.div;

/** @component */
export const StyledInputRadioDiv = inputRadioDiv`
  position: relative;
  padding-bottom: ${props =>
    props.alignment === alignment.horizontal ? '0px' : '20px'};
  
  &:last-child {
    padding-bottom: ${props =>
      props.alignment === alignment.horizontal ? '0px' : '0px'};
  }
`;

const inputCheckboxDiv: StyledFunction<AlignmentProps> = styled.div;

/** @component */
export const StyledInputCheckboxDiv = inputCheckboxDiv`
  position: relative;
  padding-bottom: ${props =>
  props.alignment === alignment.horizontal ? '0px' : '15px'};
  
  &:last-child {
    padding-bottom: ${props =>
  props.alignment === alignment.horizontal ? '0px' : '0px'};
  }
`;