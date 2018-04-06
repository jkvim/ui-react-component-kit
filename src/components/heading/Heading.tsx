import * as React from 'react';
import { ReactNode } from 'react';
import { HeadingType } from '../../constants/types';
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6 } from './styledHeading';

export interface HeadingProps {
  children: ReactNode;
  level: HeadingType;
}

const Heading: React.SFC<HeadingProps> = ({ children, level }) => {
  if (level === 1) {
    return (<StyledH1>{children}</StyledH1>);
  } else if (level === 2) {
    return (<StyledH2>{children}</StyledH2>);
  } else if (level === 3) {
    return (<StyledH3>{children}</StyledH3>);
  } else if (level === 4) {
    return (<StyledH4>{children}</StyledH4>);
  } else if (level === 5) {
    return (<StyledH5>{children}</StyledH5>);
  } else if (level === 6) {
    return (<StyledH6>{children}</StyledH6>);
  }
};

export default Heading;