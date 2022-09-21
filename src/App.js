import React from "react";
import { Chart } from "react-google-charts";
import "./style.css";

export const data = [
  ["Task", "Hours per Day"],
  ["React", 11],
  ["Javascript", 2],
  ["Node", 2],
  ["HYML", 2],
  ["CSS", 7],
];

export const options = {
  title: "Gráfico de Pizza 3d",
  is3D: true,
};

export const dataTwo = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2020", 1000, 400, 200],
  ["2021", 1170, 460, 250],
  ["2022", 660, 1120, 300],
  ["2023", 1030, 540, 350],
];

export const optionsTwo = {
  chart: {
    title: "Gráfico de Barras",
    subtitle: "Sales, Expenses, and Profit: 2020-2022",
  },
};
export const optionsThree = {
  title: "Age vs. Weight comparison",
  hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
  vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
  legend: "none",
};

export const dataThree = [
  ["Age", "Weight"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7],
];

function App() {
  return (
    <>
      <div className="div">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"70%"}
          height={"300px"}
        />

        <Chart
          chartType="Bar"
          width="70%"
          height="300px"
          data={dataTwo}
          options={optionsTwo}
        />

        <Chart
          chartType="ScatterChart"
          data={dataThree}
          options={optionsThree}
          width="70%"
          height="300px"
          legendToggle
        />
      </div>
    </>
  );
}

export default App;
