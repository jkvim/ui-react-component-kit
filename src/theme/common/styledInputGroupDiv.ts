import * as React from 'react';
import styled, { StyledComponentClass, StyledFunction } from 'styled-components';
import { alignment } from '../../constants/constants';
import { AlignmentProps } from './props';

const inputGroup: StyledFunction<AlignmentProps> = styled.div;

/** @component */
export const StyledInputGroupDiv = inputGroup`
  display: flex;
  flex-direction: ${props =>
    props.alignment === alignment.horizontal ? 'row' : 'column'};
`;