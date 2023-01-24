import React from "react";
import "./List.css";
declare const List: React.FC<ListI>;
export interface ListI {
    children: React.ReactNode;
    type?: "disc" | "circle" | "square" | "lower-roman" | "decimal" | "image" | any;
    src?: string | any;
}
export default List;
