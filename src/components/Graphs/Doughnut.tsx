/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
function DoughnutCharts({ data, width, height }: DoughnutChartsI): JSX.Element {
  return (
    <>
      <Doughnut data={data} width={width} height={height} />
    </>
  );
}
export interface DoughnutChartsI {
  data: any;
  width?: number;
  height?: number;
}
export default DoughnutCharts;
