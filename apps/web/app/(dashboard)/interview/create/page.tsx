"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  Sparkles,
  Clock,
  Briefcase,
} from "lucide-react";
import { toast } from "sonner";

import { useResumes } from "@/hooks/use-resume";
import { useCreateInterview } from "@/hooks/use-create-interview";

export default function CreateInterviewPage() {
  const router = useRouter();

  const { data, isLoading } =
    useResumes();

  const createInterview =
    useCreateInterview();

  const resumes = data?.data ?? [];

  const [selectedResume, setSelectedResume] =
    useState("");

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [type, setType] = useState<
    | "HR"
    | "TECHNICAL"
    | "DSA"
    | "SYSTEM_DESIGN"
    | "BEHAVIORAL"
  >("TECHNICAL");

  const [difficulty, setDifficulty] =
    useState<
      "EASY" | "MEDIUM" | "HARD"
    >("MEDIUM");

  const [duration, setDuration] =
    useState(30);

  const interviewTypes = [
    {
      icon: "👨‍💼",
      label: "HR",
      value: "HR",
    },
    {
      icon: "💻",
      label: "Technical",
      value: "TECHNICAL",
    },
    {
      icon: "🧠",
      label: "DSA",
      value: "DSA",
    },
    {
      icon: "🏗️",
      label: "System Design",
      value: "SYSTEM_DESIGN",
    },
    {
      icon: "🤝",
      label: "Behavioral",
      value: "BEHAVIORAL",
    },
  ];

  const difficulties = [
    "EASY",
    "MEDIUM",
    "HARD",
  ];

  const durations = [
    15,
    30,
    45,
    60,
  ];

  async function handleCreate() {
    if (!selectedResume) {
      toast.error(
        "Please select a resume."
      );
      return;
    }

    if (!title.trim()) {
      toast.error(
        "Please enter a job title."
      );
      return;
    }
        try {
      const response =
        await createInterview.mutateAsync({
          resumeId: selectedResume,
          title,
          description,
          type,
          difficulty,
          duration,
        });

      toast.success(
        "Interview created successfully!"
      );

      router.push(
        `/interview/${response.data.id}`
      );
    } catch (err) {
      console.error(err);

      toast.error(
        "Failed to create interview."
      );
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-lg">
        Loading resumes...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-8">

      {/* Hero */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 p-10 text-white shadow-xl">

        <div className="flex items-center gap-4">

          

          <div>

            <h1 className="text-4xl font-bold">
              Create AI Interview
            </h1>

            <p className="mt-2 text-blue-100">
              Generate personalized interview
              questions based on your resume.
            </p>

          </div>

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {/* LEFT */}

        <div className="space-y-8 lg:col-span-2">

          {/* Resume */}

          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-6 text-2xl font-bold">
              Select Resume
            </h2>

            {resumes.length === 0 ? (

              <div className="rounded-xl border border-dashed p-10 text-center">

                <p className="text-gray-500">
                  No resume uploaded.
                </p>

              </div>

            ) : (

              <div className="grid gap-4 md:grid-cols-2">

                {resumes.map(
                  (resume: any) => (

                    <button
                      key={resume.id}
                      type="button"
                      onClick={() =>
                        setSelectedResume(
                          resume.id
                        )
                      }
                                            className={`rounded-2xl border p-5 text-left transition-all ${
                        selectedResume ===
                        resume.id
                          ? "border-blue-900 bg-blue-50 ring-2 ring-blue-900"
                          : "hover:border-blue-400 hover:shadow-md"
                      }`}
                    >

                      <div className="flex items-center gap-4">

                        <div className="rounded-xl bg-blue-100 p-3">

                          <FileText
                            className="text-blue-900"
                            size={24}
                          />

                        </div>

                        <div className="flex-1">

                          <h3 className="font-semibold">
                            {resume.originalName}
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Uploaded{" "}
                            {new Date(
                              resume.createdAt
                            ).toLocaleDateString()}
                          </p>

                        </div>

                      </div>

                    </button>

                  )
                )}

              </div>

            )}

          </div>

          {/* Job Details */}

          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">

              <Briefcase size={24} />

              Job Details

            </h2>

            <div className="space-y-6">

              <div>

                <label className="mb-2 block font-medium">
                  Target Role
                </label>

                <input
                  value={title}
                  onChange={(e) =>
                    setTitle(
                      e.target.value
                    )
                  }
                  placeholder="Backend Developer"
                  className="w-full rounded-xl border p-4 outline-none transition focus:border-blue-900"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium">
                  Job Description
                </label>

                <textarea
                  rows={6}
                  value={description}
                  onChange={(e) =>
                    setDescription(
                      e.target.value
                    )
                  }
                  placeholder="Paste the job description..."
                  className="w-full rounded-xl border p-4 outline-none transition focus:border-blue-900"
                />

              </div>

            </div>

          </div>

          {/* Interview Settings */}

          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-6 text-2xl font-bold">
              Interview Settings
            </h2>
                        {/* Interview Type */}

            <h3 className="mb-3 font-semibold">
              Interview Type
            </h3>

            <div className="grid gap-3 md:grid-cols-2">

              {interviewTypes.map((item) => (

                <button
                  key={item.value}
                  type="button"
                  onClick={() =>
                    setType(item.value as any)
                  }
                  className={`rounded-xl border p-5 text-left transition-all ${
                    type === item.value
                      ? "border-blue-900 bg-blue-900 text-white shadow-lg"
                      : "hover:border-blue-400 hover:shadow-md"
                  }`}
                >

                  <p className="text-3xl">
                    {item.icon}
                  </p>

                  <p className="mt-3 font-semibold">
                    {item.label}
                  </p>

                </button>

              ))}

            </div>

            {/* Difficulty */}

            <h3 className="mb-3 mt-8 font-semibold">
              Difficulty
            </h3>

            <div className="flex flex-wrap gap-3">

              {difficulties.map((item) => (

                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setDifficulty(item as any)
                  }
                  className={`rounded-full px-6 py-3 font-medium transition ${
                    difficulty === item
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

            {/* Duration */}

            <h3 className="mb-3 mt-8 flex items-center gap-2 font-semibold">

              <Clock size={18} />

              Duration

            </h3>

            <div className="flex flex-wrap gap-3">

              {durations.map((time) => (

                <button
                  key={time}
                  type="button"
                  onClick={() =>
                    setDuration(time)
                  }
                  className={`rounded-xl px-6 py-3 transition ${
                    duration === time
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {time} mins
                </button>

              ))}

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div>

          <div className="sticky top-8 rounded-2xl bg-white p-6 shadow">

            <h2 className="text-2xl font-bold">
              Interview Summary
            </h2>

            <div className="mt-6 space-y-5">

              <SummaryItem
                label="Resume"
                value={
                  resumes.find(
                    (r: any) =>
                      r.id ===
                      selectedResume
                  )?.originalName ??
                  "Not Selected"
                }
              />

              <SummaryItem
                label="Role"
                value={
                  title ||
                  "Not Specified"
                }
              />

              <SummaryItem
                label="Type"
                value={type}
              />
                            <SummaryItem
                label="Difficulty"
                value={difficulty}
              />

              <SummaryItem
                label="Duration"
                value={`${duration} mins`}
              />

              <SummaryItem
                label="Description"
                value={
                  description
                    ? "Added"
                    : "Not Added"
                }
              />

            </div>

            <div className="mt-8 rounded-xl bg-slate-50 p-5">

              <h3 className="font-semibold">
                AI Will Generate
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">

                <li>✓ Personalized Questions</li>

                <li>✓ Technical Assessment</li>

                <li>✓ HR Questions</li>

                <li>✓ Resume Based Questions</li>

                <li>✓ Instant AI Feedback</li>

              </ul>

            </div>

            <button
              onClick={handleCreate}
              disabled={createInterview.isPending}
              className="mt-8 w-full rounded-xl bg-blue-900 py-4 text-lg font-semibold text-white transition hover:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {createInterview.isPending
                ? "Generating Interview..."
                : "🚀 Generate Interview"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

interface SummaryItemProps {
  label: string;
  value: string;
}

function SummaryItem({
  label,
  value,
}: SummaryItemProps) {
  return (
    <div className="flex items-center justify-between border-b pb-3">

      <span className="text-gray-500">
        {label}
      </span>

      <span className="max-w-[170px] truncate text-right font-semibold">
        {value}
      </span>

    </div>
  );
}