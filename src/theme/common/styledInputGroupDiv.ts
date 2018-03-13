import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { alignment } from '../../constants/constants';

export interface AlignmentProps {
  alignment: string;
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
  padding-top: ${props =>
    props.alignment === alignment.horizontal ? '10px' : '10px'};
  
  padding-bottom: ${props =>
    props.alignment === alignment.horizontal ? '10px' : '10px'};
`;

const inputCheckboxDiv: StyledFunction<AlignmentProps> = styled.div;

/** @component */
export const StyledInputCheckboxDiv = inputCheckboxDiv`
  position: relative;
  padding-top: ${props =>
    props.alignment === alignment.horizontal ? '10px' : '10px'};
  
  padding-bottom: ${props =>
    props.alignment === alignment.horizontal ? '10px' : '10px'};
`;