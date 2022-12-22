/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from "react";
import "./Toast.css";
interface ToastWrapperI {
  children: React.ReactNode;
}
class ToastWrapper extends Component<ToastWrapperI> {
  constructor(props: ToastWrapperI) {
    super(props);

    this.state = {};
  }
  render() {
    return <div className={"inte-toast--Wrapper"}>{this.props.children}</div>;
  }
}

export default ToastWrapper;
