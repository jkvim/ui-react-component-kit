import * as React from 'react';
import { ReactNode } from 'react';
import { ButtonType } from '../../constants/types';
import { StyledButton } from './styledButton';

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  buttonType?: ButtonType;
  disabled?: boolean;
}

// tslint:disable-next-line:no-shadowed-variable
const Button: React.SFC<ButtonProps> = ({ children, onClick, buttonType, disabled }) => {
  return (
    <StyledButton
      buttonType={buttonType}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;