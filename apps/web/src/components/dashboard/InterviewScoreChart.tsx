"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Interview {
  id: string;
  title: string;
  score: number | null;
}

interface Props {
  interviews: Interview[];
}

export function InterviewScoreChart({
  interviews,
}: Props) {
  const data = interviews
    .filter((i) => i.score !== null)
    .reverse()
    .map((i, index) => ({
      name: `#${index + 1}`,
      score: i.score,
    }));

  if (data.length === 0) {
    return (
      <div className="flex h-[320px] items-center justify-center rounded-2xl bg-white shadow">
        <p className="text-gray-500">
          Complete an interview to see analytics.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">
        Interview Performance
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis domain={[0, 10]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}