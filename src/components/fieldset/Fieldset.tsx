import * as React from 'react';

export interface FieldsetProps {
  id: string;
  legend?: string;
  className?: string;
}

const Fieldset: React.SFC<FieldsetProps> = ({ id, legend, children, className }) => {

  return (
    <fieldset id={id} className={className}>
      {legend && <legend>{legend}</legend>}
      {children}
    </fieldset>
  );
};

export default Fieldset;
