import * as React from 'react';
import styled, { StyledFunction, StyledComponentClass } from 'styled-components';
import { darken } from 'polished';
import { AlertProps, AllProps } from '../../theme/common/props';
import { theme } from '../../theme/defaultTheme';

const alertDiv: StyledFunction<AlertProps & AllProps> = styled.div;

/** @component */
export const StyledAlertDiv = alertDiv`
  font-size: ${props => props.theme.font.size.default};
  background-color: ${props => backgroundColor(props)};
  border-left: 4px solid ${props => darken(0.1, backgroundColor(props))};
  color: #ffffff;
  padding: 10px;
`;

StyledAlertDiv.defaultProps = {
  theme
};

const backgroundColor = (props) => {
  return (props.type === 'success' ? props.theme.color.success :
    props.type === 'info' ? props.theme.color.info :
      props.type === 'warning' ? props.theme.color.warning :
        props.type === 'danger' ? props.theme.color.danger :
          props.theme.color.default);
};