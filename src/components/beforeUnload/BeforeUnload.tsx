import * as React from 'react';

export interface BeforeUnloadProps {
  onBeforeUnload?: (event: object) => void | string;
}

export default class BeforeUnload extends React.Component<BeforeUnloadProps, {}> {
  componentDidMount() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  }

  handleBeforeUnload = (event) => {
    const { onBeforeUnload } = this.props;
    const returnValue = onBeforeUnload ? onBeforeUnload(event) : '';

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
