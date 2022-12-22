import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
function PieCharts({ data, width, height }: PieChartsI): JSX.Element {
  return (
    <>
      <Pie data={data} width={width} height={height} />
    </>
  );
}
export interface PieChartsI {
  data: any;
  width?: number;
  height?: number;
}
export default PieCharts;
