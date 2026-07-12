"use client";

import Link from "next/link";
import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  Plus,
  Star,
  Trash2,
  Upload,
  ArrowRight,
} from "lucide-react";

import { toast } from "sonner";
import { useDashboard } from "@/hooks/use-dashboard";
import { useDeleteInterview } from "@/hooks/use-delete-interview";
import { DeleteInterviewDialog } from "@/components/common/DeleteInterviewDialog";
import { InterviewScoreChart } from "@/components/dashboard/InterviewScoreChart";
import { InterviewStatusChart } from "@/components/dashboard/InterviewStatusChart";


export default function DashboardPage() {
  const { data, isLoading, error } = useDashboard();
  const deleteInterview = useDeleteInterview();

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-lg text-gray-500">
          Loading dashboard...
        </p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-red-600">
        Failed to load dashboard.
      </div>
    );
  }

  const dashboard = data.data;

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      {/* Hero */}

      <div className="mb-10 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-white shadow-lg">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

          <div>

            <h1 className="text-4xl font-bold">
              Welcome Back !
            </h1>

            <p className="mt-2 text-blue-100">
              Continue improving your interview skills.
            </p>

          </div>

          <Link
            href="/interview/create"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-900 transition hover:scale-105"
          >
            <Plus size={18} />
            Create Interview
          </Link>

        </div>

      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          icon={<CalendarClock />}
          title="Total Interviews"
          value={dashboard.totalInterviews}
          color="blue"
        />

        <StatCard
          icon={<CheckCircle2 />}
          title="Completed"
          value={dashboard.completedInterviews}
          color="green"
        />

        <StatCard
          icon={<Clock3 />}
          title="Scheduled"
          value={dashboard.scheduledInterviews}
          color="amber"
        />

        <StatCard
          icon={<Star />}
          title="Average Score"
          value={dashboard.averageScore.toFixed(1)}
          color="purple"
        />

      </div>

      {/* Quick Actions */}

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <Link
          href="/resume"
          className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl"
        >
          <Upload className="mb-4 text-blue-600" />

          <h2 className="text-xl font-bold">
            Upload Resume
          </h2>

          <p className="mt-2 text-gray-500">
            Upload a new resume for AI analysis.
          </p>

        </Link>

        <Link
          href="/interview/create"
          className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl"
        >
          <Plus className="mb-4 text-blue-600" />

          <h2 className="text-xl font-bold">
            New Interview
          </h2>

          <p className="mt-2 text-gray-500">
            Generate a new AI interview.
          </p>

        </Link>

      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">

  <InterviewScoreChart
    interviews={dashboard.recentInterviews}
  />

  <InterviewStatusChart
    completed={dashboard.completedInterviews}
    scheduled={dashboard.scheduledInterviews}
  />

</div>

      {/* Recent */}

      <div className="mt-10 rounded-2xl bg-white p-6 shadow">

        <h2 className="mb-6 text-2xl font-bold">
          Recent Interviews
        </h2>

        {dashboard.recentInterviews.length === 0 ? (
          <div className="rounded-xl border border-dashed p-10 text-center text-gray-500">
            No interviews yet.
          </div>
        ) : (
          <div className="space-y-4">

            {dashboard.recentInterviews.map(
              (interview: any) => (
                <div
                  key={interview.id}
                  className="flex flex-col justify-between gap-4 rounded-xl border p-5 transition hover:shadow-md md:flex-row md:items-center"
                >
                  <div>

                    <h3 className="text-lg font-semibold">
                      {interview.title}
                    </h3>

                    <div className="mt-3 flex gap-3">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          interview.status ===
                          "COMPLETED"
                            ? "bg-blue-100 text-blue-900"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {interview.status}
                      </span>

                      {interview.score && (
                        <span className="font-semibold">
                          ⭐{" "}
                          {interview.score.toFixed(1)}
                        </span>
                      )}

                    </div>

                  </div>

                  <div className="flex gap-3">

                    <Link
                      href={`/interview/${interview.id}`}
                      className={`inline-flex items-center gap-2 rounded-lg px-5 py-2 text-white ${
                        interview.status ===
                        "COMPLETED"
                          ? "bg-blue-900"
                          : "bg-blue-600"
                      }`}
                    >
                      {interview.status ===
                      "COMPLETED"
                        ? "View Report"
                        : "Start"}

                      <ArrowRight size={16} />

                    </Link>

                    <DeleteInterviewDialog
  onConfirm={async () => {
    try {
      await deleteInterview.mutateAsync(
        interview.id
      );

      toast.success(
        "Interview deleted successfully."
      );
    } catch {
      toast.error(
        "Failed to delete interview."
      );
    }
  }}
>
  <button className="rounded-lg bg-blue-100 p-3 text-blue-900 transition hover:bg-blue-200">
    <Trash2 size={18} />
  </button>
</DeleteInterviewDialog>

                  </div>

                </div>
              )
            )}

          </div>
        )}

      </div>

    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  color:
    | "blue"
    | "green"
    | "amber"
    | "purple";
}) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    amber: "bg-amber-100 text-amber-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl">

      <div
        className={`mb-5 inline-flex rounded-xl p-3 ${colors[color]}`}
      >
        {icon}
      </div>

      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="mt-2 text-4xl font-bold">
        {value}
      </p>

    </div>
  );
}