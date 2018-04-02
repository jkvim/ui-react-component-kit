/// <reference types="react" />
import * as React from 'react';
export interface IdleTimeProps {
    unmountBeforeUnloadListener?: () => void;
    redirectUrl?: string;
    sessionTimeout: number;
}
export interface IdleTimeState {
    mountChildren: boolean;
}
declare class IdleTime extends React.Component<IdleTimeProps, IdleTimeState> {
    timerRef: any;
    constructor(props: IdleTimeProps);
    componentDidMount(): void;
    onIdleAction(): void;
    resetTimer(): void;
    resumeTimer(): void;
    pauseTimer(): void;
    setTimerRef(ref: object): void;
    render(): JSX.Element;
}
export default IdleTime;
