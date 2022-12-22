/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Card, FlexLayout } from "..";
import add from "../images/pluscircle.png";
const allowedFileExts = ["png", "jpg"];

const Upload = (props: any) => {
  const [fileState, setfileState] = useState<fileI[]>([]);
  const [activeImg, setactiveImg] = useState<undefined | string>(undefined);

  const fileInputChanged = (e: any) => {
    if (e["target"]["files"].length > 0) {
      const file = e["target"]["files"][0];
      const fileExt = file.name.split(".").pop().toLowerCase();

      if (allowedFileExts.includes(fileExt)) {
        const objectUrl: any = URL.createObjectURL(file);
        setfileState([
          ...fileState,
          {
            name: file.name,
            fileType: file.type,
            fileExtension: fileExt,
            fileSize: file.size,
            src: objectUrl,
            style: { display: "none" },
          },
        ]);
      } else {
        setTimeout(props.notify, 200);
      }
    }
  };
  const mouseEnterHandler = (index: number) => {
    const fileStateModified = fileState;

    const style = {
      style: {
        display: "block",
      },
    };
    const styleofOneFile = Object.assign({}, fileStateModified[index], style);
    fileStateModified.splice(index, 1, styleofOneFile);
    setfileState([...fileStateModified]);
  };

  const mouseLeaveHandler = (index: number) => {
    const fileStateModified = fileState;
    const styleofOneFile = {
      ...fileStateModified[index],
      style: { display: "none" },
    };
    fileStateModified.splice(index, 1, styleofOneFile);
    setfileState([...fileStateModified]);
  };

  const delImage = (e: React.BaseSyntheticEvent, index: number) => {
    const fileImages = fileState;
    if (fileImages[index].src === activeImg) setactiveImg(undefined);
    fileImages.splice(index, 1);
    setfileState([...fileImages]);
  };
  const activeThisImage = (src: string) => {
    setactiveImg(src);
  };
  return (
    <FlexLayout spacing="loose" wrap="wrap" direction="vertical">
      <FlexLayout spacing="loose" wrap="wrap">
        {fileState.map((file: fileI, i: number) => (
          <Card cardType="Bordered" key={i}>
            <div
              className="int-imgThumb"
              id="img-container"
              key={i}
              onMouseEnter={() => mouseEnterHandler(i)}
              onMouseLeave={() => mouseLeaveHandler(i)}
            >
              {
                <img
                  className="pr-image"
                  src={file.src}
                  alt="product"
                  onClick={() => activeThisImage(file.src)}
                />
              }
              <div
                id="cross-container"
                style={file.style}
                onClick={(e) => delImage(e, i)}
              >
                <div className="cross-line" id="first-line"></div>
                <div className="cross-line" id="sec-line"></div>
              </div>
            </div>
          </Card>
        ))}

        {fileState.length <= 0 ? (
          <div className="imgpreview"></div>
        ) : (
          <div className="imgpreview">
            <form action="" method="post" encType="multipart/form-data">
              {fileState.length !== 0 ? (
                <label htmlFor="adsfile" style={{ textAlign: "center" }}>
                  {<img src={add} alt="Add" height="30px" />}
                  <input
                    type="file"
                    name="adsfile"
                    id="adsfile"
                    style={{ display: "none" }}
                    onChange={(eve) => fileInputChanged(eve)}
                  />
                </label>
              ) : null}
            </form>
          </div>
        )}
      </FlexLayout>

      <FlexLayout halign="center" valign="center">
        {activeImg && (
          <Card>
            <img src={activeImg} alt="" />
          </Card>
        )}
      </FlexLayout>
    </FlexLayout>
  );
};
export interface fileI {
  name: string;
  fileType: string;
  fileExtension: string;
  fileSize: number;
  src: string;
  style: any;
  onChange?: () => void;
}

export default Upload;
