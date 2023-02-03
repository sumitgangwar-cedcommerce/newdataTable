import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import "./AdvanceFilter.css";
import AdvanceFilterSheet from "./AdvanceFilterSheet";

const getPositionOfFixedElelment = (parentEle:any , childEle:any ) =>{
    const parentDimension = parentEle.getBoundingClientRect()
    const isBottomHaveSpace = (window.innerHeight  - parentDimension.bottom) >= childEle.clientHeight
    const isLeftHaveSpace = (window.innerWidth - parentDimension.left) >= childEle.clientWidth

    return {
        top : isBottomHaveSpace ? parentDimension.bottom : parentDimension.top - childEle.clientHeight , 
        left : isLeftHaveSpace ? parentDimension.left :  parentDimension.right - childEle.clientWidth
    }
}

const AdvanceFilter2: React.FC<Filter1> = ({
    onClose = () => { },
    filterType = "Sheet",
    ...props
}: Filter1) => {
    const [active, handleToggle] = useState(false);

    const toggle = () => {
        handleToggle(!active);
    };
    const ref = useRef<HTMLDivElement>(null);
    const filterPopoverRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        const classExists = event.composedPath().some((el: any) => el.classList && el.classList.contains("inte-select-options"));
        if (!classExists && ref.current && !ref.current.contains(event.target)) {

            handleToggle(false);
        }
    };

    const handelPopoverPosition = () =>{
        if(!filterPopoverRef.current)   return
        const {top , left} = getPositionOfFixedElelment(ref.current , filterPopoverRef.current)
        filterPopoverRef.current.style.position = 'fixed'
        filterPopoverRef.current.style.top = top + 'px'
        filterPopoverRef.current.style.left = left + 'px'
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
            document.body.classList.add("inte-Filter--Open");
        } else {
            document.body.style.removeProperty("overflow");
            document.body.classList.remove("inte-Filter--Open");
        }
        if(active) window.addEventListener('resize' , handelPopoverPosition)
        else window.removeEventListener('resize' , handelPopoverPosition)  
    }, [active]);

    const filterPopover = () => {
        return <div
            ref={filterPopoverRef}
            className={
                active
                    ? `inte_Filter--Active  ${filterType == "Sheet"
                        ? "inte_FilterSheetWrapper"
                        : "inte_FilterPopoverWrapper"
                    }`
                    : `${filterType == "Sheet"
                        ? "inte_FilterSheetWrapper"
                        : "inte_FilterPopoverWrapper"
                    }`
            }
        >
            <AdvanceFilterSheet
                {...props}
                handleToggle={() => {
                    toggle();
                }}
                onClose={onClose}
            ></AdvanceFilterSheet>
            {filterType === "Sheet" ? (
                <div
                    onClick={() => {
                        onClose(), toggle();
                    }}
                    className="inte-Backdrop"
                ></div>
            ) : null}
        </div>
    }

    return (
        <div className="inte-Filter--Advance" ref={ref}>
            <div className={"inte-Filter"}>
                <Button
                    icon={props.icon}
                    type={props.type}
                    thickness="thin"
                    onClick={toggle}
                >
                    {props.button}
                </Button>
            </div>
            {
                filterPopover()
            }
        </div>
    );
};
export interface FilterI {
    props?: Filter1;
}
export interface Filter1 {
    filters: FI[];
    heading?: string;
    button?: string;
    icon?: React.ReactNode;
    type?:
    | "Primary"
    | "Danger"
    | "DangerOutlined"
    | "Secondary"
    | "Outlined"
    | "DangerPlain"
    | "TextButton";
    onApply?: () => void;
    onClose?: () => void;
    resetFilter?: () => void;
    disableReset?: boolean;
    disableApply?: boolean;
    filterType?: "Sheet" | "Popover";
}
export interface FI {
    name: string;
    children: React.ReactNode;
}

export default AdvanceFilter2;
