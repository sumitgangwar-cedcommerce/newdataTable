import React, { useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Search } from "react-feather";
import { FlexChild, FlexLayout } from "../FlexLayout";
import { TextField } from "../FormElement";
import Skeleton from "../Skeleton/Skeleton";
import TextStyles from "../TextStyles/TextStyles";
import './AutoComplete.css'
function Auto({
    options,
    value = "",
    onChange,
    onClick,
    onEnter,
    name,
    innerPreIcon = <Search size={20} color="#7e828b" />,
    innerSufIcon,
    showHelp,
    thickness = "thick",
    setHiglighted,
    placeHolder,
    loading = false,
    extraClass,
    popoverPosition = "right",
    ...props
}: SearchI): JSX.Element {
    const [showList, setShowList] = useState<boolean>(true);
    const [showList1, setShowList1] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [hoveredCart, setHoveredCart] = useState(-1);
    const [currentID, setCurrentID] = useState("1");
    const myRef: any = useRef();
    const myReff: any = useRef();
    const filteredName = options.filter((val: any) => {
        if (value === "") {
            return val;
        } else if (
            val.label
                .toLowerCase()
                .includes(
                    value.toLowerCase().replace(/\s+/g, " ").trimEnd().trimStart()
                )
        ) {
            return val;
        }
    });
    const renderStatementResult =
        value && value.length > 0 && value !== "" && showList == true;
    function onFocus() {
        setShowList(true);
        setShowList1(true);
        setShow(true);
    }
    function highlight(label: string, text: string) {
        const index = label
            .toLowerCase()
            .indexOf(text.toLowerCase().replace(/\s+/g, " ").trimEnd().trimStart());
        if (index >= 0) {
            return (
                <>
                    {label.substring(0, index)}
                    <span style={{ color: "#1C2433" }}>
                        {label.substring(
                            index,
                            index + text.replace(/\s+/g, " ").trimEnd().trimStart().length
                        )}
                    </span>

                    {label.substring(
                        index + text.replace(/\s+/g, " ").trimEnd().trimStart().length
                    )}
                </>
            );
        }
        return label;
    }
    const positionObjectMemo = useMemo(() => {
        return myRef.current?.getBoundingClientRect()
            ? myRef.current?.getBoundingClientRect()
            : 10;
    }, [myReff]);


    const [positionObject, setpositionObject] = useState(positionObjectMemo);

    function logit() {
        const post = myRef.current?.getBoundingClientRect()
            ? myRef.current?.getBoundingClientRect()
            : 10;
        setpositionObject(post);
        // dyPos();
    }
    function dyPos() {
        const windowheight = window.innerHeight; //Window Height
        const posactivator = positionObject.bottom; // position of elemet from Top
        const remainingBottomheight = windowheight - posactivator; // Remaining Bottom Space When Portal Opens
        const portalHeight = myReff.current?.offsetHeight ?? 0; // Portal Element Height
        if (portalHeight > remainingBottomheight) {
            const x = "popover-top";
            return {
                class: x,
                style: {
                    left: positionObject.left + positionObject.width,
                    top: positionObject.top - portalHeight - 5,
                },
            };
        } else {
            const x = "popover-bottom";

            return {

                class: x,
                style: {
                    left: positionObject.left,
                    top: positionObject.top + positionObject.height + 5,
                },
            };
        }
    }
    const pp: any = dyPos();
    console.log(pp.style.top)

    return (
        <>
            <div
                onClick={() => {
                    logit();
                }}
                ref={myRef}

                className={`inte__AutoComplete ${name ? "inte__AutoComplete--hasName" : false
                    } ${props.showPopover && "inte__AutoComplete--HasPopover"} ${props.showPopover && "inte__AutoComplete-Position" + popoverPosition
                    }`}
            >
                <TextField
                    type="text"
                    value={value}

                    placeHolder={placeHolder}
                    loading={loading}
                    clearButton={props.clearButton}
                    clearFunction={props.clearFunction}
                    onChange={(event) => {
                        setShowList(true);
                        setShowList1(true);
                        onChange(event);
                    }}
                    onFocus={onFocus}
                />
                {renderStatementResult && filteredName.length > 0 && show && value.trim() ? (
                    createPortal(
                        <div
                            ref={myReff}
                            style={{
                                width: positionObject.width,
                                position: "fixed",
                                ...pp.style,
                                zIndex: 9999999,
                            }}
                            className={`inte__AutoComplete  ${pp.class}`}
                        >
                            <ul>
                                <>
                                    {filteredName.map((values: any, index: any) => {
                                        return (
                                            <li
                                                // ref={(node) => {
                                                //     myReff2.current[values.id] = node;
                                                // }}
                                                id={values.id}
                                                key={index}
                                                onClick={() => {
                                                    setShowList(false);
                                                    setShowList1(false);
                                                    onChange(values.label);
                                                    // onFocus;
                                                    onClick(values.label, values.id);
                                                }}
                                            // onMouseLeave={hideCartHandler}
                                            // onMouseEnter={() => {
                                            //     showCartHandler(index);
                                            //     setCurrentID(values.id);
                                            // }}
                                            >
                                                <FlexLayout halign="fill" wrap="noWrap">
                                                    <FlexChild key={index}>
                                                        {setHiglighted ? (
                                                            <span style={{ color: "var(--inte-G90" }}>
                                                                {highlight(values.value, value)}
                                                            </span>
                                                        ) : (
                                                            <span style={{ color: "#8C9098" }}>
                                                                {values.label}
                                                            </span>
                                                        )}
                                                    </FlexChild>

                                                    {values.lname !== undefined && (
                                                        <span style={{ color: "var(--inte-G90)" }}>
                                                            {values.lname}
                                                        </span>
                                                    )}
                                                </FlexLayout>
                                                {/* 
                                        {hoveredCart === index &&
                                            values.popoverContent !== undefined &&
                                            props.showPopover &&
                                            createPortal(
                                                <>
                                                    <div
                                                        // ref={myReff}
                                                        id={values.id}
                                                        style={{ position: "fixed", ...pp.style }}
                                                        className={`inte-AutoComplete--Popover ${pp.class}`}
                                                    >
                                                        <div className="inte-AutoComplet--Popover-Inner">
                                                            {values.popoverContent}
                                                        </div>
                                                    </div>
                                                </>,
                                                document.body
                                            )} */}
                                            </li>
                                        );
                                    })}
                                </>
                            </ul>
                        </div>, document.body)
                ) : (
                    <>
                        {showList1 && value.length > 0 && value.trim() && show ? (
                            createPortal(
                                <div
                                    ref={myReff}

                                    style={{
                                        width: positionObject.width,
                                        position: "fixed",
                                        ...pp.style,
                                        zIndex: 9999999,
                                    }}

                                    className={`inte__AutoComplete ${extraClass}`}
                                >
                                    <ul

                                    // ref={myReff}
                                    // className={` inte-popover-container inte-popover-container--Empty ${extraClass}`}
                                    >
                                        <FlexLayout
                                            spacing="extraTight"
                                            direction="vertical"
                                            valign={loading ? undefined : "center"}
                                            desktopWidth={loading ? "100" : ""}
                                        >
                                            {loading ? (
                                                ""
                                            ) : (
                                                <Search height={20} size={20} color="#7e828b"></Search>
                                            )}
                                            {loading ? (
                                                <Skeleton line={3} type="line" height="20px" />
                                            ) : (
                                                <FlexLayout
                                                    spacing="tight"
                                                    halign="center"
                                                    direction="vertical"
                                                    valign="center"
                                                >
                                                    <TextStyles textcolor="light">
                                                        No Results Found
                                                    </TextStyles>
                                                    <h3
                                                        style={{ textAlign: "center" }}
                                                        className="inte__text  inte__text--light none inte__font--normal"
                                                    >
                                                        Check Your Search Term{" "}
                                                        <strong>
                                                            <pre style={{ display: "inline", whiteSpace: "normal" }}>"{value}"</pre>
                                                        </strong>{" "}

                                                    </h3>
                                                </FlexLayout>
                                            )}
                                        </FlexLayout>
                                    </ul>
                                </div>, document.body
                            )
                        ) : null}
                    </>
                )}
            </div>
        </>
    )
}
export interface SearchI {
    options?: any;
    value?: string;
    name?: string;
    onEnter?: ((e: string) => void) | any;
    onChange?: ((e: string) => void) | any;
    onClick?: ((e: string) => void) | any;
    thickness?: "thin" | "thick";
    placeHolder?: string;
    showHelp?: string;
    innerPreIcon?: string | React.ReactNode;
    innerSufIcon?: React.ReactNode;
    setHiglighted?: boolean;
    loading?: boolean;
    clearButton?: boolean;
    clearFunction?: ((e: string) => void) | any;
    showPopover?: boolean | any;
    popoverPosition?: "right" | "left" | "top" | "bottom";
    extraClass?: string;
}
export default Auto;