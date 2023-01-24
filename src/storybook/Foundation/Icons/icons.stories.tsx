import React, { useState } from "react";
import { Card, CopyClipboard, FlexLayout, TextField, TextStyles } from "../../../components";
import { IconsComponent } from "./IconsData";
import './Icons.css';
import { Search } from "./Icons";
export default {
  title: "Foundation/Icons",
  argTypes: {
    size: {
      description: "Font Size",
      control: {
        type: "radio",
        options: ["24", "20", "16"],
      },
      defaultValue: "24",
    },
    color: {
      description: "Color Name",
      control: {
        type: "text",
      },
      defaultValue: "#1c2433",
    },
  },
};
const Template = ({ ...rest }: any) => {
  let icons: any = IconsComponent({ ...rest })
  const [input, setInput] = useState('');
  const [data, setData] = useState<any>([]);

  // Calling function to search icons
  const searchIcons = (e: string) => {
    setInput(e)
    let text = e.toLowerCase();
    let temp: any = []
    Object.keys(icons).map((i) => {
      icons[i]?.map((j: any) => {
        j.data.map((k: any) => {
          let t = k.toLowerCase();
          if (t.includes(text)) {
            temp.push(j)
          }
        })
      })
    })
    setData(temp)
  }
  return (
    <Card>
      <FlexLayout direction="vertical" spacing="loose" desktopWidth="100">
        <TextField placeHolder="Search Icons" prefix={<Search size="20" color="rgb(195, 197, 201)" />} value={input} onChange={(e: string) => searchIcons(e)} />
        <>
          {input === "" ? Object.keys(icons)?.map((name: any, index: number) => {
            return (
              <div key={index} className="inte__icons--CardContainer">
                <TextStyles
                  type="SubHeading"
                  subheadingTypes="MD-2.2"
                  fontweight="extraBold"
                >
                  {name}
                </TextStyles>
                {/* <div className="inte__icons-card"> */}
                <FlexLayout spacing="loose" desktopWidth="25" tabWidth="33" mobileWidth="50">
                  {icons[name]?.map((i: any, index: number) => {
                    return (
                      // <div className="icon-inner" key={index}>
                      <Card cardType="Bordered" extraClass="icon-inners">
                        <span>{i.icon}</span>
                        <CopyClipboard
                          align="fill"
                          value={`<${i.name} size="${rest.size}" color="${rest.color}" />`}
                          label={i.name}
                        ></CopyClipboard>
                      </Card>
                      // </div>
                    );
                  })}
                </FlexLayout>
                {/* </div> */}
              </div>
            );
          }) :
            <>
              <div className="inte__icons--IconsLength">
                {data.length} matching results
              </div>
              <FlexLayout spacing="loose" desktopWidth="25" tabWidth="33" mobileWidth="50">
                {data.length !== 0 ? data?.map((i: any, index: number) => {
                  return (
                    <Card cardType="Bordered" extraClass="icon-inners">
                      <span>{i.icon}</span>
                      <CopyClipboard
                        align="fill"
                        value={`<${i.name} size="${rest.size}" color="${rest.color}" />`}
                        label={i.name}
                      ></CopyClipboard>
                    </Card>
                  );
                }) : <TextStyles>No Matched Icon Found!</TextStyles>}
              </FlexLayout>
            </>
          }
        </>
      </FlexLayout>
    </Card>
  );
};
export const Primary: any = Template.bind({});