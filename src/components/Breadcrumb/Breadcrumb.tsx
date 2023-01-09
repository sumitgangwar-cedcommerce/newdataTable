/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FC } from "react";
import { ChevronRight } from "react-feather";
import { Button } from "..";
import { FlexLayout } from "../FlexLayout";
import "./Breadcrumb.css";

const Breadcrumb: FC<BreadcrumbI> = ({
  items,
  onClick = () => {
    return null; //The onclick event occurs when the user clicks on an element.
  },
}: BreadcrumbI): JSX.Element => {
  return (
    <div className="inte--BreadCrumbs">
      <FlexLayout
        spacing="extraTight"
        wrap="wrap"
        direction="none"
        valign="center"
      >
        {Object.values(items).map((e: any, i) => (
          <React.Fragment key={i}>
            {i != 0 ? (
              <FlexLayout
                spacing="extraTight"
                wrap="wrap"
                direction="none"
                valign="center"
              >
                <ChevronRight size={20} />

                {i == Object.keys(items).length - 1 ? (
                  <Button disable={true} type="TextButton" thickness="thin">
                    {e.label}
                  </Button>
                ) : (
                  <Button
                    thickness={"thin"}
                    onClick={() => {
                      onClick(e.value, e);
                    }}
                    type="TextButton"
                  >
                    {" "}
                    {e.label}
                  </Button>
                )}
              </FlexLayout>
            ) : (
              <Button
                thickness={"thin"}
                onClick={() => {
                  onClick(e.value, e);
                }}
                type="TextButton"
              >
                {" "}
                {e.label}
              </Button>
            )}
          </React.Fragment>
        ))}
      </FlexLayout>
    </div>
  );
};

Breadcrumb.defaultProps = {
  items: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ],
};

export interface BreadcrumbI {
  items: ObjI[];
  onClick?: (value: number, obj?: ObjI) => void;
}
export interface ObjI {
  label: string | React.ReactNode;
  value: number;
}
export default Breadcrumb;
