import React, { useState } from "react";
import { Card } from "..";
import Carousel from "./Carousel";
import Slide from "./Carousel";

export default {
  title: "Components/Behaviour/Slider",
  component: Slide,
  argTypes: {
    dots: {
      description: "Disable dots",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    arrows: {
      description: "Disable Arrows",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    slidesToShow: {
      description: "set how much slide you want to show",
      control: {
        type: "number",
      },
      defaultValue: 2,
    },
    slidesToScroll: {
      description: "set how much slide you want to scroll",
      control: {
        type: "number",
      },
      defaultValue: 1,
    },
    autoplay: {
      description: "set autoplay",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    swipeToSlide: {
      description: "Enable touch Swipe",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    autoplaySpeed: {
      description: "set autoplay speed",
      control: {
        type: "number",
      },
      defaultValue: 1000,
    },
    infinite: {
      description: "set slide infinite",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    responsive: {
      description: "set responsiveness values in array format",
      control: {
        type: "array",
        disable: true,
      },
    },
    vertical: {
      description: "change position of slide",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    verticalSwiping: {
      description: " set vertical swiping",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    fade: {
      description: "set fade effect on slide",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    id: {
      description: "Set any custom Id which Works as Ref",
      control: {
        disable:true,
      },
    },
    asNavFor: {
      description: "Used for slider syncing to control another carousel",
      control: {
        type: "boolean",
        disable:true,
      },
    },
    dotsalign: {
      description: " Dots Alignment",
      control: {
        type: "radio",
        options: [
          "bottomLeft",
          "bottomRight",
          "bottomCenter",
          "topLeft",
          "topRight",
        ],
      },
      defaultValue: "center",
    },
    arrowalign: {
      description: "Arrow alignment",
      control: {
        type: "radio",
        options: [
          "default",
          "bottomRight",
          "bottomLeft",
          "topLeft",
          "topRight",
          "bottomCenter",
        ],
      },
      defaultValue: "default",
    },
  },
};

const settings = {
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 5,
        },
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
        },
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
        },
    },
],
}
const renderSlides = () =>
    [1, 2,3,4,5,6,7,8].map((num,index) => (
      <Card key={index} cardType="Bordered" media="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80">
        <h3>Slide {num}</h3>
      </Card>
    ));
const Template = ({ ...rest }) => {
  return (
    <Card title={"Ounce Carousel"}>
      <Carousel {...rest} responsive={[
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 5,
          },
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
          },
      },
      ]} >{renderSlides()}</Carousel>
    </Card>
  );
};

export const Primary = Template.bind({});

export const Carousel_with_autoplay_and_dots: any = Template.bind({});
Carousel_with_autoplay_and_dots.decorators = [
  () => {
  
    return(
     <Card title="Carousel with Autoplay and Dots">
       <Carousel autoplay autoplaySpeed={2000} arrows responsive={[
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 5,
          },
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
          },
      },
      ]} >{renderSlides()}</Carousel>
     </Card>
    )
  },
];

// Carousel with Dots and Arrows
export const Carousel_with_arrows_and_dots: any = Template.bind({});
Carousel_with_arrows_and_dots.decorators = [
  () => {
  
    return(
     <Card title="Carousel with Arrows and Dots">
       <Carousel arrows dots arrowalign="bottomCenter" dotsalign="bottomCenter" responsive={[
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 5,
          },
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
          },
      },
      ]} >{renderSlides()}</Carousel>
     </Card>
    )
  },
];

// Carousel with Only Dotes
export const Carousel_with_only_dots: any = Template.bind({});
Carousel_with_only_dots.decorators = [
  () => {
  
    return(
     <Card title="Carousel with Only Dots">
       <Carousel arrows dots dotsalign="bottomCenter" responsive={[
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 5,
          },
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
          },
      },
      ]} >{renderSlides()}</Carousel>
     </Card>
    )
  },
];

// Carousel with Only Dotes
export const Carousel_with_only_arrows: any = Template.bind({});
Carousel_with_only_arrows.decorators = [
  () => {
  
    return(
     <Card title="Carousel with Only Arrows">
       <Carousel arrows arrowalign="bottomCenter" responsive={[
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 5,
          },
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
          },
      },
      ]} >{renderSlides()}</Carousel>
     </Card>
    )
  },
];

// Carousel Verticla Swiping
export const vertical_swiping: any = Template.bind({});
vertical_swiping.decorators = [
  () => {
  
    return(
     <Card title="Carousel with Vertical Swiping">
       <Carousel vertical verticalSwiping arrows slidesToShow={1} arrowalign="bottomCenter" autoplay={false}>{renderSlides()}</Carousel>
     </Card>
    )
  },
];
// Carousel Verticla Swiping
export const infinite_carousel: any = Template.bind({});
infinite_carousel.decorators = [
  () => {
  
    return(
     <Card title="Carousel with Infinite Slides">
       <Carousel infinite arrows slidesToShow={2} slidesToScroll={1} arrowalign="bottomCenter" autoplay={true}>{renderSlides()}</Carousel>
     </Card>
    )
  },
];

// Carousel Sync
export const carousel_sync: any = Template.bind({});
carousel_sync.decorators = [
  () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
  
    return(
     <Card title="Carousel with Infinite Slides">
       <Carousel asNavFor={nav2} id={(slider1:any) => setNav1(slider1)}  slidesToShow={1} slidesToScroll={1} arrowalign="bottomCenter"  >{renderSlides()}</Carousel>
       <Carousel asNavFor={nav1} id={(slider2:any) => setNav2(slider2)}  arrows slidesToShow={3} slidesToScroll={1} arrowalign="bottomCenter" > {renderSlides()}</Carousel>
     </Card>
    )
  },
];