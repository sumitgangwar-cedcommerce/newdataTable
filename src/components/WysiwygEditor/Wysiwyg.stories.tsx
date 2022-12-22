import { Card } from "../Card";
import React, { useState } from "react";
import Wysiwyg from "./Wysiwyg";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";

export default {
  title: "Components/WysiwygEditor",
  component: Wysiwyg,
};

const Template = () => {
  const [onEditorStateChange, setOnEditorStateChange] = useState<any>();
  const [content, setContent] = useState<any>();

  return (
    <Card>
      <Wysiwyg
        editorState={onEditorStateChange}
        onEditorStateChange={(newState: any) => {
          setOnEditorStateChange(newState);
          setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
        }}
      />
    </Card>
  );
};

export const Primary = Template.bind({});