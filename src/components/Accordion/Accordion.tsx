import React, { useRef, FC } from "react";
import "./Accordion.css";
import { ChevronUp, ChevronDown } from "react-feather";

const Accordion: FC<AccordionI> = ({
  children = "",
  active = false,
  icon = true,
  boxed = true,
  title = "",
  iconAlign = "left",
  onClick = () => {
    //That's onClick function apply accordion title
  },
}: AccordionI) => {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {boxed ? (
        <div
          className={
            active
              ? "inte__accordion--active inte__accordion"
              : "inte__accordion"
          }
        >
          <div
            onClick={onClick}
            className={`inte-flex intel-flex--align-center inte-flex--noWrap inte__accordionHeader ${
              iconAlign == "right"
                ? "intel-flex--distribute-spaceBetween inte__accordion--IconRight"
                : ""
            }`}
          >
            {icon && iconAlign == "left" ? (
              <div className="inte-flex__item">
                {active ? (
                  <ChevronUp size={20} color="#2c127a" />
                ) : (
                  <ChevronDown size={20} color="#3b424f" />
                )}
              </div>
            ) : (
              ""
            )}
            <div className="inte-flex__item">
              {typeof title === "string" ? (
                <div className="inte__cardTitle">
                  <h3>{title}</h3>
                </div>
              ) : (
                title
              )}
            </div>
            {icon && iconAlign == "right" ? (
              <div className="inte-flex__item">
                {active ? (
                  <ChevronUp size={20} color="#2c127a" />
                ) : (
                  <ChevronDown size={20} color="#3b424f" />
                )}
              </div>
            ) : (
              ""
            )}
          </div>

          <div
            className={
              active
                ? "inte__accordion--active inte__accordionBody"
                : "inte__accordionBody"
            }
          >
            <div ref={parentRef}>{children}</div>
          </div>
        </div>
      ) : (
        <div
          className={
            active
              ? "inte__accordion--active inte__accordion inte__Accordion--Bordered"
              : "inte__accordion inte__Accordion--Bordered"
          }
        >
          <div
            onClick={onClick}
            className={`inte-flex intel-flex--align-center inte-flex--noWrap inte__accordionHeader ${
              iconAlign == "right"
                ? "intel-flex--distribute-spaceBetween inte__accordion--IconRight"
                : ""
            }`}
          >
            {icon && iconAlign == "left" ? (
              <div className="inte-flex__item">
                {active ? (
                  <ChevronUp size={20} color="#2c127a" />
                ) : (
                  <ChevronDown size={20} color="#3b424f" />
                )}
              </div>
            ) : (
              ""
            )}
            <div className="inte-flex__item">
              {typeof title === "string" ? (
                <div className="inte__cardTitle">
                  <h3>{title}</h3>
                </div>
              ) : (
                title
              )}
            </div>
            {icon && iconAlign == "right" ? (
              <div className="inte-flex__item">
                {active ? (
                  <ChevronUp size={20} color="#2c127a" />
                ) : (
                  <ChevronDown size={20} color="#3b424f" />
                )}
              </div>
            ) : (
              ""
            )}
          </div>

          <div
            className={
              active
                ? "inte__accordion--active inte__accordionBody"
                : "inte__accordionBody"
            }
          >
            <div ref={parentRef}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
export interface AccordionI {
  children?: React.ReactNode | string;
  title?: string | React.ReactNode;
  active?: boolean | number;
  onClick?: () => void;
  icon?: boolean;
  iconAlign?: "left" | "right";
  boxed?: boolean;
}

export default Accordion;
