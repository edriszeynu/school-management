"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Girls", value: 53 },
  { name: "Boys", value: 47 },
];

const COLORS = ["#C3EBFA", "#FAE27C"];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <h1 className="text-lg font-semibold">Students</h1>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} stroke="none" />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-8">
        {data.map((entry, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[i] }}
            />
            <span className="text-xs text-gray-500">{entry.value}%</span>
            <span className="text-xs font-medium">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountChart;
