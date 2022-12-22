/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./upload.css";
import Button from "../Button/Button";
import { Card } from "../Card";
import { FlexLayout } from "../FlexLayout";
import xcircle from "../images/x-circle.svg";
import fileUpload from "../images/fileUpload.svg";
import TextStyles from "../TextStyles/TextStyles";
import FlexChild from "../FlexLayout/FlexChild";
import Toast from "../Toast/Toastchild";

interface FileUploadI {
  children: React.ReactNode;
  value?: any;
  onChange: (e: Event) => void;
  multiple?: boolean;
  format?: string[];
}
interface ObjI {
  [name: string]: string | number | boolean | React.ReactNode;
}
const FileUpload: React.FC<FileUploadI> = ({
  multiple = false,
  format = [],
  onChange = () => {
    return null;
  },
}: FileUploadI) => {
  const [file, setfile] = useState<any>([]);
  const [error, seterror] = useState<string[]>([]);
  const getFiles = (files: ObjI[] | any) => {
    const temp: any = [];

    Object.values(files).map((elem: any) => {
      temp.push(elem);
    });
    if (multiple) setfile([...file, ...temp]);
    else setfile(temp);
  };

  function getSize(bytes: number, dp = 1) {
    const thresh = 1024;

    if (Math.abs(bytes) < thresh) {
      return bytes + " B";
    }

    const units = ["kB", "MB", "GB"];
    let u = -1;
    const r = 10 ** dp;

    do {
      bytes /= thresh;
      ++u;
    } while (
      Math.round(Math.abs(bytes) * r) / r >= thresh &&
      u < units.length - 1
    );

    return bytes.toFixed(dp) + " " + units[u];
  }

  const delfile = (key: number) => {
    const temp = file;
    temp.splice(key, 1);
    setfile([...temp]);
    onChange(temp);
  };

  return (
    <div className={"inte-File--Upload"}>
      <FlexLayout
        direction="vertical"
        spacing="extraLoose"
        halign="center"
        valign="center"
      >
        <FlexLayout spacing="loose" wrap="wrap">
          {file.length > 0 ? (
            file.map((elem: any, index: number) => (
              <Card key={index} cardType="Bordered">
                <FlexLayout spacing="tight" valign="center">
                  <FlexChild>
                    <FlexLayout spacing="loose" valign="center" wrap="noWrap">
                      {
                        <img
                          src={
                            elem.type.search("image") > -1
                              ? URL.createObjectURL(elem)
                              : fileUpload
                          }
                          alt="Upload"
                          height="50"
                          width="50"
                        />
                      }
                      <FlexLayout direction="vertical">
                        <TextStyles type="smallText">{elem.name}</TextStyles>
                        <TextStyles
                          type="smallText"
                          textcolor="light"
                          utility={"mt-5"}
                        >
                          {getSize(elem.size)}
                        </TextStyles>
                      </FlexLayout>
                    </FlexLayout>
                  </FlexChild>
                  <FlexChild>
                    <FlexLayout spacing="loose">
                      {
                        <img
                          style={{ cursor: "pointer" }}
                          src={xcircle}
                          alt="Delete"
                          height="20"
                          width="20"
                          onClick={() => delfile(index)}
                        />
                      }
                    </FlexLayout>
                  </FlexChild>
                </FlexLayout>
              </Card>
            ))
          ) : (
            <></>
          )}
        </FlexLayout>
        <form action="" method="">
          <FlexLayout direction="vertical" spacing="extraLoose" valign="center">
            {<img src={fileUpload} alt="Upload" height="50" width="50" />}
            <FlexLayout direction="vertical" valign="center" spacing={"tight"}>
              <label className="inte-File--Fake" htmlFor="">
                <input
                  id="fileUpload"
                  type="file"
                  multiple={multiple}
                  onChange={(e: any) => {
                    const filestemp: any = [];
                    Object.values(e.target.files).map((elem: any) => {
                      const extension = elem.name.split(".").pop();
                      if (format.length == 0 || format.includes(extension)) {
                        filestemp.push(elem);
                      } else {
                        if (!error.includes(extension)) {
                          const x = error;
                          x.push(extension);
                          seterror(x);
                        }
                      }
                    });
                    if (filestemp.length > 0) {
                      getFiles(filestemp);
                    }
                    onChange(filestemp);
                  }}
                />
                <Button type="Outlined">
                  {multiple ? "Upload Files" : "Upload File"}
                </Button>
              </label>
              {error.length > 0 && (
                <Toast
                  onDismiss={() => seterror([])}
                  type="error"
                  message={error.join(" , ") + " format not supported"}
                />
              )}
              <TextStyles
                type="Paragraph"
                paragraphTypes="LG-1.5"
                lineHeight="LH-1.6"
                textcolor="light"
                utility="mt-5"
              >
                Click Button To upload files
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </form>
      </FlexLayout>
    </div>
  );
};

export default FileUpload;
