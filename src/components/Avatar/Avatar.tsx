import React, { FC } from "react";
import Badge from "../Badge/Badge";
import "./Avatar.css";
const Avatar: FC<AvatarI> = ({
  text = "Jon Doe",
  type = "circle",
  color = "black",
  size = "Small",
  image,
  badge = false,
  zoom = false,
}: AvatarI) => {
  let width = "";
  let font = "";
  let radius = "";
  switch (size) {
    case "Large":
      width = "48px";
      font = "20px";
      break;
    case "Medium":
      width = "32px";
      font = "14px";
      break;
    case "Small":
      width = "24px";
      font = "13px";
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
          {badge && (
            <Badge
              type="Success"
              dot
              size={`${
                size === "Small"
                  ? "Small"
                  : size === "Large"
                  ? "Large"
                  : size === "Medium"
                  ? "Medium"
                  : "Small"
              }`}
            ></Badge>
          )}
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
          {badge && (
            <Badge
              type="Success"
              dot
              size={`${
                size === "Small"
                  ? "Small"
                  : size === "Large"
                  ? "Large"
                  : size === "Medium"
                  ? "Medium"
                  : "Small"
              }`}
            ></Badge>
          )}
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
  size?: "Small" | "Medium" | "Large";
  image?: string;
  children?: React.ReactNode | any;
  badge?: boolean;
}
export default Avatar;
