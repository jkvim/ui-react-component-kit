import * as React from 'react';
import { ReactNode } from 'react';
import { StyledAlertDiv } from '../../theme/common';

export interface AlertProps {
  children?: ReactNode;
  alertType?: string;
  className?: string;
}

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
