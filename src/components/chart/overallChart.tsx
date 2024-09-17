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
  { month: "January", รายได้: 186, ค่าใช้จ่าย: 80 },
  { month: "February", รายได้: 305, ค่าใช้จ่าย: 200 },
  { month: "March", รายได้: 237, ค่าใช้จ่าย: 120 },
  { month: "April", รายได้: 73, ค่าใช้จ่าย: 190 },
  { month: "May", รายได้: 209, ค่าใช้จ่าย: 130 },
  { month: "June", รายได้: 214, ค่าใช้จ่าย: 250 },
  { month: "July", รายได้: 322, ค่าใช้จ่าย: 302 },
  { month: "August", รายได้: 367, ค่าใช้จ่าย: 350 },
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
        <div>ต้องมีมั้ยนะ</div>
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
