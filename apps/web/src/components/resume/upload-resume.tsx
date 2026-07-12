"use client";

import { useRef } from "react";
import { UploadCloud } from "lucide-react";
import { useUploadResume } from "@/hooks/use-resume";

export function UploadResume() {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const uploadMutation =
    useUploadResume();

  const handleSelect = () => {
    inputRef.current?.click();
  };

  const handleFile = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    uploadMutation.mutate(file);
  };

  return (
    <div className="rounded-2xl border-2 border-dashed border-blue-300 bg-white p-10 text-center shadow transition hover:border-blue-600">

      <UploadCloud
        size={56}
        className="mx-auto text-blue-900"
      />

      <h2 className="mt-5 text-3xl font-bold">
        Upload Resume
      </h2>

      <p className="mt-3 text-gray-500">
        Upload your PDF resume and let AI generate personalized interview questions.
      </p>

      <button
        onClick={handleSelect}
        disabled={uploadMutation.isPending}
        className="mt-8 rounded-xl bg-blue-900 px-8 py-3 font-semibold text-white transition hover:bg-slate-900 disabled:opacity-50"
      >
        {uploadMutation.isPending
          ? "Uploading..."
          : "Browse Files"}
      </button>

      <p className="mt-4 text-sm text-gray-400">
        PDF only • Max 5 MB
      </p>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        hidden
        onChange={handleFile}
      />

    </div>
  );
}