import React from "react";
import "./Icon.css";

export const ZoomIn: React.FC<IconI> = ({
  size = "24",
  color = "#1c2433",
}: IconI) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21.9365L16.65 17.5865M8 11.9365H14M19 11.9365C19 16.3548 15.4183 19.9365 11 19.9365C6.58172 19.9365 3 16.3548 3 11.9365C3 7.51825 6.58172 3.93652 11 3.93652C15.4183 3.93652 19 7.51825 19 11.9365Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ZoomOut: React.FC<IconI> = ({
  size = "24",
  color = "#1c2433",
}: IconI) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 8.93652V14.9365M8 11.9365H14M21 21.9365L16.65 17.5865M19 11.9365C19 16.3548 15.4183 19.9365 11 19.9365C6.58172 19.9365 3 16.3548 3 11.9365C3 7.51825 6.58172 3.93652 11 3.93652C15.4183 3.93652 19 7.51825 19 11.9365Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ZapOff: React.FC<IconI> = ({
  size = "24",
  color = "#1c2433",
}: IconI) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_923_52816)">
        <path
          d="M1 1.93652L23 23.9365M12.41 7.68652L13 2.93652L10.57 5.85652M18.57 13.8465L21 10.9365H15.66M8 8.93652L3 14.9365H12L11 22.9365L16 16.9365"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_923_52816">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0 0.936523)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export interface IconI {
  color?: string;
  size?: "24" | "20" | "16";
}
