"use client";

import Link from "next/link";

import {
  User,
  Mail,
  Calendar,
  FileText,
  Trophy,
  CheckCircle2,
  Target,
  ArrowRight,
  Upload,
  Mic,
  LayoutDashboard,
} from "lucide-react";

import { useProfile } from "@/hooks/use-profile";

export default function ProfilePage() {
  const { data, isLoading, error } =
    useProfile();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-xl">
        Loading Profile...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex h-screen items-center justify-center text-red-600">
        Failed to load profile.
      </div>
    );
  }

  const profile = data.data;

  const initials =
    profile.user.fullName
      ?.split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <div className="min-h-screen px-20 bg-slate-100">

      {/* HERO */}

      <div className="rounded-b-[20px] bg-gradient-to-r from-slate-100 via-blue-200 to-slate-100  px-20 py-12 text-blue-900 shadow-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div className="flex items-center gap-8">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/40 text-4xl font-bold text-blue-900 shadow-lg">

              {initials}

            </div>

            <div>

              <h1 className="text-5xl font-bold">
                {profile.user.fullName}
              </h1>

              <p className="mt-3 flex items-center gap-2 text-blue-900">

                <Mail size={18} />

                {profile.user.email}

              </p>

              <p className="mt-2 flex items-center gap-2 text-blue-900">

                <Calendar size={18} />

                Joined{" "}
                {new Date(
                  profile.user.createdAt
                ).toLocaleDateString()}

              </p>

            </div>

          </div>

          <div className="hidden rounded-2xl bg-black/10 p-6 backdrop-blur md:block">

            <p className="text-sm text-blue-900">
              Profile Completion
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              90%
            </h2>

            <div className="mt-4 h-3 w-56 rounded-full bg-black/20">

              <div className="h-3 w-[90%] rounded-full bg-white" />

            </div>

          </div>

        </div>

      </div>
            {/* MAIN */}

      <div className="mx-auto max-w-7xl p-8">

        {/* Statistics */}

        <div className="grid gap-6 md:grid-cols-4">

          <StatCard
            icon={<Trophy size={28} />}
            title="Total Interviews"
            value={
              profile.stats.totalInterviews
            }
            color="bg-blue-100 text-blue-900"
          />

          <StatCard
            icon={<CheckCircle2 size={28} />}
            title="Completed"
            value={
              profile.stats.completedInterviews
            }
            color="bg-green-100 text-green-700"
          />

          <StatCard
            icon={<Target size={28} />}
            title="Average Score"
            value={`${profile.stats.averageScore.toFixed(
              1
            )} ⭐`}
            color="bg-yellow-100 text-yellow-700"
          />

          <StatCard
            icon={<FileText size={28} />}
            title="Resume"
            value={
              profile.latestResume
                ? "Uploaded"
                : "Not Uploaded"
            }
            color="bg-purple-100 text-purple-700"
          />

        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">

          {/* LEFT COLUMN */}

          <div className="space-y-8 lg:col-span-2">

            {/* Personal Information */}

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="mb-8 text-2xl font-bold">
                Personal Information
              </h2>

              <div className="space-y-6">

                <InfoRow
                  icon={<User size={20} />}
                  label="Full Name"
                  value={profile.user.fullName}
                />

                <InfoRow
                  icon={<Mail size={20} />}
                  label="Email Address"
                  value={profile.user.email}
                />

                <InfoRow
                  icon={<Calendar size={20} />}
                  label="Member Since"
                  value={new Date(
                    profile.user.createdAt
                  ).toLocaleDateString()}
                />

              </div>

            </div>

            {/* Latest Resume */}

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="mb-6 text-2xl font-bold">
                Latest Resume
              </h2>

              {profile.latestResume ? (

                <div className="flex items-center justify-between rounded-2xl border p-6 transition hover:shadow-md">

                  <div className="flex items-center gap-5">

                    <div className="rounded-xl bg-blue-100 p-4">

                      <FileText
                        className="text-blue-900"
                        size={28}
                      />

                    </div>

                    <div>

                      <h3 className="text-lg font-semibold">
                        {
                          profile.latestResume.fileName
                        }
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Uploaded Resume
                      </p>

                    </div>

                  </div>

                </div>

              ) : (

                <div className="rounded-xl border border-dashed p-8 text-center">

                  <p className="text-gray-500">
                    No resume uploaded yet.
                  </p>

                </div>

              )}

            </div>
                        {/* Recent Activity */}

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="mb-6 text-2xl font-bold">
                Activity Overview
              </h2>

              <div className="space-y-5">

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-5">

                  <div>

                    <h3 className="font-semibold">
                      Interviews Completed
                    </h3>

                    <p className="text-sm text-gray-500">
                      Successfully finished AI interviews
                    </p>

                  </div>

                  <span className="text-3xl font-bold text-blue-900">
                    {profile.stats.completedInterviews}
                  </span>

                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-5">

                  <div>

                    <h3 className="font-semibold">
                      Current Average Score
                    </h3>

                    <p className="text-sm text-gray-500">
                      Performance across interviews
                    </p>

                  </div>

                  <span className="text-3xl font-bold text-green-600">
                    {profile.stats.averageScore.toFixed(1)}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="space-y-8">

            {/* Quick Actions */}

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="mb-6 text-2xl font-bold">
                Quick Actions
              </h2>

              <div className="space-y-4">

                <Link
                  href="/resume"
                  className="group flex items-center justify-between rounded-2xl border p-5 transition hover:border-blue-900 hover:bg-blue-50"
                >

                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-blue-100 p-3">

                      <Upload
                        className="text-blue-900"
                        size={22}
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold">
                        Upload Resume
                      </h3>

                      <p className="text-sm text-gray-500">
                        Add a new resume
                      </p>

                    </div>

                  </div>

                  <ArrowRight
                    className="transition group-hover:translate-x-1"
                  />

                </Link>

                <Link
                  href="/interview/create"
                  className="group flex items-center justify-between rounded-2xl border p-5 transition hover:border-blue-900 hover:bg-blue-50"
                >

                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-blue-100 p-3">

                      <Mic
                        className="text-blue-900"
                        size={22}
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold">
                        Create Interview
                      </h3>

                      <p className="text-sm text-gray-500">
                        Generate a new AI interview
                      </p>

                    </div>

                  </div>

                  <ArrowRight
                    className="transition group-hover:translate-x-1"
                  />

                </Link>

                <Link
                  href="/dashboard"
                  className="group flex items-center justify-between rounded-2xl border p-5 transition hover:border-blue-900 hover:bg-blue-50"
                >

                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-blue-100 p-3">

                      <LayoutDashboard
                        className="text-blue-900"
                        size={22}
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold">
                        Dashboard
                      </h3>

                      <p className="text-sm text-gray-500">
                        View your analytics
                      </p>

                    </div>

                  </div>

                  <ArrowRight
                    className="transition group-hover:translate-x-1"
                  />

                </Link>

              </div>

            </div>
                        {/* Performance */}

            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-8 text-white shadow-xl">

              <p className="text-blue-200">
                Performance
              </p>

              <h2 className="mt-2 text-5xl font-bold">
                {profile.stats.averageScore.toFixed(1)}
              </h2>

              <p className="mt-3 text-blue-100">
                Average AI Interview Score
              </p>

              <div className="mt-6 h-3 rounded-full bg-white/20">

                <div
                  className="h-3 rounded-full bg-white"
                  style={{
                    width: `${Math.min(
                      profile.stats.averageScore * 10,
                      100
                    )}%`,
                  }}
                />

              </div>

            </div>

            {/* AI Tip */}

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="mb-4 text-xl font-bold">
                💡 AI Tip
              </h2>

              <p className="leading-7 text-gray-600">
                Practice interviews regularly.
                AI adapts questions based on
                your resume and previous
                performance, helping you improve
                with every session.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: string;
}

function StatCard({
  icon,
  title,
  value,
  color,
}: StatCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div
        className={`mb-5 inline-flex rounded-2xl p-4 ${color}`}
      >
        {icon}
      </div>

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        {value}
      </h2>

    </div>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-center gap-5 rounded-2xl bg-slate-50 p-5">

      <div className="rounded-xl bg-blue-100 p-3 text-blue-900">
        {icon}
      </div>

      <div>

        <p className="text-sm text-gray-500">
          {label}
        </p>

        <h3 className="mt-1 text-lg font-semibold">
          {value}
        </h3>

      </div>

    </div>
  );
}