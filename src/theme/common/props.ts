import { AlertType, AlignmentType, ButtonType } from '../../constants/constants';

export interface AllProps {
  // excess property bags mainly used for capturing ARIA tags to be passed down.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

export interface AlignmentProps extends AllProps {
  alignment: AlignmentType;
}

export interface HasErrorProps extends AllProps {
  hasError: boolean;
}

export interface ButtonTypeProps extends AllProps {
  buttonType: ButtonType;
}

export interface AlertTypeProps extends AllProps {
  alertType: AlertType;
}