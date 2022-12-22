/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { CardHeader, CardFooter } from ".";
import { CardFooterI } from "./CardFooter";
import { CardHeaderI } from "./CardHeader";

const Card: FC<CardI> = ({
  children,
  cardType,
  extraClass = "",
  media = "",
  ...Props
}: CardI): JSX.Element => {
  const getCardType = () => {
    switch (cardType) {
      case "Default":
        return "inte-card--default";
      case "Bordered":
        return "inte-card--bordered";
      case "Subdued":
        return "inte-card--subdued";
      case "Plain":
        return "inte-card--plain";
      case "Shadowed":
        return "inte-card--shadowed";
      default:
        return "inte-card--default";
    }
  };

  const cardTypeCss = getCardType();
  const childrens: any = React.Children.toArray(children);
  let BodyHeader = null;
  const newChildrens = childrens.map(
    (children: { [x: string]: { [x: string]: string } }) => {
      if (children?.props && children?.props?.__TYPE === "BodyHeader") {
        BodyHeader = children;
      } else {
        return children;
      }
    }
  );
  return (
    <div
      className={`inte-card ${cardTypeCss} ${extraClass} ${
        media && "inte-card--HasMedia"
      }`}
    >
      {media ? (
        <div className="inte-Card--Media">
          <img width={"100%"} height={"auto"} alt="Card Media" src={media} />
        </div>
      ) : (
        <CardHeader {...Props} />
      )}

      {BodyHeader}
      <div className={"inte-card__Body"}>
        <div className={"inte__cardContent"}>{newChildrens}</div>
      </div>
      <CardFooter {...Props} />
    </div>
  );
};
export interface CardI extends CardFooterI, CardHeaderI {
  children: React.ReactNode;
  cardType?: "Default" | "Bordered" | "Plain" | "Subdued" | "Shadowed";
  extraClass?: string;
  media?: string;
}

export default Card;
