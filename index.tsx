import React, { ReactElement } from "react";

type Props = {
  children: ReactElement;
  className?: string;
  style?: React.CSSProperties;
  transition?: number;
};

type State = {};

export default class AutoTransition extends React.Component<Props, State> {
  static defaultProps = {
    style: {},
    transition: 0.2,
  };

  name!: string;

  private rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this.rootRef = React.createRef();
  }

  getSnapshotBeforeUpdate() {
    const element = this.rootRef.current;

    if (element) {
      return [
        window.getComputedStyle(element).width,
        window.getComputedStyle(element).height,
      ];
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: string[]) {
    const element = this.rootRef.current;
    if (!element) {
      return;
    }

    element.style.width = "auto";
    element.style.height = "auto";

    const afterHeight = window.getComputedStyle(element).height;
    const afterWidth = window.getComputedStyle(element).width;

    const originTransition = window.getComputedStyle(element).transition;

    element.style.transition = "none";
    element.style.width = snapshot[0];
    element.style.height = snapshot[1];
    element.offsetWidth;

    // element.offsetWidth = element.offsetWidth;

    element.style.transition = originTransition;
    element.style.width = afterWidth;
    element.style.height = afterHeight;
  }

  render() {
    const { transition, style, children, className } = this.props;
    return (
      <div
        className={className}
        ref={this.rootRef}
        style={{
          overflow: "hidden",
          transition: `all ${transition}s`,
          position: "absolute",
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
}
