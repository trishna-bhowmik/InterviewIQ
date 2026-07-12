"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Search, SlidersHorizontal } from "lucide-react";

import { useInterviewHistory } from "@/hooks/use-interview-history";
import { useDeleteInterview } from "@/hooks/use-delete-interview";
import { InterviewHistoryCard } from "@/components/interview/interview-history-card";

export default function HistoryPage() {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useInterviewHistory();

  const deleteInterview = useDeleteInterview();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("ALL");
  const [sortOrder, setSortOrder] =
    useState("NEWEST");

  // MUST be before any conditional return
  const filteredInterviews = useMemo(() => {
    if (!data) return [];

    let interviews = [...data.data];

    interviews = interviews.filter((interview: any) =>
      interview.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (statusFilter !== "ALL") {
      interviews = interviews.filter(
        (interview: any) =>
          interview.status === statusFilter
      );
    }

    interviews.sort((a: any, b: any) => {
      if (sortOrder === "NEWEST") {
        return (
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
        );
      }

      return (
        new Date(a.createdAt).getTime() -
        new Date(b.createdAt).getTime()
      );
    });

    return interviews;
  }, [
    data,
    search,
    statusFilter,
    sortOrder,
  ]);

  async function handleDelete(id: string) {
    const ok = window.confirm(
      "Are you sure you want to delete this interview?"
    );

    if (!ok) return;

    try {
      await deleteInterview.mutateAsync(id);

      toast.success(
        "Interview deleted successfully."
      );

      refetch();
    } catch (err) {
      console.error(err);

      toast.error(
        "Failed to delete interview."
      );
    }
  }

  if (isLoading) {
    return (
      <div className="p-8">
        Loading Interview History...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-8 text-red-600">
        Failed to load interview history.
      </div>
    );
  }

  const completedCount = data.data.filter(
    (i: any) => i.status === "COMPLETED"
  ).length;

  const scheduledCount = data.data.filter(
    (i: any) => i.status === "SCHEDULED"
  ).length;

  const scoredInterviews = data.data.filter(
    (i: any) => i.score !== null
  );

  const averageScore =
    scoredInterviews.length > 0
      ? (
          scoredInterviews.reduce(
            (sum: number, i: any) =>
              sum + i.score,
            0
          ) / scoredInterviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <div className="space-y-8 p-8">

      <div>
        <h1 className="text-4xl font-bold text-blue-900">
          Interview History
        </h1>

        <p className="mt-2 text-gray-500">
          View and manage all your interviews.
        </p>
      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-xl border bg-blue-100 p-5 shadow">
          <p className="text-gray-500">
            Total Interviews
          </p>
          <h2 className="mt-2 text-3xl font-bold text-blue-900">
            {data.data.length}
          </h2>
        </div>

        <div className="rounded-xl border bg-blue-100 p-5 shadow">
          <p className="text-gray-500">
            Completed
          </p>
          <h2 className="mt-2 text-3xl font-bold text-blue-900">
            {completedCount}
          </h2>
        </div>

        <div className="rounded-xl border bg-blue-100 p-5 shadow">
          <p className="text-gray-500">
            Scheduled
          </p>
          <h2 className="mt-2 text-3xl font-bold text-blue-900">
            {scheduledCount}
          </h2>
        </div>

        <div className="rounded-xl border bg-blue-100 p-5 shadow">
          <p className="text-gray-500">
            Average Score
          </p>
          <h2 className="mt-2 text-3xl font-bold text-blue-900">
            {averageScore}
          </h2>
        </div>

      </div>

      {/* Search + Filter */}

      <div className="flex flex-col gap-4 rounded-xl border bg-white p-5 shadow md:flex-row md:items-center md:justify-between">

        <div className="relative w-full md:max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search interview..."
            className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-blue-900"
          />

        </div>

        <div className="flex flex-wrap items-center gap-3">

          {[
            "ALL",
            "COMPLETED",
            "SCHEDULED",
          ].map((status) => (

            <button
              key={status}
              onClick={() =>
                setStatusFilter(status)
              }
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                statusFilter === status
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {status === "ALL"
                ? "All"
                : status.charAt(0) +
                  status
                    .slice(1)
                    .toLowerCase()}
            </button>

          ))}

          <div className="flex items-center gap-2">

            <SlidersHorizontal size={18} />

            <select
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(
                  e.target.value
                )
              }
              className="rounded-lg border px-3 py-2"
            >
              <option value="NEWEST">
                Newest
              </option>

              <option value="OLDEST">
                Oldest
              </option>

            </select>

          </div>

        </div>

      </div>

      {/* Interview List */}

      {filteredInterviews.length === 0 ? (

        <div className="rounded-xl border bg-white p-10 text-center shadow">

          <h2 className="text-2xl font-semibold">
            No Interviews Found
          </h2>

          <p className="mt-3 text-gray-500">
            Try changing your search or filters.
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {filteredInterviews.map(
            (interview: any) => (
              <InterviewHistoryCard
                key={interview.id}
                interview={interview}
                onDelete={handleDelete}
              />
            )
          )}

        </div>

      )}

    </div>
  );
}