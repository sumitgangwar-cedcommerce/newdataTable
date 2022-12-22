import React from "react";
import "../../styles.module.css";
import "./Dots.css";

const Dots: React.FC<DotI> = ({ status = "none" }: DotI): JSX.Element => {
  const checkStatus = () => {
    switch (status) {
      case "active":
        return <span className={"inte__dot inte__dot--active"} />;
      case "completed":
        return <span className={"inte__dot inte__dot--complete"} />;
      default:
        return <span className={"inte__dot"} />;
    }
  };
  return <div>{checkStatus()}</div>;
};

export interface DotI {
  status?: "active" | "completed" | "none";
}
export default Dots;
