import React from "react";
import {
  Card,
  CopyClipboard,
  TextStyles,
} from "../../components";
import { Colors } from "./Colors";
import "../../storybook.css";

export default {
  title: "Foundation/Colors",
  component: Colors,
  parameters: {
    docs: {},
  },
};

const Template = ({}) => {
  return (
    <Card>
      {Object.keys(Colors)?.map((color: any, index: number) => {
        return (
          <div key={index} className="story-color-documentation">
            <TextStyles
              type="SubHeading"
              subheadingTypes="MD-2.2"
              fontweight="extraBold"
              utility="story-color-name"
            >
              {color}
            </TextStyles>
            {Colors[color]?.map((color: any, index: number) => {
              return (
                <div key={index} className="story-color-items">
                  <div className="story-color-box">
                    <div
                      className={`story-color-aria ${"story-color-"+color.colorName}`}
                      style={{ backgroundColor: color.colorHex }}
                    ></div>
                    <TextStyles
                      utility="story-color-Name"
                      fontweight="extraBold"
                    >
                      {color.colorName}
                    </TextStyles>
                  </div>
                  <div className="story-colorCodeWrapper">
                    <CopyClipboard
                      label={color.colorHex}
                      value={color.colorHex}
                      align={"fill"}
                    />

                    <CopyClipboard
                      label={color.colorRgba}
                      value={color.colorRgba}
                      align={"fill"}
                    />
                    <CopyClipboard
                      label={color.colorHsl}
                      value={color.colorHsl}
                      align={"fill"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </Card>
  );
};
export const Primary: any = Template.bind({});
