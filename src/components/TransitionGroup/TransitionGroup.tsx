/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ArrowLeft, ArrowRight, ChevronRight } from "react-feather";
import "./TransitionGroup.css";
import Badge from "../Badge/Badge";

const TransitionGroup = () => {
  const [activeMenu, setActiveMenu] = useState<string>("main");
  const [menuHeight, setMenuHeight] = useState<any>(null);
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);
  const calcHeight = (el: any) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const TransitionGroupItem = (props: any) => {
    return (
      <div
        className={`menu-item ${props.customClass}`}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <>{props.children}</>
        {props.navArrow}
      </div>
    );
  };

  return (
    <>
      <p>
        <Badge>{activeMenu}</Badge>
      </p>
      <div
        className="dropdown"
        style={{ height: menuHeight }}
        ref={dropdownRef}
      >
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="transition"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <TransitionGroupItem customClass="back-nav">
              Browse and Select Category
            </TransitionGroupItem>

            <TransitionGroupItem
              navArrow={<ArrowRight />}
              goToMenu="Technologies"
            >
              Technologies
            </TransitionGroupItem>
            <TransitionGroupItem navArrow={<ArrowRight />} goToMenu="Animals">
              Animals
            </TransitionGroupItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "Technologies"}
          timeout={500}
          classNames="transition"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <TransitionGroupItem goToMenu="main" customClass="back-nav">
              <span className="icon-button">
                <ArrowLeft />
              </span>
              <h2>Technologies</h2>
            </TransitionGroupItem>
            <TransitionGroupItem goToMenu="HTML" navArrow={<ChevronRight />}>
              HTML
            </TransitionGroupItem>
            <TransitionGroupItem>CSS</TransitionGroupItem>
            <TransitionGroupItem>JavaScript</TransitionGroupItem>
            <TransitionGroupItem>Awesome!</TransitionGroupItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "Animals"}
          timeout={500}
          classNames="transition"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <TransitionGroupItem customClass="back-nav" goToMenu="main">
              <span className="icon-button">{<ArrowLeft />}</span>
              <h2>Animals</h2>
            </TransitionGroupItem>

            <TransitionGroupItem>Kangaroo</TransitionGroupItem>
            <TransitionGroupItem>Frog</TransitionGroupItem>
            <TransitionGroupItem>Horse?</TransitionGroupItem>
            <TransitionGroupItem>Hedgehog</TransitionGroupItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "HTML"}
          timeout={500}
          classNames="transition"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <TransitionGroupItem customClass="back-nav" goToMenu="Technologies">
              <span className="icon-button">{<ArrowLeft />}</span>
              <h2>HTML</h2>
            </TransitionGroupItem>
            <TransitionGroupItem>{"<h1>Hello</h1>"}</TransitionGroupItem>
            <TransitionGroupItem>{"<p>Hello</p>"}</TransitionGroupItem>
            <TransitionGroupItem>{"<div>Hello</div>"}</TransitionGroupItem>
            <TransitionGroupItem>{"<span>Hello</span>"}</TransitionGroupItem>
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default TransitionGroup;
