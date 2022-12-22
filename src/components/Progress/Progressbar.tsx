import React from "react";
import TextStyles from "../TextStyles/TextStyles";
import "./Progress.css";

function Progressbar({
  percentage = 0,
  message,
  progessThickness,
  animating = false,
}: ProgressbarI = {}): JSX.Element {
  if (percentage > 100) percentage = 100;

  {
    percentage < 100 ? animating : false;
  }

  const getProgressThickness = () => {
    switch (progessThickness) {
      case "thin":
        return "inte__Progressbar--thin";
      default:
        return "";
    }
  };

  const pthick = getProgressThickness();

  return (
    <div className={`inte__Progressbar ${pthick}`}>
      <div
        style={{ width: percentage + "%" }}
        className={
          animating
            ? "inte__Progressbar--Status inte__Progressbar--Status-Inprogress"
            : " inte__Progressbar--Status"
        }
      >
        <TextStyles type="smallText">
          {percentage < 5 || progessThickness == "thin" ? null : message}
        </TextStyles>
      </div>
    </div>
  );
}

export interface ProgressbarI {
  percentage?: number;
  message?: string;
  progessThickness?: "thin" | "none";
  animating?: boolean;
}

export default Progressbar;
