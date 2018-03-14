import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { darken } from 'polished';
import { alertType } from '../../constants/constants';

export interface AlertTypeProps {
  alertType: string;

  // excess property bags mainly used for capturing ARIA tags to be passed down to the alert.
  // tslint:disable-next-line no-any
  [propKeys: string]: any;
}

const alertDiv: StyledFunction<AlertTypeProps> = styled.div;

/** @component */
export const StyledAlertDiv = alertDiv`
    color: #ffffff;
    background-color: ${props => 
      props.alertType === alertType.success ? props.theme.color.success :
        props.alertType === alertType.info ? props.theme.color.info :
          props.alertType === alertType.warning ? props.theme.color.warn :
            props.alertType === alertType.danger ? props.theme.color.danger : 
              props.theme.color.default };
    padding: 10px;
    border-left: 4px solid ${props => 
      props.alertType === alertType.success ? darken(0.1, props.theme.color.success) :
        props.alertType === alertType.info ? darken(0.1, props.theme.color.info) :
          props.alertType === alertType.warning ? darken(0.1, props.theme.color.warn) :
            props.alertType === alertType.danger ? darken(0.1, props.theme.color.danger) :
              darken(0.1, props.theme.color.default) };
  `;

StyledAlertDiv.defaultProps = {
  theme: {
    color: {
      default: '#2fa4e7',
      success: '#73A839',
      info: '#04519b',
      warn: '#DD5600',
      danger: '#C71C22'
    }
  }
};