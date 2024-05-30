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

const PieAnalytics = ({ data }) => {
  const firstEntity = data[0] || {};

  const chartData = [
    { name: "Goal signups", value: firstEntity.Goal || 0 },
    { name: "Actual signups", value: firstEntity.Actual || 0 },
  ];

  return (
    <div style={{ height: 200, width: 200 }}>
      <h6
        style={{
          color: "#717171",
          fontSize: "12px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Zeraki Analytics
      </h6>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={70}
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
              wrapperStyle={{ fontSize: "10px", paddingBottom: "20px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
  );
};

export default PieAnalytics;
