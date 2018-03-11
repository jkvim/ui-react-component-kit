import * as React from 'react';

export interface BeforeunloadProps {
  onBeforeunload?: (event: object) => void | string;
}

export default class Beforeunload extends React.Component<BeforeunloadProps, {}> {
  componentDidMount() {
    window.addEventListener('beforeunload', this.handleBeforeunload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeunload);
  }

  handleBeforeunload = (event) => {
    const { onBeforeunload } = this.props;
    const returnValue = onBeforeunload ? onBeforeunload(event) : '';

    // Do not intercept browser refresh during development
    if (process.env.NODE_ENV !== 'development') {
      event.returnValue = returnValue; // Gecko, Trident, Chrome 34+
      return returnValue; // Gecko, WebKit, Chrome <34
    }
  }

  render() {
    if (!this.props.children) {
      return null;
    }

    return React.Children.only(this.props.children);
  }
}
