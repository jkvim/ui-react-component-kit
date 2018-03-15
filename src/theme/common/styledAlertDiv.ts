import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { darken } from 'polished';
import { alertType } from '../../constants/constants';
import { defaultTheme } from '../defaultTheme';

export interface AlertTypeProps {
  alertType: string;

  // excess property bags mainly used for capturing ARIA tags to be passed down to the alert.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

const alertDiv: StyledFunction<AlertTypeProps> = styled.div;

/** @component */
export const StyledAlertDiv = alertDiv`
  font-size: ${props => props.theme.font.size};
  background-color: ${props =>
    props.alertType === alertType.success ? props.theme.color.success :
      props.alertType === alertType.info ? props.theme.color.info :
        props.alertType === alertType.warning ? props.theme.color.warning :
          props.alertType === alertType.danger ? props.theme.color.danger :
            props.theme.color.default };
  border-left: 4px solid ${props =>
    props.alertType === alertType.success ? darken(0.1, props.theme.color.success) :
      props.alertType === alertType.info ? darken(0.1, props.theme.color.info) :
        props.alertType === alertType.warning ? darken(0.1, props.theme.color.warning) :
          props.alertType === alertType.danger ? darken(0.1, props.theme.color.danger) :
            darken(0.1, props.theme.color.default) };
    color: #ffffff;
    padding: 10px;
  `;

StyledAlertDiv.defaultProps = {
  theme: {
    font: {
      size: defaultTheme.font.size
    },
    color: {
      default: defaultTheme.color.default,
      success: defaultTheme.color.success,
      info: defaultTheme.color.info,
      warning: defaultTheme.color.warning,
      danger: defaultTheme.color.danger
    }
  }
};