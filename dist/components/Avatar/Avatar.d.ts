import React, { FC } from "react";
import "./Avatar.css";
declare const Avatar: FC<AvatarI>;
export interface AvatarI {
    text?: string | React.ReactNode;
    zoom?: boolean;
    type?: "square" | "circle" | "rounded";
    color?: "black" | "red" | "yellow" | "green" | "blue" | "purple";
    size?: "small" | "medium" | "large" | "X-large";
    image?: string;
    children?: React.ReactNode | any;
    badge?: boolean;
}
export default Avatar;
