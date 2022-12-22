import React from "react";
import "./Progress.css";

function ProgressCircle({
  percentage = 0,
  fontsize = 7,
  enablePercent = true,
  size = 100,
}: ProgressCircle1 = {}): JSX.Element {
  return (
    <svg
      className={"inte-circle-chart"}
      viewBox="0 0 33.83098862 33.83098862"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={"inte-circle-chart__background"}
        stroke="#ecedee"
        strokeWidth="3"
        fill="none"
        cx="16.91549431"
        cy="16.91549431"
        r="14.91549431"
      ></circle>
      <circle
        className={"inte-circle-chart__circle"}
        stroke="url('#myGradient')"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        cx="16.91549431"
        cy="16.91549431"
        r="14.91549431"
        strokeDasharray={`${percentage},200`}
      ></circle>
      <linearGradient id="myGradient" gradientTransform="rotate(90)">
        <stop offset="10%" stopColor="#027A48" />
        <stop offset="100%" stopColor="#269E6C" />
      </linearGradient>
      <g className={"inte-circle-chart__info"}>
        <text
          style={{ fontSize: fontsize }}
          className={"inte-circle-chart__percent"}
          x="16.91549431"
          y="17.5"
          alignmentBaseline="central"
          textAnchor="middle"
          fontWeight="800"
        >
          {percentage + (enablePercent == true ? "%" : "")}
        </text>
      </g>
    </svg>
  );
}
export interface ProgressCircle1 {
  percentage?: number | string;
  size?: number;
  enablePercent?: boolean;
  fontsize?: number;
}

export default ProgressCircle;
