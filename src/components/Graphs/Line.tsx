import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineCharts({ data, width, height, options }: PieChartsI): JSX.Element {
  return (
    <>
      <Line data={data} options={options} width={width} height={height} />
    </>
  );
}
export interface PieChartsI {
  data: any;
  options: any;
  width?: number;
  height?: number;
  left?: string;
}
export default LineCharts;
