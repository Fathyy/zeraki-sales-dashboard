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

const PieFinance = ({ data }) => {
  const firstEntity = data[1] || {}; 

  const chartData = [
    { name: "Goal", value: firstEntity.Goal || 0 }, 
    { name: "Actual", value: firstEntity.Actual || 0 }, 
  ];
  return (
<>
      <h6
        style={{
          color: "#717171",
          fontSize: "12px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Zeraki Finance
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
      </>
  );
};

export default PieFinance;
