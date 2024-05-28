import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const BarAnalytics = ({ data }) => {
    const chartData = [
        { name: "Primary", value: data[0]?.Primary || 0 }, 
        { name: "Secondary", value: data[0]?.Secondary || 0 },
        { name: "IGCSE", value: data[0]?.IGCSE || 0 },
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
        Zeraki Analytics signups
      </h6>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          barCategoryGap="5%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="left"
            wrapperStyle={{ fontSize: "10px", paddingBottom: '20px' }} // Adjust this value to change the font size
          />
          <Bar dataKey="Energy" fill={COLORS[0]} name="Emission Levels" />
        </BarChart>
      </ResponsiveContainer>
      </>
  );
};

export default BarAnalytics;
