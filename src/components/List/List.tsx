import React from "react";
import "./List.css";

const List: React.FC<ListI> = ({ children = <></>, type , imageSrc="d" }: ListI) => {
  const childrens: any = React.Children.toArray(children);
  const newChildrens = childrens.map((children: any, index: string) => {
    return <li key={index}>{children}</li>;
  });
  return (
    <>
      {type == "disc" || type == "circle" || type == "square" ? (
        <ul style={{ listStyleType: type, }} className="inte__List">
          <>{newChildrens}</>
        </ul>
      ) : type == "image" ? (
        <ul style={{ listStyleImage : "url('"+imageSrc+"')"  }} className="inte__List inte__List--WithImage">
          <>{newChildrens}</>
        </ul>
      ) : <ol style={{ listStyleType: type}} className="inte__List">
      <>{newChildrens}</>
    </ol>}
    </>
  );
};

export interface ListI {
  children: React.ReactNode;
  type?: "disc" | "circle" | "square" | "lower-roman" | "decimal" | "image" | any;
  imageSrc?: string | any;
}
export default List;
