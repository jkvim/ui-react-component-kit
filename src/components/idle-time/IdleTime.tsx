import * as React from 'react';
import IdleTimer from 'react-idle-timer';
import { ReactElement } from 'react';
import { bindAll } from 'lodash';

export interface IdleTimeProps {
  unmountBeforeUnloadListener?: () => void;
  redirectUrl?: string;
  sessionTimeout: number;
}

export interface IdleTimeState {
  mountChildren: boolean;
}

class IdleTime extends React.Component<IdleTimeProps, IdleTimeState> {

  timerRef = null;

  constructor(props: IdleTimeProps) {
    super(props);
    bindAll(this, ['onIdleAction', 'resumeTimer', 'pauseTimer', 'resetTimer', 'setTimerRef']);

    this.state = {
      mountChildren: false
    };
  }

  componentDidMount() {
    this.setState({
      mountChildren: true
    });
  }

  onIdleAction() {
    this.props.unmountBeforeUnloadListener();

    if (this.props.redirectUrl) {
      window.location.href = this.props.redirectUrl;
    }
  }

  resetTimer() {
    this.timerRef.reset();
  }

  resumeTimer() {
    this.timerRef.resume();
  }

  pauseTimer() {
    this.timerRef.pause();
  }

  setTimerRef(ref: object) {
    this.timerRef = ref;
  }

  render() {
    const { children, sessionTimeout } = this.props;

    return (
      <IdleTimer
        ref={this.setTimerRef}
        timeout={sessionTimeout}
        idleAction={this.onIdleAction}
      >
        {
          this.state.mountChildren && React.Children.map(children,

            // tslint:disable-next-line:no-any
            (child, i) => React.cloneElement(child as ReactElement<any>, {
              resumeIdleTimer: this.resumeTimer,
              pauseIdleTimer: this.pauseTimer,
              resetIdleTimer: this.resetTimer
            })
          )
        }
      </IdleTimer>
    );
  }
}

export default IdleTime;
