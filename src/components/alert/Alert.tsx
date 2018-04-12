import * as React from 'react';
import { ReactNode } from 'react';
import { AlertType } from '../../constants/types';
import { StyledAlertDiv } from './styledAlertDiv';

export interface AlertProps {
  id: string;
  children?: ReactNode;
  type?: AlertType;
  className?: string;
}

// tslint:disable-next-line:no-shadowed-variable
const Alert: React.SFC<AlertProps> = ({ id, children, type, className }) => {
    return (
      <StyledAlertDiv
        id={id}
        tabindex="-1"
        role="alert"
        type={type}
        className={className}
      >
        {children}
      </StyledAlertDiv>
    );
};

export default Alert;
