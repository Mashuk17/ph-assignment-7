"use client";
import { TimelineContext } from "@/context/TimelineProvider";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const { timeline } = useContext(TimelineContext);

  const callCount = timeline.filter((t) => t.type == "Call").length;
  const textCount = timeline.filter((t) => t.type == "Text").length;
  const videoCount = timeline.filter((t) => t.type == "Video").length;

  console.log(callCount, textCount, videoCount);

  const data = [
    { name: "Call", value: callCount, fill: "#3b82f6" },
    { name: "Text", value: textCount, fill: "#22c55e" },
    { name: "Video", value: videoCount, fill: "#f59e0b" },
  ];

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b"];

  return (
    <div className="py-10 bg-base-200 ">
      <div className="w-10/12 mx-auto">
        <h1 className="text-2xl font-bold mb-6">Friendship Analytics</h1>
        <div className="bg-white flex justify-center items-center">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={150}
              dataKey="value"
              label
            ></Pie>
            <Tooltip></Tooltip>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
