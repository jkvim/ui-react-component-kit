import * as React from 'react';
import { ReactNode } from 'react';
import { StyledButton } from './styledButton';

/**
 * Button properties.
 */
export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  buttonType?: string; /* 'primary' | 'secondary' | 'tertiary' */
  disabled?: boolean;
}

/**
 * A simple button component
 */
  // tslint:disable-next-line:no-shadowed-variable
const Button: React.SFC<ButtonProps> = ({ children, onClick, buttonType, disabled }) => {
  return (
    <StyledButton
      buttonType={buttonType}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>);
};

export default Button;