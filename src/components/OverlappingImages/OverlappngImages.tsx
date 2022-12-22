/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./OverlappingImages.css";

const OverlappingImages: React.FC<OverlappingImagesI> = ({
  children = <></>,
  size = "40",
}: OverlappingImagesI) => {
  const childrens: any = React.Children.toArray(children);
  const newChildrens = childrens.map((children: any, index: string) => {
    return (
      <li style={{ height: size + "px", width: size + "px" }} key={index}>
        {children}
      </li>
    );
  });

  return (
    <>
      <ol className="inte__OverlappingImages">
        <>{newChildrens}</>
      </ol>
    </>
  );
};

export interface OverlappingImagesI {
  children: React.ReactNode;
  size?: string;
}
export default OverlappingImages;
