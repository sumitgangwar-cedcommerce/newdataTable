import React, { FC } from "react";
import "./Avatar.css";
const Avatar: FC<AvatarI> = ({
  text = "Jon Doe",
  type = "circle",
  color = "black",
  size = "large",
  image,
  zoom = false,
}: AvatarI) => {
  let width = "";
  let font = "";
  let radius = "";
  switch (size) {
    case "X-large":
      width = "48px";
      font = "24px";
      break;
    case "large":
      width = "40px";
      font = "20px";
      break;
    case "medium":
      width = "32px";
      font = "14px";
      break;
    default:
      width = "24px";
      font = "13px";
      break;
  }
  switch (type) {
    case "circle":
      radius = "50%";
      break;
    case "rounded":
      radius = "4px";
      break;

    default:
      radius = "0%";
      break;
  }
  if (typeof text !== "string") {
    return <></>;
  }

  const displayText = text.includes(" ")
    ? text.charAt(0) + text.charAt(text.lastIndexOf(" ") + 1)
    : text.substring(0, 2);
  return (
    <React.Fragment>
      {image ? (
        <div
          className={zoom ? "inte--Avatar inte--Avatar__Zoom" : "inte--Avatar"}
          style={{
            borderRadius: radius,
            width: width,
            height: width,
            overflow: "hidden",
            border: "1px solid #d4d4d4",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={image.toString()}
            alt={"Avatar"}
          />
        </div>
      ) : (
        <div
          className={zoom ? "inte--Avatar inte--Avatar__Zoom" : "inte--Avatar"}
          style={{
            borderRadius: radius,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color,
            color: "white",
            width: width,
            height: width,
            fontWeight: "bolder",
            lineHeight: "normal",
            fontSize: font,
          }}
        >
          {typeof text == "string" ? displayText.toUpperCase() : <div></div>}
        </div>
      )}
    </React.Fragment>
  );
};

export interface AvatarI {
  text?: string | React.ReactNode;
  zoom?: boolean;
  type?: "square" | "circle" | "rounded";
  color?: "black" | "red" | "yellow" | "green" | "blue" | "purple";
  size?: "small" | "medium" | "large" | "X-large";
  image?: string;
  children?: React.ReactNode | any;
}
export default Avatar;
