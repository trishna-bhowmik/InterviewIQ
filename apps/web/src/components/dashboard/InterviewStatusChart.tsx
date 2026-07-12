"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Props {
  completed: number;
  scheduled: number;
}

export function InterviewStatusChart({
  completed,
  scheduled,
}: Props) {
  const data = [
    {
      name: "Completed",
      value: completed,
    },
    {
      name: "Scheduled",
      value: scheduled,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#f59e0b",
  ];

  if (completed === 0 && scheduled === 0) {
    return (
      <div className="flex h-[320px] items-center justify-center rounded-2xl bg-white shadow">
        <p className="text-gray-500">
          No interviews available.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">
        Interview Status
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}