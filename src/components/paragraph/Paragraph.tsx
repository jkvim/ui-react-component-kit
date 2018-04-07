import * as React from 'react';
import { ReactNode } from 'react';
import { StyledParagraph } from './styledParagraph';

export interface ParagraphProps {
  children: ReactNode;
}

const Paragraph: React.SFC<ParagraphProps> = ({ children }) => {
    return (<StyledParagraph>{children}</StyledParagraph>);
};

export default Paragraph;