/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FlexLayout } from "../FlexLayout";
import TextStyles, { TextStylesI } from "../TextStyles/TextStyles";

export interface CardHeaderI {
  title?: TextStylesI | string | React.ReactNode | any;
  subTitle?: TextStylesI | string | React.ReactNode | any;
  action?: React.ReactNode;
}

function CardHeader({
  title,
  action,
  subTitle,
}: CardHeaderI): JSX.Element | null {
  const checkForTitle = (): React.ReactNode | string | null => {
    if (typeof title === "string" && title !== "") {
      return (
        <div className="inte-card__Header-Title-Subtitle">
          <TextStyles
            type="SubHeading"
            subheadingTypes="XS-1.6"
            lineHeight="LH-1.6"
            fontweight="extraBold"
          >
            {title}
          </TextStyles>
          {subTitle && (
            <div className="inte-card__Header-Subtitle">
              <TextStyles
                textcolor="light"
                type="subHeading"
                subheadingTypes="XS-1.6"
                fontweight="normal"
                lineHeight="LH-2.0"
              >
                {subTitle}
              </TextStyles>
            </div>
          )}
        </div>
      );
    } else if (title && title["content"]) {
      return <TextStyles {...title} />;
    } else if (title) {
      return title;
    }
    return null;
  };

  const checkForActions = (): React.ReactNode | null => {
    if (action !== null) {
      return action;
    }
    return null;
  };

  if (!title && !action) return null;

  return (
    <div className={"inte-card__Header"}>
      <FlexLayout halign="fill" valign="baseline">
        {checkForTitle()}
        {checkForActions()}
      </FlexLayout>
    </div>
  );
}

export default CardHeader;
