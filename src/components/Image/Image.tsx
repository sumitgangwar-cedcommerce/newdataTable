/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import "./Image.css";

const Image: React.FC<ImageI> = ({
  alt,
  height = 100,
  width = 100,
  radius = "none",
  type = "none",
  src,
  fit,
}: ImageI) => {
  const ImageRadius = () => {
    switch (radius) {
      case "circle":
        return "inte-Image--circle";
      case "corner-radius":
        return "inte-Image--normal";
      default:
        return "";
    }
  };
  const ImageType = () => {
    switch (type) {
      case "black & white":
        return "inte-Image__black--white";
      default:
        return "";
    }
  };
  const ImageFit = () => {
    switch (fit) {
      case "cover":
        return "inte-Image--object__cover";
      case "fill":
        return "inte-Image--object__fill";
      case "center":
        return "inte-Image--object__contain";
      case "scale-down":
        return "inte-Image--object__scale-down";
      case "none":
        return "inte-Image--object__none";
      default:
        return "";
    }
  };
  const imageRadius = ImageRadius();
  const imageType = ImageType();
  const imageFit = ImageFit();
  return (
    <>
      <div
        className="inte-Image--Component"
        style={{ height: height, width: width }}
      >
        <img
          src={src}
          alt={alt}
          className={`inte-Image__Image ${imageRadius} ${imageType} ${imageFit}`}
        />
      </div>
    </>
  );
};
export interface ImageI {
  src?: string;
  height?: number;
  width?: number;
  alt?: string;
  radius?: "circle" | "corner-radius" | "none";
  type?: "black & white" | "none";
  fit?: "cover" | "fill" | "center" | "scale-down" | "none";
}
export default Image;
