/// <reference types="react" />
import * as React from 'react';
import { MouseEvent, ReactNode } from 'react';
export interface LinkProps {
    id: string;
    title: ReactNode;
    url: string;
    isExternal?: boolean;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
}
declare const Link: React.SFC<LinkProps>;
export default Link;
