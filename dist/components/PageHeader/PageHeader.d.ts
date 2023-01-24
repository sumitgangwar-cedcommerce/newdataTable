import React from "react";
import { ButtonI } from "../Button/Button";
import "./PageHeader.css";
declare function PageHeader({ title, description, sticky, reverseNavigation, primaryAction, secondaryAction, ...props }: PageHeaderI): JSX.Element;
export interface PageHeaderI {
    title?: string | React.ReactNode;
    sticky?: boolean;
    reverseNavigation?: boolean;
    description?: string | React.ReactNode;
    onClick?: () => void;
    metaData?: React.ReactNode;
    primaryAction?: ButtonI;
    secondaryAction?: Array<ButtonI>;
}
export default PageHeader;
