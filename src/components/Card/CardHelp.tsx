import React, { FC } from "react";

const CardHelp: FC<cardHelpI> = (props: cardHelpI) => {
  return (
    <div
      className={
        "inte-CardBody__headerWrap inte-CardBody__headerWrap--hasAction mt-30"
      }
    >
      <div className={"inte-CardBody__headerWrap-Heading"}>
        <span className={"inte__seperator"} />
      </div>
      <div className={"inte-CardBody__headerWrap-Action"}>
        <span className={"inte__text"}>{props.helpText}</span>
      </div>
    </div>
  );
};
export interface cardHelpI {
  helpText?: React.ReactNode;
}
export default CardHelp;
