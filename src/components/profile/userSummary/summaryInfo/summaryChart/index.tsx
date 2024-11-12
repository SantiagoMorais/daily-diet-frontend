import { ISummary } from "@functions/handleUserSummary";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartBreakPoints, summaryListItemsDetails } from "utils/arrays";

export const SummaryChart = ({ summary }: ISummary) => {
  const [chartWidth, setChartWidth] = useState<number | null>(null);
  const [chartHeight, setChartHeight] = useState<number | null>(null);
  const data = summaryListItemsDetails.map((item) => ({
    name: item.titleAbreviation,
    value: summary[item.type as keyof ISummary["summary"]],
  }));

  useEffect(() => {
    const handleChartWidth = () => {
      const selectedBreakPoint =
        chartBreakPoints.find(
          (breakPoint) => window.innerWidth > breakPoint.windowInnerWidth,
        ) || chartBreakPoints[chartBreakPoints.length - 1];

      setChartWidth(selectedBreakPoint.screenWidth);
      setChartHeight(selectedBreakPoint.screenHeight)
    };

    handleChartWidth();
    window.addEventListener("resize", handleChartWidth);
    return () => window.removeEventListener("resize", handleChartWidth);
  }, []);

  return (
    <BarChart data={data} width={chartWidth ? chartWidth : 250} height={chartHeight ? chartHeight : 250}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#810000" />
    </BarChart>
  );
};
