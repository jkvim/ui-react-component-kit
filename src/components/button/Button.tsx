import * as React from 'react';
import { ReactNode } from 'react';
import { ButtonType } from '../../constants/types';
import { StyledButton } from './styledButton';

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type?: ButtonType;
  disabled?: boolean;
}

// tslint:disable-next-line:no-shadowed-variable
const Button: React.SFC<ButtonProps> = ({ children, onClick, type, disabled }) => {
  return (
    <StyledButton
      type={type}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;