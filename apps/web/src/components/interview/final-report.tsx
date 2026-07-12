interface Props {
  score: number;
  feedback: string;
}

export function FinalReport({
  score,
  feedback,
}: Props) {
  let parsedFeedback: {
    summary?: string;
    strengths?: string[];
    weaknesses?: string[];
    recommendations?: string[];
  } = {};

  try {
    parsedFeedback = JSON.parse(feedback);
  } catch {
    parsedFeedback = {};
  }

  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 text-blue-900 p-8 shadow">
      <h1 className="mb-6 text-3xl font-bold text-blue-900">
        🎉 Interview Completed
      </h1>

      <div className="mb-6 text-2xl font-semibold">
        Overall Score: {score.toFixed(1)}/10
      </div>

      {parsedFeedback.summary && (
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">
            Summary
          </h2>

          <p>{parsedFeedback.summary}</p>
        </div>
      )}

      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">
          Strengths
        </h2>

        <ul className="list-disc pl-5">
          {(parsedFeedback.strengths ?? []).map(
            (item) => (
              <li key={item}>{item}</li>
            )
          )}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">
          Weaknesses
        </h2>

        <ul className="list-disc pl-5">
          {(parsedFeedback.weaknesses ?? []).map(
            (item) => (
              <li key={item}>{item}</li>
            )
          )}
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-xl font-semibold">
          Recommendations
        </h2>

        <ul className="list-disc pl-5">
          {(parsedFeedback.recommendations ?? []).map(
            (item) => (
              <li key={item}>{item}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}