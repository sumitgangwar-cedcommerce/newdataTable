import React, { Component } from "react";
import "./MainLayout.css";

class MainLayoutClass extends Component<MainLayoutI> {
  constructor(props: MainLayoutI) {
    super(props);
  }

  render() {
    return (
      <div className={"inte-Layout__Primary-Secondary inte-Layout"}>
        <div className={"inte-Layout__Primary"}>{this.props.children[0]}</div>
        <div className={"inte-Layout__Secondary"}>{this.props.children[1]}</div>
      </div>
    );
  }
}

const MainLayout = (props: MainLayoutI): JSX.Element => {
  return <MainLayoutClass {...props} />;
};

export interface MainLayoutI {
  children: React.ReactNode[];
}

export default MainLayout;
