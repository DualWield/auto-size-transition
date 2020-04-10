import React from "react";
export default class AutoTransition extends React.Component {
    constructor(props) {
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
    componentDidUpdate(prevProps, prevState, snapshot) {
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
        element.style.transition = originTransition;
        element.style.width = afterWidth;
        element.style.height = afterHeight;
    }
    render() {
        const { transition, style, children, className } = this.props;
        return (React.createElement("div", { className: className, ref: this.rootRef, style: Object.assign({ overflow: "hidden", transition: `all ${transition}s`, position: "absolute" }, style) }, children));
    }
}
AutoTransition.defaultProps = {
    style: {},
    transition: 0.2,
};
