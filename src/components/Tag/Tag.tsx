/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable @typescript-eslint/no-explicit-any /
import React, { useRef } from "react";
import "./Tag.css";
import { ChevronDown, ChevronUp, X } from "react-feather";

const Tag: React.FC<TagI> = ({
  destroy, // This function destroy  or remove  cross icon in tag
  children,
  popover,
  count,
  toggle,
  disabled,
  togglePopup = () => {
    //That's onClick function apply accordion title
  },
}: // active,
TagI): JSX.Element => {
  const currentRef = useRef<any>(null);
  const checkOnDismiss = () => {
    if (destroy) {
      return (
        <button onClick={destroy}>
          <X size={14} color={disabled ? "var(--inte-G50)":"#1C2433"} />
        </button>
      );
    }
    return null;
  };

  return (
    <div
      ref={currentRef}
      className={`inte--Tag ${popover ? "inte--Tag-hasPopover" : ""} ${
        toggle  ? "inte--Tag-ActivePopover" : "" 
      } ${disabled ? 'inte-Tag--disabled':''}`}
      onClick={() => {
        togglePopup();
      }}
      {...(popover ? { tabIndex: 0 } : {})}
    >
      {checkOnDismiss() ? (
        <div className={`inte--Tag__Dismissible ${disabled ? "inte--Tag__Dismissible--disabled" :""}`}>
          <div className="inte--Tag-content">
            <span>{children}</span>
          </div>

          {popover && (
            <div className="inte--Tag--Popover-Wrapper">
              <span className="inte--Tag-Count">{count}</span>
              {toggle ? (
                <ChevronUp size={16} color="#3B424F" />
              ) : (
                <ChevronDown size={16} color="#3B424F" />
              )}
            </div>
          )}
          {checkOnDismiss()}
        </div>
      ) : (
        <>
          <div className="inte--Tag-content">
            <span>{children}</span>
          </div>

          {popover && (
            <div className="inte--Tag--Popover-Wrapper">
              <span className="inte--Tag-Count">{count}</span>

              {toggle ? (
                <ChevronUp size={16} color="#3B424F" />
              ) : (
                <ChevronDown size={16} color="#3B424F" />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export interface TagI {
  children: React.ReactNode | string;
  destroy?: () => void;
  popover?: boolean;
  count?: any;
  togglePopup?: (() => void) | any;
  toggle?: boolean;
  disabled?:boolean
}

export default Tag;