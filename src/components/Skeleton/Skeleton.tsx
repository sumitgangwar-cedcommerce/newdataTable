import React from "react";
import "./Skeleton.css";

const Skeleton: React.FC<SkeletonI> = ({
  line = 1,
  rounded = "50%",
  type = "line",
  width = "50px",
  height = "50px",
}: SkeletonI) => {
  function renderTypeWise() {
    switch (type) {
      case "image":
        return (
          <div
            style={{ width: "80px", height: "90px" }}
            className={"inte__Skeleton--Text"}
          ></div>
        );
      case "name":
        return (
          <div
            style={{ width: "100px", height: "30px" }}
            className={"inte__Skeleton--Text"}
          ></div>
        );
      case "custom":
        return (
          <div
            style={{ width: width, height: height, borderRadius: rounded }}
            className={"inte__Skeleton--Text"}
          ></div>
        );
      case "line":
      default:
        return new Array(line)
          .fill(
            <div
              style={{ height: height, borderRadius: rounded }}
              className={"inte__Skeleton--Text"}
            ></div>
          )
          .map((line, index) => (
            <React.Fragment key={index}>{line}</React.Fragment>
          ));
    }
  }

  return <div className={"inte__skeletonWrapper"}>{renderTypeWise()}</div>;
};
export interface SkeletonI {
  type?: "none" | "line" | "image" | "name" | "custom";
  width?: string;
  height?: string;
  line?: number;
  rounded?: string;
}

export default Skeleton;
