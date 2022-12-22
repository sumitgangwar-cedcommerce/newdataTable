/* eslint-disable @typescript-eslint/no-explicit-any */
import { Steps } from "antd";
import React from "react";
import "./StepWizard.css";
const { Step } = Steps;
const StepWizard: React.FC<StepI> = ({
  current,
  data,
  direction,
  initial,
  // responsive,
  status,
  onChange,
  className,
}: StepI) => {
  return (
    <div
      className={`inte__stepwizard ${
        current == data.length && "inte__stepwizard--Completed"
      }`}
    >
      <Steps
        current={current}
        direction={direction}
        initial={initial}
        labelPlacement={"vertical"}
        responsive={false}
        status={status}
        onChange={onChange}
        className={className}
      >
        {data?.map((items: any, index: number) => {
          return (
            <Step
              key={index}
              title={items.title}
              description={items.description}
              icon={items.icon}
              disabled={items.disabled}
              status={items.status}
              subTitle={items.subTitle}
            />
          );
        })}
      </Steps>
    </div>
  );
};
export interface StepI {
  status?: "wait" | "process" | "finish" | "error";
  className?: string;
  current?: number;
  direction?: "horizontal" | "vertical";
  initial?: number;
  onChange?: (() => void) | any;
  data?: any;
}
export default StepWizard;
