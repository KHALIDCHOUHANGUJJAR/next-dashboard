"use client";
import React from "react";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

const chartDataSets = [
  [
    { month: "January", desktop: 186, mobile: 180 },
    { month: "February", desktop: 305, mobile: 300 },
    { month: "March", desktop: 337, mobile: 120 },
    { month: "April", desktop: 173, mobile: 590 },
    { month: "May", desktop: 209, mobile: 230 },
    { month: "June", desktop: 214, mobile: 140 },
  ],
  [
    { month: "January", desktop: 150, mobile: 60 },
    { month: "February", desktop: 250, mobile: 160 },
    { month: "March", desktop: 180, mobile: 90 },
    { month: "April", desktop: 90, mobile: 170 },
    { month: "May", desktop: 190, mobile: 110 },
    { month: "June", desktop: 200, mobile: 130 },
  ],
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const ChartContainer = ({ children }) => <div>{children}</div>;
const ChartTooltipContent = () => <div>Tooltip Content</div>;

const Page = () => {
  return (
    <div className="flex flex-col gap-16">
      <h1 className="text-3xl font-bold mt-5">WELL COME TO DASHBOARD</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chartDataSets.map((dataSet, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Bar Chart - Multiple {index + 1}</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart width={450} height={300} data={dataSet}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    content={<ChartTooltipContent />}
                  />
                  <Bar
                    dataKey="desktop"
                    fill={chartConfig.desktop.color}
                    radius={4}
                  />
                  <Bar
                    dataKey="mobile"
                    fill={chartConfig.mobile.color}
                    radius={4}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Trending up by 5.2% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
   

<Image src="/Assets/images/Chart.png" alt="description" width={950} height={700} />
<Image src="/Assets/images/Frame 26.png" alt="description" width={950} height={500} />
    </div>
  );
};

export default Page;
