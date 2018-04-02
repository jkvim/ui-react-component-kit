import { AlertType, AlignmentType, BreakpointType, ButtonType, LabelType } from '../../constants/types';
export interface AllProps {
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
