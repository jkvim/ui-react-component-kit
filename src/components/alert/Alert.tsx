import * as React from 'react';
import { ReactNode } from 'react';
import { StyledAlertDiv } from './styledAlertDiv';
import { AlertType } from '../../constants/constants';

export interface AlertProps {
  children?: ReactNode;
  alertType?: AlertType;
  className?: string;
}

// tslint:disable-next-line:no-shadowed-variable
const Alert: React.SFC<AlertProps> = ({ children, alertType, className }) => {
    return (
      <StyledAlertDiv
        tabindex="-1"
        role="alert"
        alertType={alertType}
        className={className}
      >
        {children}
      </StyledAlertDiv>
    );
};

export default Alert;
