"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { ProgressBar } from "@/components/interview/progress-bar";
import { AnswerBox } from "@/components/interview/answer-box";
import { FeedbackCard } from "@/components/interview/feedback-card";
import { FinalReport } from "@/components/interview/final-report";
import { useInterview } from "@/hooks/use-interview-details";
import { useSubmitAnswer } from "@/hooks/use-answer";
import { SpeakButton } from "@/components/interview/SpeakButton";
import { InterviewerCard } from "@/components/interview/InterviewerCard";



export default function InterviewPage() {
  const params = useParams();
  const interviewId = params.id as string;

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useInterview(interviewId);

  const submitAnswerMutation = useSubmitAnswer();

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answer, setAnswer] = useState("");
  const [speaking, setSpeaking] =
  useState(false);

  const [evaluation, setEvaluation] =
    useState<any>(null);

  const questions = useMemo(() => {
    if (!data?.data?.questions) return [];

    const q = data.data.questions;

    return [
      ...(q.hr ?? []),
      ...(q.coding ?? []),
      ...(q.projects ?? []),
      ...(q.technical ?? []),
      ...(q.behavioral ?? []),
    ];
  }, [data]);

  if (isLoading) {
    return (
      <div className="p-8">
        Loading Interview...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-8 text-red-600">
        Failed to load interview.
      </div>
    );
  }

  // 🎉 Show final report if interview is completed
  if (
    data.data.score !== null &&
    data.data.feedback
  ) {
    return (
      <div className="mx-auto max-w-5xl p-8">
        <FinalReport
          score={data.data.score}
          feedback={data.data.feedback}
        />
      </div>
    );
  }

  const isLastQuestion =
    currentQuestion === questions.length - 1;

  async function handleSubmit() {
    if (!answer.trim()) {
      alert("Please enter an answer.");
      return;
    }

    try {
      const result =
        await submitAnswerMutation.mutateAsync({
          interviewId,
          question: questions[currentQuestion]!,
          answer,
        });

      setEvaluation(result.data.evaluation);
    } catch (err) {
      console.error(err);
      alert("Failed to submit answer.");
    }
  }

  async function handleNext() {
    if (isLastQuestion) {
      await refetch();
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setAnswer("");
    setEvaluation(null);
  }

  return (
  <div className="min-h-screen bg-slate-100">

    {/* Header */}

    <div className="border-b shadow-sm bg-blue-100">

      <div className="mx-auto flex max-w-6xl items-center justify-between p-6 bg-blue-100">

        <div>

          <h1 className="text-3xl font-bold text-blue-900">
            {data.data.title}
          </h1>

          <p className="mt-1 text-gray-500">
            AI Mock Interview
          </p>

        </div>

        <div className="rounded-xl bg-blue-900 px-5 py-3 text-white shadow">

          <p className="text-sm opacity-80">
            Question
          </p>

          <p className="text-2xl font-bold">
            {currentQuestion + 1} / {questions.length}
          </p>

        </div>

      </div>

    </div>

    <div className="mx-auto mt-8 grid max-w-6xl gap-8 px-6 lg:grid-cols-3">

      {/* LEFT */}

      <div className="space-y-6 lg:col-span-2">

        <InterviewerCard
          question={questions[currentQuestion]!}
          speaking={speaking}
        />

        <div className="flex justify-end">

          <SpeakButton
            text={questions[currentQuestion]!}
            onSpeakingChange={setSpeaking}
          />

        </div>

        <AnswerBox
          value={answer}
          onChange={setAnswer}
        />

      </div>

      {/* RIGHT */}

      <div className="space-y-6">

        <div className="rounded-2xl bg-blue-100 p-6 shadow">

          <h3 className="mb-4 text-xl font-semibold text-blue-900">
            Progress
          </h3>

          <ProgressBar
            current={currentQuestion + 1}
            total={questions.length}
          />

          <p className="mt-4 text-sm text-gray-500">

            {questions.length -
              currentQuestion -
              1}{" "}
            questions remaining

          </p>

        </div>

        {!evaluation ? (

          <button
            onClick={handleSubmit}
            disabled={
              submitAnswerMutation.isPending
            }
            className="w-full rounded-xl bg-blue-900 py-4 text-lg font-semibold text-white transition hover:bg-blue-950 disabled:opacity-50"
          >
            {submitAnswerMutation.isPending
              ? "Submitting..."
              : "Submit Answer"}
          </button>

        ) : (

          <>

            <FeedbackCard
              evaluation={evaluation}
            />

            <button
              onClick={handleNext}
              className="w-full rounded-xl bg-blue-900 py-4 text-lg font-semibold text-white transition hover:bg-blue-950"
            >
              {isLastQuestion
                ? "View Final Report"
                : "Next Question"}
            </button>

          </>

        )}

      </div>

    </div>

  </div>
);
}                                                   