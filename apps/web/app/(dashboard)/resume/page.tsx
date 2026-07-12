"use client";

import { UploadResume } from "@/components/resume/upload-resume";
import { ResumeCard } from "@/components/resume/resume-card";
import { useResumes } from "@/hooks/use-resume";
import { PageContainer } from "@/components/layout/page-container";

export default function ResumePage() {
  const { data, isLoading } = useResumes();

  const resumes = data?.data ?? [];

  return (
    <div className="space-y-8 p-2">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold text-blue-900">
          Resume Manager
        </h1>

        <p className="mt-2 text-gray-500">
          Upload and manage your resumes for AI-powered mock interviews.
        </p>

      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl border bg-blue-100 p-6 shadow">
          <p className="text-gray-500">
            Total Resumes
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {resumes.length}
          </h2>
        </div>

        <div className="rounded-xl border bg-blue-100 p-6 shadow">
          <p className="text-gray-500">
            PDF Uploaded
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-900">
            {resumes.length}
          </h2>
        </div>

        <div className="rounded-xl border bg-blue-100 p-6 shadow">
          <p className="text-gray-500">
            AI Ready
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-900">
            {resumes.length}
          </h2>
        </div>

      </div>

      <UploadResume />

      <div>

        <h2 className="mb-6 text-2xl font-bold">
          Uploaded Resumes
        </h2>

        {isLoading ? (

          <p>Loading...</p>

        ) : resumes.length === 0 ? (

          <div className="rounded-xl border bg-white p-10 text-center shadow">

            <h3 className="text-xl font-semibold">
              No resumes uploaded
            </h3>

            <p className="mt-2 text-gray-500">
              Upload your first resume to generate AI interviews.
            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {resumes.map((resume) => (

              <ResumeCard
                key={resume.id}
                resume={resume}
              />

            ))}

          </div>

        )}

      </div>

    </div>
    
  );
}