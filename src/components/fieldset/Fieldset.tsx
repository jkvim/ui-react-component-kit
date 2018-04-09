import * as React from 'react';
import { StyledFieldset } from './styledFieldset';

export interface FieldsetProps {
  id: string;
  legend?: string;
  className?: string;
}

const Fieldset: React.SFC<FieldsetProps> = ({ id, legend, children, className }) => {

  return (
    <StyledFieldset id={id} className={className}>
      {legend && <legend>{legend}</legend>}
      {children}
    </StyledFieldset>
  );
};

export default Fieldset;
