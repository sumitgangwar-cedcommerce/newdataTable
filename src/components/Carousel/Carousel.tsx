/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Slider from "react-slick";

const Carousel: FC<SliderI> = ({
  dots = false,
  arrows = false,
  slidesToShow = 1,
  autoplay,
  autoplaySpeed = 1000,
  slidesToScroll = 1,
  children,
  fade = false,
  swipeToSlide = false,
  vertical,
  verticalSwiping,
  infinite,
  responsive,
  dotsalign = "bottomCenter",
  arrowalign = "default",
  asNavFor,
  id,
}: SliderI) => {
  const getClassForDotAlign = (dotsalign: string) => {
    switch (dotsalign) {
      case "bottomRight":
        return "slickdot_bottomRight";
      case "bottomLeft":
        return "slickdot_bottomLeft";
      case "bottomCenter":
        return "slickdot_bottomCenter";
      case "topLeft":
        return "slickdot_topLeft";
      case "topRight":
        return "slickdot_topRight";
      default:
        return "slickdot_bottomCenter";
    }
  };
  const getArrowalign = (arrowalign: string) => {
    switch (arrowalign) {
      case "bottomRight":
        return "slickarrow_bottomRight";
      case "bottomLeft":
        return "slickarrow_bottomLeft";
      case "bottomCenter":
        return "slickarrow_bottomCenter";
      case "topLeft":
        return "slickarrow_topLeft";
      case "topRight":
        return "slickarrow_topRight";
      default:
        return "slickarrow_bottomCenter";
    }
  };
  const DotAlign = getClassForDotAlign(dotsalign);
  const ArrowAlign = getArrowalign(arrowalign);

  return (
    <div className="inte-Carousel">
      <Slider
        ref={id}
        asNavFor={asNavFor}
        dots={dots}
        arrows={arrows}
        fade={fade}
        responsive={responsive}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        autoplay={autoplay}
        autoplaySpeed={autoplaySpeed}
        swipeToSlide={swipeToSlide}
        vertical={vertical}
        verticalSwiping={verticalSwiping}
        infinite={infinite}
        className={`${dots && DotAlign} ${arrows && ArrowAlign}`}
      >
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
export interface SliderI {
  dots?: boolean;
  arrows?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  children?: any;
  fade?: boolean;
  swipeToSlide?: boolean;
  verticalSwiping?: boolean;
  responsive?: any;
  vertical?: boolean;
  infinite?: boolean;
  dotsalign?:
    | "bottomRight"
    | "bottomLeft"
    | "bottomCenter"
    | "topLeft"
    | "topRight";
  arrowalign?:
    | "center"
    | "topleft"
    | "topright"
    | "bottomright"
    | "default"
    | "bottomleft"
    | "bottomCenter";
  asNavFor?: any;
  id?: any;
}
