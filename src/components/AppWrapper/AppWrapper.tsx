import React from "react";
import "./AppWrapper.css";

export const AppWrapper = ({ children,Layout="Full" }: PropsI): JSX.Element => 

{
  return <div className={"inte inte-wrapper"}>{children}</div>;
};

export const BodyLayout = ({ children, Layout="Full" }: PropsI): JSX.Element => {
  return (
    <div className={"inte__Main"}>
      <div className={`inte__Main-Inner ${Layout == "Full" ? "inte__Main-Inner--LayoutFull" : "inte__Main-Inner--LayoutBoxed"}`}>{children}</div>
    </div>
  );
};
export interface PropsI {
  children?: React.ReactNode | JSX.Element;
  Layout?: "Boxed" | "Full";
}
