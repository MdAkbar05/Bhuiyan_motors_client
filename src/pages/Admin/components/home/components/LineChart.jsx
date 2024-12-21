import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
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

const LineCharts = () => {
  return (
    <ResponsiveContainer width="30%" height={320}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Sales"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="Expenses"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
