import * as React from 'react';
import { MouseEvent } from 'react';
import { StyledLinkExternalSpan, StyledLink, StyledScreenReaderSpan } from '../../theme/common';

export interface LinkProps {
  id: string;
  title: string;
  url: string;
  isExternal?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

const Link: React.SFC<LinkProps> =
  ({ id, title, url, className, onClick, isExternal = false }) => {

  const externalLinkProps = {
    target: '_blank',
  };

  const additionalProps = isExternal ? externalLinkProps : {};

  return (
    <StyledLink
      id={id}
      href={url}
      onClick={onClick}
      className={className}
      {...additionalProps}
    >
      {title}
      {isExternal ?
      <StyledLinkExternalSpan>
        <StyledScreenReaderSpan>Link opens in new window</StyledScreenReaderSpan>
      </StyledLinkExternalSpan>
      : null}
    </StyledLink>
  );
};

export default Link;