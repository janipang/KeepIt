"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/shadcn-ui/chart";

export const description = "ภาพรวมรายรับและรายจ่าย";

const chartData = [
  { month: "มกราคม", รายได้: 186, ค่าใช้จ่าย: 80, กำไร: 106 },
  { month: "กุมภาพันธ์", รายได้: 305, ค่าใช้จ่าย: 200, กำไร: 105 },
  { month: "มีนาคม", รายได้: 237, ค่าใช้จ่าย: 120, กำไร: 117 },
  { month: "เมษายน", รายได้: 73, ค่าใช้จ่าย: 190, กำไร: -117 },
  { month: "พฤษภาคม", รายได้: 209, ค่าใช้จ่าย: 130, กำไร: 79 },
  { month: "มิถุนายน", รายได้: 214, ค่าใช้จ่าย: 250, กำไร: -36 },
  { month: "กรกฎาคม", รายได้: 322, ค่าใช้จ่าย: 302, กำไร: 20 },
  { month: "สิงหาคม", รายได้: 367, ค่าใช้จ่าย: 350, กำไร: 17 },
];

const chartConfig = {
  รายได้: {
    label: "รายได้",
    color: "hsl(var(--chart-1))",
  },
  ค่าใช้จ่าย: {
    label: "ค่าใช้จ่าย",
    color: "hsl(var(--chart-2))",
  },
  กำไร: {
    label: "กำไร",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function OverallChart() {
  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">ภาพรวมรายรับและรายจ่าย</h2>
        
      </div>
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickFormatter={(value) => `${value} บาท`} />
            <ChartTooltip cursor={{ stroke: "gray", strokeDasharray: "3 3" }} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent verticalAlign="bottom" />} />
            <Line
              dataKey="รายได้"
              type="monotone"
              stroke="hsl(var(--chart-1))"
              strokeWidth={3}
              dot={{
                fill: "hsl(var(--chart-1))",
              }}
              activeDot={{
                r: 6,
              }}
              isAnimationActive={true}
            />
            <Line
              dataKey="ค่าใช้จ่าย"
              type="monotone"
              stroke="hsl(var(--chart-2))"
              strokeWidth={3}
              dot={{
                fill: "hsl(var(--chart-2))",
              }}
              activeDot={{
                r: 6,
              }}
              isAnimationActive={true}
            />
            <Line
              dataKey="กำไร"
              type="monotone"
              stroke="hsl(var(--chart-3))"
              strokeWidth={3}
              dot={{
                fill: "hsl(var(--chart-3))",
              }}
              activeDot={{
                r: 6,
              }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </>
  );
}
