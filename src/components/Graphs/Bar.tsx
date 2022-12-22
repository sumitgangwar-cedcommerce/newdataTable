/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ data, options, height, width }: BarChartI): JSX.Element {
  return (
    <>
      <Bar data={data} options={options} height={height} width={width} />
    </>
  );
}
export interface BarChartI {
  data?: any;
  options?: any;
  height?: number;
  width?: number;
}
export default BarChart;
