import React, { ReactElement } from "react";
declare type Props = {
    children: ReactElement;
    className?: string;
    style?: React.CSSProperties;
    transition?: number;
};
declare type State = {};
export default class AutoTransition extends React.Component<Props, State> {
    static defaultProps: {
        style: {};
        transition: number;
    };
    name: string;
    private rootRef;
    constructor(props: Props);
    getSnapshotBeforeUpdate(): string[] | undefined;
    componentDidUpdate(prevProps: Props, prevState: State, snapshot: string[]): void;
    render(): JSX.Element;
}
export {};
