import * as React from 'react';
import { kebabCase } from 'lodash';
import * as shortid from 'shortid';

interface FieldsetProps {
  legend?: string;
  className?: string;
}

const Fieldset: React.SFC<FieldsetProps> = ({ legend, children, className }) => {
  const id = kebabCase(legend) || shortid.generate();

  return (
    <fieldset id={`${id}-fieldset-legend`} className={className}>
      {legend !== '' && <legend>{legend}</legend>}
      {children}
    </fieldset>
  );
};

export default Fieldset;