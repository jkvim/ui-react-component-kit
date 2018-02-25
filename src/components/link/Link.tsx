import * as React from 'react';
import { MouseEvent } from 'react';
import { kebabCase } from 'lodash';

export interface LinkProps {
  title: string;
  url: string;
  isExternal?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  hideExternalIcon?: boolean;
  className?: string;
}

const Link: React.SFC<LinkProps> =
  ({ title, url, className, onClick, isExternal = false, hideExternalIcon = false }) => {
  const id = kebabCase(title);

  const externalLinkProps = {
    target: '_blank',
  };

  const additionalProps = isExternal ? externalLinkProps : {};

  return (
    <a
      id={`${id}-link`}
      href={url}
      onClick={onClick}
      className={className}
      {...additionalProps}
    >
      {title}
      {isExternal ?
      <span className={`${hideExternalIcon ? '' : 'icon icon-external-link'}`}>
        <span className="sr-only">Link opens in new window</span>
      </span>
      : null}
    </a>
  );
};

export default Link;