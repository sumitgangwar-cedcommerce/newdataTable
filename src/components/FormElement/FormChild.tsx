import React, { Component } from "react";
// import './FormElement.css';
import "./FormElement.css";

class FormChild extends Component<React.ReactNode | any> {
  constructor(props: React.ReactNode) {
    super(props);
  }

  render(): JSX.Element {
    // eslint-disable-next-line react/prop-types
    return <div className={"inte-form__item"}>{this.props.children}</div>;
  }
}

export default FormChild;
