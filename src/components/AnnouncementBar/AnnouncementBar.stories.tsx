import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import TextStyles from "../TextStyles/TextStyles";
import AnnouncementBar from "./AnnouncementBar";

export default {
  title: "Components/Feedback/AnnouncementBar",
  component: AnnouncementBar,
  argTypes: {
    children: {
      description: "This is announcement bar children",
      control: {
        type: "text",
      },
      defaultValue: "Hello Announcment Bar",
    },
    type: {
      description: "This is type of Announcement Bar which changes Backgroud color",
      control: {
        type: "radio",
        options: ["warning", "success", "danger", "info"],
      },
      defaultValue: "warning",
    },
    align: {
      description: "Manages text Alignment",
      control: {
        type: "radio",
        options: ["left", "right", "center"],
      },
      defaultValue: "left",
    },
    onClose: {
      description: "Manage onClose Function",
      control: {
        type: "function",
      },
    },
    active: {
      description: "Show and hide Announcement",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    destroy: {
      description: "Show and hide cross button ",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
};

const Template = ({ ...rest }) => {
  const [active, setActive] = useState(true);

  const destroyf = () => {
    active ? setActive(false) : setActive(true);
    alert("Cross Button Clicked");
  };
  return (
    <AnnouncementBar
      {...rest}
      type={rest.type}
      align={rest.align}
      active={rest.active && active}
      destroy={rest.destroy}
      onClose={destroyf}
    />
  );
};

export const Primary = Template.bind({});


export const announcmentbar_with_slider: any = Template.bind({});
announcmentbar_with_slider.decorators = [
  () => (
    <AnnouncementBar type="info" destroy={false}>
      <Carousel slidesToShow={1} autoplay infinite autoplaySpeed={3000} slidesToScroll={1}>
        <TextStyles>1</TextStyles>
        <TextStyles>2</TextStyles>
        <TextStyles>3</TextStyles>
      </Carousel>  
     </AnnouncementBar>
  ),
];
