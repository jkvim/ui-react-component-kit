import styled, { StyledFunction } from 'styled-components';
import { alignment } from '../../constants/constants';

interface AlignmentProps {
  alignment: alignment;
}

const inputGroupDiv: StyledFunction<AlignmentProps> = styled.div;

export const StyledInputGroupDiv = inputGroupDiv`
  display: flex;
  flex-direction: ${props => 
    props.alignment === alignment.horizontal ? 'row' : 'column'};
`;

const inputRadioDiv: StyledFunction<AlignmentProps> = styled.div;

export const StyledInputRadioDiv = inputRadioDiv`
  position: relative;
`;