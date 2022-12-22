/* eslint-disable @typescript-eslint/no-explicit-any */
import { Upload } from "antd";
import React from "react";
import { PlusCircle } from "react-feather";
import Button from "../Button/Button";
import TextStyles from "../TextStyles/TextStyles";
import "./upload.css";
const { Dragger } = Upload;
function Uploadnew({
  name,
  children,
  listType,
  className,
  uploadbutton,
  showUploadList,
  directory,
  accept,
  maxCount,
  multiple,
  drag,
  onChange,
  disabled,
  beforeUpload = false,
  openFileDialogOnClick,
}: UploadI): JSX.Element {
  return (
    <>
      {drag ? (
        <div className="inte-Upload inte-Upload--Drag">
          <Dragger
            name={name}
            onChange={onChange}
            listType={listType}
            className={className}
            showUploadList={showUploadList}
            directory={directory}
            accept={accept}
            multiple={multiple}
            maxCount={maxCount}
            disabled={disabled}
            beforeUpload={beforeUpload}
            openFileDialogOnClick={openFileDialogOnClick}
          >
            <Button>Upload</Button>
            <TextStyles> Click or drag file to this area to upload</TextStyles>
            <TextStyles textcolor="light">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </TextStyles>
          </Dragger>
        </div>
      ) : (
        <>
          {uploadbutton ? (
            <div className="inte-Upload">
              <Upload
                name={name}
                listType={"picture-card"}
                className={className}
                showUploadList={showUploadList}
                multiple={multiple}
                maxCount={maxCount}
                onChange={onChange}
                disabled={disabled}
                beforeUpload={beforeUpload}
                openFileDialogOnClick={openFileDialogOnClick}
              >
                <div>
                  <PlusCircle />
                  <div
                    style={{
                      marginTop: 10,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </div>
          ) : (
            <div className="inte-Upload">
              <Upload
                name={name}
                onChange={onChange}
                listType={listType}
                className={className}
                showUploadList={showUploadList}
                directory={directory}
                accept={accept}
                multiple={multiple}
                maxCount={maxCount}
                disabled={disabled}
                beforeUpload={beforeUpload}
                openFileDialogOnClick={openFileDialogOnClick}
              >
                {children}
              </Upload>
            </div>
          )}
        </>
      )}
    </>
  );
}
export interface UploadI {
  name?: string;
  children?: any;
  listType?: "text" | "picture" | "picture-card";
  className?: string;
  showUploadList?: boolean;
  action?: any;
  uploadbutton?: boolean;
  directory?: boolean;
  beforeUpload?: (() => void) | any;
  onChange?: (() => void) | any;
  accept?: any;
  multiple?: boolean;
  maxCount?: number;
  drag?: boolean;
  disabled?: boolean;
  openFileDialogOnClick?: boolean;
}
export default Uploadnew;
