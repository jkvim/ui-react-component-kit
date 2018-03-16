export interface AllProps {
  // excess property bags mainly used for capturing ARIA tags to be passed down.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

export interface AlignmentProps extends AllProps {
  alignment: string;
}

export interface HasErrorProps extends AllProps {
  hasError: boolean;
}

export interface ButtonTypeProps extends AllProps {
  buttonType: string;
}

export interface AlertTypeProps extends AllProps {
  alertType: string;
}