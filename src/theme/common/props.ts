import { AlertType, AlignmentType, BreakpointType, ButtonType, LabelType } from '../../constants/types';

export interface AllProps {
  // excess property bags mainly used for capturing ARIA tags to be passed down.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

export interface HasErrorProps {
  hasError: boolean;
}

export interface BreakpointProps {
  breakpoint: BreakpointType;
}

export interface AlignmentProps {
  alignment: AlignmentType;
}

export interface ButtonProps {
  type: ButtonType;
}

export interface AlertProps {
  type: AlertType;
}

export interface LabelProps {
  type: LabelType;
}