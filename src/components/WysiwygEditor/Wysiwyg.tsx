/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Wysiwyg.css";

const Wysiwyg: React.FC<WysiwygI> = ({
  editorState,
  onEditorStateChange,
}: WysiwygI) => {
  return (
    <div className="inte-Wysisyg">
      <Editor
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        editorState={editorState}
        toolbar={{
          inline: {
            options: ["italic", "bold"],
            bold: { className: "demo-option-custom" },
            italic: { className: "demo-option-custom" },
            underline: { className: "demo-option-custom" },
            strikethrough: { className: "demo-option-custom" },
            monospace: { className: "demo-option-custom" },
            superscript: { className: "demo-option-custom" },
            subscript: { className: "demo-option-custom" },
          },
          blockType: {
            className: "demo-option-custom-wide",
            dropdownClassName: "demo-dropdown-custom",
          },
        }}
      />
    </div>
  );
};
export interface WysiwygI {
  editorState?: any;
  onEditorStateChange?: any;
}
export default Wysiwyg;
