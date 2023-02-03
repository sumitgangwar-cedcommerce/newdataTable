/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { Tag } from "..";
import "./FormElement.css";
import TextStyles from "../TextStyles/TextStyles";
import { createPortal } from "react-dom";
import {
  Check,
  ChevronDown,
  Search,
} from "../../storybook/Foundation/Icons/Icons";
import { Skeleton, FlexLayout, Badge } from "..";
const Select = ({
  helperText,
  label,
  options = [],
  multiSelect,
  searchable,
  required = false,
  helpIcon,
  loading = false,
  controlStates,
  disabled = false,
  clearable = false,
  container = "body",
  placeholder,
  ellipsis = true,
  customClass = "",
  debounceTimer = 500,
  onChange = () => null,
  customRef,
  tabIndex,
  defaultValue,
  ...props
}: SelectI): JSX.Element => {
  const [optionsToShow, setOptionsToShow] = useState<any>(options);
  const [inputValue, setInputValue] = useState<string>("");
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  // Using it because at a single time onmouseover and onkeydown works , so if only one work at a time this state is made
  const [indexSetByKeyPress, setIndexSetByKeyPress] = useState(false);
  const inputBoxRef = useRef<HTMLInputElement>(null);
  const selectBoxRef = useRef<HTMLDivElement>(null);
  const clearBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownListRef = useRef<HTMLUListElement>(null);
  const portalDropdownListRef = useRef<HTMLDivElement>(null);

  // Setting the default values send by the user
  const getDefaultValues = () => {
    if (!defaultValue) return;
    let formattedDefaultValue: string[] = [];
    const isFound = "group" in optionsToShow[0];
    if (isFound) {
      if (multiSelect) {
        options.map((group: any) => {
          group.group.map((option: any) => {
            if (
              Array.isArray(defaultValue) &&
              defaultValue
                .map((val) => val.toLowerCase())
                .includes(option.value.toLowerCase())
            ) {
              formattedDefaultValue.push(option.label);
            }
          });
        });
      } else {
        let groupIndex;
        let selectedOptionIndex: any;
        options.map((item: any) => {
          item.group.map((ele: any) => {
            const selectedOption = [ele].find(
              (opt: any) =>
                opt.value.toLowerCase() === defaultValue.toLowerCase()
            );
            selectedOptionIndex = item.group.findIndex(
              (opt: any) =>
                opt.value.toLowerCase() === defaultValue.toLowerCase()
            );
            if (selectedOption) formattedDefaultValue = [selectedOption.label];
          });
          groupIndex = options.findIndex(({ group }) =>
            group?.some(
              ({ value }) => value.toLowerCase() === defaultValue.toLowerCase()
            )
          );
          setSelectedIndex(selectedOptionIndex);
          setSelectedGroupIndex(groupIndex);
        });
      }
    } else {
      if (!multiSelect) {
        const selectedOptionIndex = options.findIndex(
          (option) => option.value.toLowerCase() === defaultValue.toLowerCase()
        );
        const selectedOption = options.find(
          (option) => option.value.toLowerCase() === defaultValue.toLowerCase()
        );
        if (selectedOption) formattedDefaultValue = [selectedOption.label];
        setSelectedIndex(selectedOptionIndex);
      } else {
        formattedDefaultValue = defaultValue.map((value: any) => {
          const selectedOptionIndex = options.findIndex(
            (option) => option.value.toLowerCase() === value.toLowerCase()
          );
          const selectedOption = options.find(
            (option) => option.value.toLowerCase() === value.toLowerCase()
          );
          setSelectedIndex(selectedOptionIndex);
          return selectedOption ? selectedOption.label : null;
        });
      }
    }
    setSelectedOptions(formattedDefaultValue);
  };

  // Adding the event listener and calling the getDefaultValues function
  useEffect(() => {
    window.addEventListener("click", clickingOutsideSelectBox, true);
    window.addEventListener("click", clickingInsideSelectBox, true);
    window.addEventListener("scroll", scrollWindow, true);
    window.addEventListener("resize", scrollWindow, true);
    scrollWindow();
    getDefaultValues();
    return () => {
      window.removeEventListener("click", clickingOutsideSelectBox, true);
      window.removeEventListener("click", clickingInsideSelectBox, true);
      window.removeEventListener("scroll", scrollWindow, true);
      window.removeEventListener("resize", scrollWindow, true);
    };
  }, []);

  // Clicking outside of select box
  const clickingOutsideSelectBox = (e: any) => {
    !selectBoxRef.current?.contains(e.target) &&
      !portalDropdownListRef.current?.contains(e.target) &&
      setDropdownActive(false);
  };

  /*Clicking on select box block starts*/
  // Clicking inside of select box
  const clickingInsideSelectBox = (e: any) => {
    const { current: selectBox } = selectBoxRef;
    const { current: clearBtn } = clearBtnRef;
    const { current: dropdownList } = dropdownListRef;
    if (
      selectBox?.contains(e.target) &&
      !clearBtn?.contains(e.target) &&
      !dropdownList?.contains(e.target)
    ) {
      setDropdownActive((prev) => !prev);
    }
  };

  // Clicking on select box for disable and loading
  const insideSelectClickHandler = () => {
    searchable && !disabled && inputBoxRef.current?.focus();
    disabled && setDropdownActive(false);
    const isFound = optionsToShow.some((ele: any) => { return 'group' in ele ? true : false })
    if (!loading && !isFound && !multiSelect) {
      optionsToShow.length === selectedIndex + 1
        ? dropdownListRef.current?.children[selectedIndex].scrollIntoView({
            block: "end",
            behavior: "auto",
          })
        : dropdownListRef.current?.children[selectedIndex + 1].scrollIntoView({
            block: "end",
            behavior: "auto",
          });
    }
    if (!loading && isFound && !multiSelect) {
      dropdownListRef.current?.children[
        selectedGroupIndex
      ].children[1].children[selectedIndex].scrollIntoView({
        behavior: "auto",
        block: "end",
        inline: "nearest",
      });
    }
  };

  // Group Options
  function MoldGroupOptions(group: ObjI[], index: any) {
    return group.map((option, groupIndex: any) => {
      const isSelectedOption = selectedOptions.includes(option.label)
        ? true
        : false;
      return (
        <li
          className={`inte-Select__Select--Item inte-Select__Select--Item-List ${
            isSelectedOption
              ? !multiSelect
                ? "inte-select-box__dropdown-card__item--active"
                : ""
              : ""
          } ${multiSelect ? "inte-Select__Select--Item-DescList" : ""}`}
          key={option.value}
          value={option.value}
          onClick={() => {
            dropdownItemClickHandler(option);
            setIndexSetByKeyPress(false);
            setSelectedIndex(groupIndex);
            setSelectedGroupIndex(index);
          }}
          style={{
            background:
              index === selectedGroupIndex && groupIndex === selectedIndex
                ? "var(--inte-P20)"
                : "var(--inte-G0)",
          }}
          onMouseOver={() => {
            if (!indexSetByKeyPress) {
              setSelectedIndex(groupIndex);
              setSelectedGroupIndex(index);
            }
            setIndexSetByKeyPress(false);
          }}
        >
          {multiSelect && (
            <span
              style={{ visibility: isSelectedOption ? "visible" : "hidden" }}
            >
              <Check size="20" color="var(--inte-P900)" />
            </span>
          )}
          <TextStyles
            utility={
              isSelectedOption
                ? `${
                    !multiSelect
                      ? "inte-Select__Select--ItemHeading-active"
                      : ""
                  }`
                : ""
            }
            textcolor="dark"
          >
            {option.label}
          </TextStyles>
        </li>
      );
    });
  }
  // Render group data like label , group
  const renderGroupData = (item: any, index: any) => {
    return (
      <li
        className={
          item.group
            ? "inte-Select__Select--Item inte-Select__Select--ItemGrouped"
            : "inte-Select__Select--Item"
        }
        key={`${item.label}.${item.value}.${index}`}
      >
        <FlexLayout halign="fill">
          <TextStyles textcolor="light">{item.label}</TextStyles>
          <Badge
            badgeTextColor="light"
            size="Small"
            customBgColor="var(--inte-P900)"
          >
            {item.group.length}
          </Badge>
        </FlexLayout>
        <ol className="inte-Select__Select--ItemGroupItem">
          {MoldGroupOptions(item.group, index)}
        </ol>
      </li>
    );
  };

  // Render simple data like label,value
  const renderSimpleData = (item: any, index: any) => {
    const isSelectedOption = selectedOptions.includes(item.label)
      ? true
      : false;
    return (
      <li
        className={`inte-Select__Select--Item inte-Select__Select--Item-List ${
          isSelectedOption
            ? !multiSelect
              ? "inte-select-box__dropdown-card__item--active"
              : ""
            : ""
        } ${multiSelect ? "inte-Select__Select--Item-DescList" : ""}`}
        key={`${item.label}.${item.value}.${index}`}
        onClick={() => {
          !multiSelect && onChange(item.value, item);
          dropdownItemClickHandler(item);
          setIndexSetByKeyPress(false);
        }}
        style={{
          backgroundColor: selectedIndex === index ? "var(--inte-P20)" : "",
        }}
        onMouseOver={() => {
          if (!indexSetByKeyPress) {
            setSelectedIndex(index);
          }
          setIndexSetByKeyPress(false);
        }}
      >
        {multiSelect && (
          <span
            style={{
              visibility: isSelectedOption ? "visible" : "hidden",
            }}
          >
            <Check size="20" color="var(--inte-P900)" />
          </span>
        )}
        <div>
          <TextStyles
            utility={
              isSelectedOption
                ? `${
                    !multiSelect
                      ? "inte-Select__Select--ItemHeading-active"
                      : ""
                  }`
                : ""
            }
            textcolor="dark"
          >
            {item.label}
          </TextStyles>
          {item.description && (
            <TextStyles
              utility={
                isSelectedOption
                  ? `${
                      !multiSelect
                        ? "inte-Select__Select--ItemDesc-active"
                        : "inte-Select__Select--ItemDesc"
                    }`
                  : "inte-Select__Select--ItemDesc"
              }
            >
              {item.description}
            </TextStyles>
          )}
        </div>
      </li>
    );
  };

  // Rendering the dropdown
  const selectDropdownCard = () => {
    return (
      <ul
        style={{ maxHeight: 25 + "rem" }}
        aria-label="inte-select-options"
        className={"inte-select-options"}
        ref={dropdownListRef}
      >
        {isLoading || loading ? (
          <li className="inte-select-options__loading">
            <FlexLayout direction="vertical" spacing="tight">
              <FlexLayout direction="vertical" spacing="extraTight">
                <Skeleton
                  height="12px"
                  line={1}
                  rounded="0%"
                  type="custom"
                  width="35%"
                />
                <Skeleton
                  height="12px"
                  line={1}
                  rounded="0%"
                  type="custom"
                  width="75%"
                />
              </FlexLayout>
              <FlexLayout direction="vertical" spacing="extraTight">
                <Skeleton
                  height="12px"
                  line={1}
                  rounded="0%"
                  type="custom"
                  width="35%"
                />
                <Skeleton
                  height="12px"
                  line={1}
                  rounded="0%"
                  type="custom"
                  width="75%"
                />
              </FlexLayout>
            </FlexLayout>
          </li>
        ) : optionsToShow?.length !== 0 ? (
          optionsToShow.map((item: any, index: any) => {
            return item.group
              ? renderGroupData(item, index)
              : renderSimpleData(item, index);
          })
        ) : (
          <li>
            <div className="inte-select-box__no-options-container">
              <FlexLayout direction="vertical" valign="center">
                <FlexLayout halign="center" spacing="mediumTight">
                  <Search size="20" color="var(--inte-G90)" />
                  <TextStyles utility="inte-select-box__no-options">
                    No result Found!
                  </TextStyles>
                </FlexLayout>
                <div className="inte-select-box__no-options-SearchTerm">
                  Check your search term "{inputValue}"
                </div>
              </FlexLayout>
            </div>
          </li>
        )}
      </ul>
    );
  };
  // Clicking on dropdown list items
  const dropdownItemClickHandler = (item: ObjI, selected = selectedOptions) => {
    const selectingOption = item.label;
    multiSelect
      ? setSelectedOptions((prev: any) =>
          prev.includes(selectingOption)
            ? prev.filter((data: any) => data !== selectingOption)
            : [...prev, selectingOption]
        )
      : setSelectedOptions(
          selected.find((data: any) => data === selectingOption)
            ? []
            : [selectingOption]
        );
    !multiSelect && setDropdownActive(false);
    setInputValue("");
    selectBoxRef.current?.focus();
  };
  /* Clicking on select box block ends*/

  // Clicking on cut button og tag multiSelect
  const tagCrossButtonClickHandler = (data: string[]) => {
    setDropdownActive((prev) => !prev);
    setSelectedOptions((prev: any) =>
      prev.filter((item: any) => item.split(".")[0] !== data[0])
    );
    selectBoxRef.current?.focus();
  };

  // Checking if backspace key is pressed by user
  const inputKeyPressHandler = (e: any) => {
    e.key === "Backspace" &&
      inputValue === "" &&
      selectedOptions.length &&
      setSelectedOptions((prev: any) =>
        prev.filter((item: any, index: any) => index !== prev.length - 1)
      );
  };

  // Resize the input box width
  function resizeInputBox(this: any) {
    this.style.width = this.value.length + "ch";
  }

  // Searching implementation and input box width resize
  const searchHandler = () => {
    // Calling resize input function
    inputBoxRef.current?.addEventListener("input", resizeInputBox);
    searchable && resizeInputBox.call(inputBoxRef.current);
    inputValue.length > 0 ? setisLoading(true) : setisLoading(false);
    // Searching from list
    if (inputValue !== "") {
      setDropdownActive(true);
      const isFound = optionsToShow.some((ele: any) => { return 'group' in ele ? true : false })
      if (isFound) {
        const getData = setTimeout(() => {
          // Making a deep copy of array , so that it does not mutted the main array
          let filteredArray = JSON.parse(JSON.stringify(options));
          filteredArray = filteredArray.filter((item: any) => {
            item.group = item.group.filter((obj: any) =>
              obj.label.toLowerCase().includes(inputValue.toLowerCase())
            );
            return item.group.length > 0;
          });
          setOptionsToShow(filteredArray);
          setisLoading(false);
        }, debounceTimer);
        return () => clearTimeout(getData);
      } else {
        const getData = setTimeout(() => {
          let newOpts = options?.filter((item) => {
            return item.label.toLowerCase().includes(inputValue.toLowerCase());
          });
          setOptionsToShow(newOpts);
          setisLoading(false);
        }, debounceTimer);
        return () => clearTimeout(getData);
      }
    } else {
      setOptionsToShow(options);
    }
  };

  useEffect(() => {
    searchHandler();
  }, [inputValue, selectedOptions]);

  const selectValueChangeHandler = () => {
    scrollWindow();
    let storingSelectedOption: any = [];
    multiSelect &&
      selectedOptions.map((item: any) => {
        let parts = item.split(".")[1];
        storingSelectedOption.push(parts);
      });
    multiSelect && onChange(storingSelectedOption);
  };

  // If Popover container body
  useEffect(() => {
    container === "body" && selectValueChangeHandler();
  }, [container, dropdownActive, selectedOptions, inputValue]);

  // Calling scroll window function
  const scrollWindow = () => {
    if (!selectBoxRef.current || !portalDropdownListRef.current) return;
    const selectBox = selectBoxRef.current.getBoundingClientRect();
    const portalDropdown =
      portalDropdownListRef.current.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    const dropdownWidth = selectBox.width - 2;
    const dropdownLeft = selectBox.left + 1;
    let dropdownTop;

    if (clientHeight - selectBox.bottom > portalDropdown.height) {
      dropdownTop = selectBox.bottom + 3;
    } else {
      dropdownTop = selectBox.top - portalDropdown.height - 3;
    }
    portalDropdownListRef.current.style.width = `${dropdownWidth / 10}rem`;
    portalDropdownListRef.current.style.left = `${dropdownLeft / 10}rem`;
    portalDropdownListRef.current.style.top = `${dropdownTop / 10}rem`;
  };

  const portalDropDownList = (
    <div
      ref={portalDropdownListRef}
      className={`inte-select inte-select--Fixed ${customClass}`}
      style={{
        position: "fixed",
        zIndex: 99,
      }}
    >
      {selectDropdownCard()}
    </div>
  );

  // Getting different states like warning , success
  const getcontrolStates = (controlStates: "Success" | "Warning" | "Error") => {
    switch (controlStates) {
      case "Success":
        return "inte-formElement--Success";
      case "Warning":
        return "inte-formElement--Warning";
      case "Error":
        return "inte-formElement--Error";
      default:
        return "";
    }
  };
  const controlStatesVal = controlStates && getcontrolStates(controlStates);

  // Arrow-Up , Arrow-Down and Enter Key press
  const handleKeyDown = (event: any) => {
    const isFound = optionsToShow.some((ele: any) => { return 'group' in ele ? true : false })
    if (isFound) {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        if (dropdownActive) {
          if (selectedIndex === 0 && selectedGroupIndex - 1 >= 0) {
            setSelectedGroupIndex(selectedGroupIndex - 1);
            setSelectedIndex(
              optionsToShow[selectedGroupIndex - 1].group.length - 1
            );
            dropdownListRef.current?.children[
              selectedGroupIndex - 1
            ].children[1].children[
              optionsToShow[selectedGroupIndex - 1].group.length - 1
            ].scrollIntoView({ behavior: "smooth", block: "nearest" });
          } else {
            if (selectedIndex > 0) {
              setSelectedIndex(selectedIndex - 1);
              dropdownListRef.current?.children[
                selectedGroupIndex
              ].children[1].children[selectedIndex - 1].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
              });
            }
          }
          setIndexSetByKeyPress(true);
        }
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        if (dropdownActive) {
          if (
            selectedIndex ===
            optionsToShow[selectedGroupIndex].group.length - 1
          ) {
            if (selectedGroupIndex < optionsToShow.length - 1) {
              setSelectedGroupIndex(selectedGroupIndex + 1);
              setSelectedIndex(0);
              dropdownListRef.current?.children[
                selectedGroupIndex + 1
              ].children[1].children[0].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
              });
            }
          } else {
            setSelectedIndex(selectedIndex + 1);
            dropdownListRef.current?.children[
              selectedGroupIndex
            ].children[1].children[selectedIndex + 1].scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }
          setIndexSetByKeyPress(true);
        }
      }
      if (event.key === "Enter") {
        if (dropdownActive) {
          dropdownItemClickHandler(
            optionsToShow[selectedGroupIndex].group[selectedIndex]
          );
          !multiSelect && setDropdownActive(false);
          setIndexSetByKeyPress(false);
        }
      }
    } else {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        if (dropdownActive && selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
          dropdownListRef.current?.children[selectedIndex - 1].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
          setIndexSetByKeyPress(true);
        }
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        if (dropdownActive && selectedIndex < optionsToShow.length - 1) {
          setSelectedIndex(selectedIndex + 1);
          dropdownListRef.current?.children[selectedIndex + 1].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
          setIndexSetByKeyPress(true);
        }
      }
      if (event.key === "Enter") {
        if (dropdownActive) {
          dropdownItemClickHandler(optionsToShow[selectedIndex]);
          !multiSelect && setDropdownActive(false);
          setIndexSetByKeyPress(false);
        }
      }
    }
  };

  return (
    <div
      className={`inte-formElement--Wrap ${
        controlStates ? controlStatesVal : ""
      }`}
      aria-expanded={dropdownActive ? "true" : "false"}
    >
      {label && (
        <TextStyles
          utility={
            required ? "inte--Required inte-Label--Text" : "inte-Label--Text"
          }
        >
          {label}
        </TextStyles>
      )}
      <div
        className={`inte-formElemet--Inner  ${
          dropdownActive ? "inte-formElement--Focus" : ""
        }`}
        ref={selectBoxRef}
        data-ellipsis={ellipsis ? "inte--ellipsis" : "inte--Noellipsis"}
        onClick={() => insideSelectClickHandler()}
        tabIndex={tabIndex}
        onKeyDown={handleKeyDown}
      >
        <div
          className={`inte-formElemet--Inner-select inte-formElement inte-select inte-formElemet--Inner-select-Box 
                    ${
                      multiSelect
                        ? "inte-formElemet--Inner-select-multi"
                        : "inte-formElemet--Inner-select-single"
                    } ${disabled ? "inte-select--Disabled" : ""}`}
          ref={customRef}
        >
          {!multiSelect ? (
            <span className="inte__Select--Selected">
              {searchable && (
                <input
                  className={`inte-select-box__input ${
                    disabled ? "inte-select--Disabled" : ""
                  }`}
                  style={{ minWidth: "0.1rem" }}
                  autoComplete="off"
                  onKeyDown={(e) => inputKeyPressHandler(e)}
                  type={"text"}
                  ref={inputBoxRef}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  disabled={disabled}
                />
              )}
              {inputValue === "" ? (
                selectedOptions.length === 0 ? (
                  <span
                    className={`${
                      disabled
                        ? "inte-select--PlaceholderDisabled"
                        : "inte-select-placeholder"
                    }`}
                  >
                    {placeholder}
                  </span>
                ) : (
                  selectedOptions[0]?.split(".")[0]
                )
              ) : (
                !searchable && selectedOptions[0]?.split(".")[0]
              )}
            </span>
          ) : (
            <div
              className={`inte__Select--Selected_tags ${
                disabled
                  ? "inte__Select--Selected_tags inte__Select--Selected_tags--disabled"
                  : ""
              }`}
            >
              {selectedOptions.map((item: any, index: number) => (
                <Tag
                  key={index}
                  destroy={() =>
                    !disabled && tagCrossButtonClickHandler(item.split("."))
                  }
                  children={item.split(".")[0]}
                  disabled={disabled}
                />
              ))}
              <div>
                {searchable && (
                  <input
                    className={`inte-select-box__input ${
                      disabled ? "inte-select--Disabled" : ""
                    }`}
                    style={{ minWidth: "0.1rem" }}
                    autoComplete="off"
                    onKeyDown={(e) => inputKeyPressHandler(e)}
                    type={"text"}
                    ref={inputBoxRef}
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                    disabled={disabled}
                  />
                )}
                {selectedOptions.length === 0 && inputValue.length === 0 && (
                  <span
                    className={`${
                      disabled
                        ? "inte-select--PlaceholderDisabled"
                        : "inte-select-placeholder"
                    }`}
                    onClick={() => setDropdownActive((prev) => !prev)}
                  >
                    {placeholder}
                  </span>
                )}
              </div>
            </div>
          )}
          <div className="inte-select-box__controls">
            {loading && (
              <div className="inte-loading inte-select-loading"></div>
            )}
            {selectedOptions.length > 0 && (
              <button
                className="inte-select-box__input--clear"
                onClick={() => {
                  setSelectedOptions([]);
                  selectBoxRef.current?.focus();
                }}
                style={{
                  visibility: clearable ? "visible" : "hidden",
                }}
                ref={clearBtnRef}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.671143"
                    y="0.666992"
                    width="16.666"
                    height="16.6667"
                    rx="8.33302"
                    fill="#E0E1E3"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.88298 5.87957C6.1664 5.59613 6.62591 5.59613 6.90933 5.87957L9.00362 7.97393L11.0979 5.87957C11.3813 5.59613 11.8408 5.59613 12.1243 5.87957C12.4077 6.163 12.4077 6.62253 12.1243 6.90596L10.03 9.00032L12.1243 11.0947C12.4077 11.3781 12.4077 11.8377 12.1243 12.1211C11.8408 12.4045 11.3813 12.4045 11.0979 12.1211L9.00362 10.0267L6.90933 12.1211C6.62591 12.4045 6.1664 12.4045 5.88298 12.1211C5.59956 11.8377 5.59956 11.3781 5.88298 11.0947L7.97726 9.00032L5.88298 6.90596C5.59956 6.62253 5.59956 6.163 5.88298 5.87957Z"
                    fill="#1C2433"
                  />
                </svg>
              </button>
            )}
            <div className="inte-formElemet__Arrow">
              <ChevronDown
                size="20"
                color={
                  dropdownActive
                    ? "var(--inte-G800)"
                    : `${disabled ? "var(--inte-G40)" : "var(--inte-G90)"}`
                }
              />
            </div>
          </div>
          {dropdownActive
            ? container === "element"
              ? selectDropdownCard()
              : createPortal(portalDropDownList, document.body)
            : null}
        </div>
      </div>
      {!dropdownActive && helperText && (
        <span
          className={`inte-form__itemHelp ${
            helpIcon ? "inte-form__itemHelp--HasHelpIcon" : ""
          }`}
        >
          {helpIcon && <span style={{ display: "flex" }}>{helpIcon}</span>}
          <span
            style={{
              color: `${controlStates === "Error" ? "var(--inte-R800)" : ""}`,
            }}
          >
            {helperText}
          </span>
        </span>
      )}
    </div>
  );
};

export type SelectI = {
  options: Array<ObjI>;
  onChange?: (value: any, obj?: ObjI) => void;
  helpIcon?: React.ReactNode | null;
  placeholder?: string;
  controlStates?: "Success" | "Warning" | "Error";
  disabled?: boolean;
  loading?: boolean;
  ellipsis?: boolean;
  container?: "body" | "element";
  required?: boolean;
  helperText?: string | React.ReactNode;
  label?: string | React.ReactNode;
  multiSelect?: boolean;
  tabIndex?: number;
  searchable?: boolean;
  clearable?: boolean;
  value?: string;
  customClass?: string;
  customRef?: React.RefObject<HTMLDivElement>;
  debounceTimer?: number;
  defaultValue?: any;
};

interface ObjI extends GroupI {
  label: string;
  value: string;
  description?: string | React.ReactNode;
}
interface GroupI {
  group?: ObjI[];
}

export default Select;
