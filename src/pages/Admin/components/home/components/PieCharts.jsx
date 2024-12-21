import React from "react";
import { useOutletContext } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Dhaka", value: 400 },
  { name: "Chittagong", value: 300 },
  { name: "Comilla", value: 300 },
  { name: "Barishal", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieCharts = () => {
  const [isNightMode] = useOutletContext();
  return (
    <ResponsiveContainer
      width="30%"
      height={320}
      className={
        isNightMode
          ? "bg-secondaryBlack p-4 rounded-md min-w-60 w-3/12 space-y-4 py-6"
          : "bg-white drop-shadow-md p-4 rounded-md w-3/12 space-y-4 py-6 text-blackBG"
      }
    >
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieCharts;
