/// <reference types="react" />
import * as React from 'react';
export interface BeforeUnloadProps {
    onBeforeUnload?: (event: object) => void | string;
}
declare class BeforeUnload extends React.Component<BeforeUnloadProps, {}> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleBeforeUnload: (event: any) => string | void;
    render(): React.ReactElement<any>;
}
export default BeforeUnload;
