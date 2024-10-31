"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/shadcn-ui/chart";

export const description = "A multiple line chart";

const chartData = [
  { month: "มกราคม", รายได้: 22500, ค่าใช้จ่าย: 18000 },
  { month: "กุมภาพันธ์", รายได้: 35000, ค่าใช้จ่าย: 17000 },
  { month: "มีนาคม", รายได้: 32000, ค่าใช้จ่าย: 25000 },
  { month: "เมษายน", รายได้: 38000, ค่าใช้จ่าย: 29500 },
  { month: "พฤษภาคม", รายได้: 21000, ค่าใช้จ่าย: 28000 },
  { month: "มิถุนายน", รายได้: 26000, ค่าใช้จ่าย: 29000 },
  { month: "กรกฎาคม", รายได้: 35000, ค่าใช้จ่าย: 35000 },
  { month: "สิงหาคม", รายได้: 42000, ค่าใช้จ่าย: 32000 },
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
} satisfies ChartConfig;

export default function OverallChart() {
  return (
    <>
      <div className="h-[100px] flex flex-row justify-between">
        <div className="px-6 py-2 rounded-full bg-[hsl(var(--chart-1))] shadow-md h-fit text-white font-bold">ปี 2024 ตั้งแต่เดือน: มกราคม ถึงเดือน: สิงหาคม</div>
        <div className="h-full flex flex-row gap-6">
        <div className="flex flex-col items-end"><span className="w-16 h-2 rounded-2xl bg-[hsl(var(--chart-5))]"></span><p>รายได้</p></div>
          <div className="flex flex-col items-end"><span className="w-16 h-2 rounded-2xl bg-[hsl(var(--chart-3))]"></span><p>ค่าใช้จ่าย</p></div>
        </div>
      </div>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
          className="!w-full !max-w-[1000px] self-center mx-auto"
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          {/* <ChartLegend
            content={<ChartLegendContent verticalAlign="bottom" />}
          /> */}
          <Line
            dataKey="รายได้"
            type="monotone"
            stroke="hsl(var(--chart-5))"
            strokeWidth={4}
            dot={{
              fill: "hsl(var(--chart-5))",
            }}
            activeDot={{
              r: 6,
            }}
          />
          <Line
            dataKey="ค่าใช้จ่าย"
            type="monotone"
            stroke="hsl(var(--chart-3))"
            strokeWidth={4}
            dot={{
              fill: "hsl(var(--chart-3))",
            }}
            activeDot={{
              r: 6,
            }}
          />
        </LineChart>
      </ChartContainer>
    </>
  );
}
