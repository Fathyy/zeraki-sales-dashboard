import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F"];

const PieTimetable = ({ data }) => {
  const chartData = [
    { name: "Goal", value: data[2]?.Goal || 0 },
    { name: "Actual", value: data[2]?.Actual || 0 },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        marginBottom: "1.5rem",
        padding: "1rem",
        boxShadow: "0.5px 1px 3px 2px rgba(80, 165, 98, 0.5)",
        borderRadius: "0.5rem",
      }}
    >
      <h6
        style={{
          color: "#717171",
          fontSize: "12px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Zeraki Timetable
      </h6>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart >
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="left"
            wrapperStyle={{ fontSize: "10px", paddingBottom: '20px' }} // Adjust this value to change the font size
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieTimetable;
