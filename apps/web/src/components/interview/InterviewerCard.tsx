"use client";

import { Bot, Volume2 } from "lucide-react";

interface Props {
  question: string;
  speaking: boolean;
}

export function InterviewerCard({
  question,
  speaking,
}: Props) {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-indigo-900 to-blue-900 p-8 text-white shadow-xl">
      <div className="flex items-center gap-6">
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-full bg-white text-indigo-900 transition ${
            speaking ? "animate-pulse scale-110" : ""
          }`}
        >
          <Bot size={42} />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold">
            AI Interviewer
          </h2>

          <p className="mt-3 text-lg leading-relaxed text-indigo-100">
            {question}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <Volume2 size={18} />

            <span>
              {speaking
                ? "Speaking..."
                : "Ready to ask"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}