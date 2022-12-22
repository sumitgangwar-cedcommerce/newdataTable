/* eslint-disable react/no-children-prop */
import React from "react";
import { Button, FlexChild } from "..";
import { ButtonI } from "../Button/Button";
import { FlexLayout } from "../FlexLayout";
export interface CardFooterI {
  primaryAction?: ButtonI;
  secondaryAction?: ButtonI;
}

function CardFooter(Props: CardFooterI): JSX.Element | null {
  const { primaryAction, secondaryAction } = Props;
  const checkForPrimary = () => {
    if (!primaryAction || Object.keys(primaryAction).length === 0) return null;
    return (
      <Button
        content={primaryAction.content ? primaryAction.content : "Submit"}
        type="Primary"
        {...primaryAction}
      ></Button>
    );
  };

  const checkForSecondary = () => {
    if (!secondaryAction || Object.keys(secondaryAction).length === 0)
      return null;
    return (
      <Button
        content={secondaryAction.content ? secondaryAction.content : "Cancel"}
        type="Outlined"
        {...secondaryAction}
      ></Button>
    );
  };

  const addFlex = (node: JSX.Element) => <FlexChild children={node} />;

  let bodyToRender = null;

  let pAction = checkForPrimary();
  let sAction = checkForSecondary();

  if (pAction) pAction = addFlex(pAction);
  if (sAction) sAction = addFlex(sAction);

  if (sAction || pAction) {
    bodyToRender = (
      <div className={"inte-card__Footer"}>
        <FlexLayout valign="end" halign="end" spacing="loose">
          {sAction}
          {pAction}
        </FlexLayout>
      </div>
    );
  }
  return bodyToRender;
}

export default CardFooter;
