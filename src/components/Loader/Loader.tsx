// eslint-disable @typescript-eslint/explicit-module-boundary-types /
import React from "react";
import Progressbar from "../Progress/Progressbar";
import TextStyles from "../TextStyles/TextStyles";
import "./Loader.css";

const Loader: React.FC<LoaderI> = ({
  title,
  type = "Loader1",
  ...props
}: LoaderI) => {
  const Loader1 = () => {
    return (
      <div className="inte-Loader">
        <div className="inte-Loader--Items">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              id="Rectangle"
              x="0.263672"
              y="0.777832"
              width="35"
              height="35"
              rx="4"
              fill="#431BBC"
            />
          </svg>

          <svg
            width="39"
            height="34"
            viewBox="0 0 39 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Polygon"
              d="M15.9392 2C17.4788 -0.666666 21.3278 -0.666667 22.8674 2L37.5899 27.5C39.1295 30.1667 37.205 33.5 34.1258 33.5H4.68089C1.60169 33.5 -0.322814 30.1667 1.21679 27.5L15.9392 2Z"
              fill="#D9D9D9"
            />
          </svg>

          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              id="Ellipse"
              cx="18.7363"
              cy="18.0835"
              r="18"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className="inte-Loader--Text">
          <TextStyles
            type="SubHeading"
            subheadingTypes="LG-2.5"
            lineHeight="LH-1.6"
          >
            {title}
          </TextStyles>
        </div>
      </div>
    );
  };

  const Loader2 = (): JSX.Element => {
    return (
      <div className="inte-pageLoader">
        <div className="inte-loading"></div>
        <div className="inte-loading--Transform mt-10">
          <b>L</b>
          <b>O</b>
          <b>A</b>
          <b>D</b>
          <b>I</b>
          <b>N</b>
          <b>G</b>
        </div>
      </div>
    );
  };

  const Loader3 = (): JSX.Element => {
    return (
      <div className="inte-Loader--TypeThree">
        <div className="inte-Loader--TypeThreeInner">
          <div className="inte-Loader--Icon">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="120" height="120" rx="60" fill="#D7EAE2" />
              <path
                d="M80 45L52.5 72.5L40 60"
                stroke="#027A48"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <TextStyles
            alignment="center"
            utility="mt-16"
            type="Heading"
            headingTypes="LG-2.8"
            fontweight="bold"
          >
            You are successfully onboarded
          </TextStyles>
          <TextStyles alignment="center" utility="mt-40 mb-12">
            {props.subtitle}
          </TextStyles>
          <Progressbar
            progessThickness="thin"
            animating
            percentage={props.percentage}
          ></Progressbar>
        </div>
      </div>
    );
  };
  return (
    <>
      {type === "Loader3" ? (
        <Loader3 />
      ) : type === "Loader2" ? (
        <Loader2 />
      ) : (
        <Loader1 />
      )}
    </>
  );
};

export interface LoaderI {
  title?: string | any;
  subtitle?: string;
  type?: "Loader1" | "Loader2" | "Loader3";
  percentage?: number;
}

export default Loader;
