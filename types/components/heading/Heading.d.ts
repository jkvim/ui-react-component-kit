/// <reference types="react" />
import * as React from 'react';
import { ReactNode } from 'react';
import { HeadingType } from '../../constants/types';
export interface HeadingProps {
    children: ReactNode;
    level: HeadingType;
}
declare const Heading: React.SFC<HeadingProps>;
export default Heading;
