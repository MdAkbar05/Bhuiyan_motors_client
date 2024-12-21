import React from "react";
import { useOutletContext } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Sales: 4000, Expenses: 2400 },
  { name: "February", Sales: 3000, Expenses: 1398 },
  { name: "March", Sales: 2000, Expenses: 9800 },
  { name: "April", Sales: 2780, Expenses: 3908 },
  { name: "May", Sales: 1890, Expenses: 4800 },
  { name: "June", Sales: 2390, Expenses: 3800 },
  { name: "July", Sales: 3490, Expenses: 4300 },
];

const Charts = () => {
  const [isNightMode] = useOutletContext();
  return (
    <ResponsiveContainer
      width="33%"
      height={320}
      className={
        isNightMode
          ? "bg-secondaryBlack p-4 rounded-md min-w-60 w-3/12 space-y-4 py-6"
          : "bg-white drop-shadow-md p-4 rounded-md w-3/12 space-y-4 py-6 text-blackBG"
      }
    >
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sales" fill="#8884d8" />
        <Bar dataKey="Expenses" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
