import React, { Component } from "react";
import { ButtonI } from "../Button/Button";
import { CardHelp, Button, TextStyles } from "..";
import { cardHelpI } from "./CardHelp";

class BodyHeader extends Component<BodyHeaderI> {
  checkForTitle = (props: BodyHeaderI): React.ReactNode => {
    if (props.title !== undefined) {
      return props.title;
    }
    return null;
  };

  checkForSubTitle = (props: BodyHeaderI): React.ReactNode => {
    if (props.subTitle !== undefined) {
      return props.subTitle;
    }
    return null;
  };
  checkForSubTitleSmall = (props: BodyHeaderI): React.ReactNode => {
    if (props.subTitleSmall !== undefined) {
      return props.subTitleSmall;
    }
    return null;
  };
  static defaultProps: { __TYPE: string };

  render(): React.ReactNode {
    const title = this.checkForTitle(this.props);
    const subTitle = this.checkForSubTitle(this.props);
    const SubTitleSmall = this.checkForSubTitleSmall(this.props);

    if (!title && !subTitle && !SubTitleSmall) return null;

    return (
      <div
        className={
          this.props.action
            ? "inte-CardBody__headerWrap inte-CardBody__headerWrap--hasAction"
            : "inte-CardBody__headerWrap"
        }
      >
        <div className={"inte-CardBody__headerWrap-Heading"}>
          <TextStyles type="SubHeading">{this.props.title}</TextStyles>
          {this.props.subTitle ? (
            <TextStyles type="mediumText">{this.props.subTitle}</TextStyles>
          ) : null}
          {this.props.subTitleSmall ? (
            <TextStyles type="simpleText">
              {this.props.subTitleSmall}
            </TextStyles>
          ) : null}
        </div>
        {this.props.action ? (
          <Button
            {...this.props.action}
            content={this.props.action.content}
          ></Button>
        ) : null}
        <CardHelp {...this.props} />
      </div>
    );
  }
}

interface ExtraButton extends ButtonI {
  content?: string;
}

export interface BodyHeaderI extends cardHelpI {
  title: string;
  subTitle?: string;
  action?: ExtraButton;
  subTitleSmall?: string;
  __type?: string;
}

BodyHeader.defaultProps = {
  __TYPE: "BodyHeader",
};

export interface objI {
  [content: string]: React.ReactNode | string;
}

export default BodyHeader;
