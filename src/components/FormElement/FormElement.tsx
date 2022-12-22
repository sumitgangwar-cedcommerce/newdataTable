/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Children } from "react";
import FormChild from "./FormChild";
import "./FormElement.css";

const FormElement: React.FC<FormElementI> = ({
  horizontal,
  condensed,
  children,
  ...props
}: FormElementI): JSX.Element => {
  const arrayChildren = Children.toArray(children);

  return (
    <div
      className={`inte-form ${horizontal ? "inte-form--Horizontal" : ""} ${
        condensed ? "inte-form--Condensed" : ""
      }`}
    >
      {Children.map(arrayChildren, (child, index) => (
        <FormChild key={index}>{child}</FormChild>
      ))}
    </div>
  );
};

export interface FormElementI {
  horizontal?: boolean;
  condensed?: boolean;
  children?: any;
}

export default FormElement;
