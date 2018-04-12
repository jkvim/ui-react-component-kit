import * as React from 'react';
import { ReactNode } from 'react';
import { HeadingType } from '../../constants/types';
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6 } from './styledHeading';

export interface HeadingProps {
  id: string;
  children: ReactNode;
  level: HeadingType;
}

const Heading: React.SFC<HeadingProps> = ({ id, children, level }) => {
  if (level === 1) {
    return (<StyledH1 id={id}>{children}</StyledH1>);
  } else if (level === 2) {
    return (<StyledH2 id={id}>{children}</StyledH2>);
  } else if (level === 3) {
    return (<StyledH3 id={id}>{children}</StyledH3>);
  } else if (level === 4) {
    return (<StyledH4 id={id}>{children}</StyledH4>);
  } else if (level === 5) {
    return (<StyledH5 id={id}>{children}</StyledH5>);
  } else if (level === 6) {
    return (<StyledH6 id={id}>{children}</StyledH6>);
  }
};

export default Heading;