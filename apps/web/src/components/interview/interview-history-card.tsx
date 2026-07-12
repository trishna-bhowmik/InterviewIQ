"use client";

import Link from "next/link";
import {
  Calendar,
  Trophy,
  Briefcase,
  BarChart3,
} from "lucide-react";

interface Props {
  interview: any;
  onDelete: (id: string) => void;
}

export function InterviewHistoryCard({
  interview,
  onDelete,
}: Props) {
  const completed =
    interview.status === "COMPLETED";

  return (
    <div className="rounded-2xl border bg-white p-6 shadow transition hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-semibold">
            {interview.title}
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                completed
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {interview.status}
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {interview.type}
            </span>

            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              {interview.difficulty}
            </span>

          </div>

        </div>

        {interview.score !== null && (
          <div className="text-right">
            <p className="text-sm text-gray-500">
              Score
            </p>

            <p className="text-3xl font-bold text-blue-900">
              {interview.score.toFixed(1)}
            </p>
          </div>
        )}

      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={18} />
          {new Date(
            interview.createdAt
          ).toLocaleDateString()}
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Briefcase size={18} />
          {interview.type}
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <BarChart3 size={18} />
          {interview.difficulty}
        </div>

      </div>

      {completed && interview.score !== null && (
        <div className="mt-5 flex items-center gap-2 text-amber-600">
          <Trophy size={20} />
          Performed
        </div>
      )}

      <div className="mt-8 flex gap-3">

        <Link
          href={`/interview/${interview.id}`}
          className="rounded-lg bg-blue-900 px-5 py-2 text-white hover:bg-slate-900"
        >
          {completed
            ? "View Report"
            : "Start Interview"}
        </Link>

        <button
          onClick={() =>
            onDelete(interview.id)
          }
          className="rounded-lg bg-blue-100 px-5 py-2 text-black hover:bg-blue-150"
        >
          Delete
        </button>

      </div>

    </div>
  );
}