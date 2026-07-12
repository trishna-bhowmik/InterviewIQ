interface Props {
  evaluation: {
    score: number;
    communication: number;
    technicalAccuracy: number;
    confidence: number;
    strengths: string[];
    improvements: string[];
    feedback: string;
  };
}

export function FeedbackCard({
  evaluation,
}: Props) {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 space-y-4 text-blue-900">
      <h2 className="text-2xl font-bold text-blue-900">
        AI Evaluation
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <strong>Overall Score:</strong>{" "}
          {evaluation.score}/10
        </div>

        <div>
          <strong>Communication:</strong>{" "}
          {evaluation.communication}/10
        </div>

        <div>
          <strong>Technical Accuracy:</strong>{" "}
          {evaluation.technicalAccuracy}/10
        </div>

        <div>
          <strong>Confidence:</strong>{" "}
          {evaluation.confidence}/10
        </div>
      </div>

      <div>
        <h3 className="font-semibold">
          Strengths
        </h3>

        <ul className="list-disc pl-5">
          {evaluation.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">
          Improvements
        </h3>

        <ul className="list-disc pl-5">
          {evaluation.improvements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">
          Feedback
        </h3>

        <p>{evaluation.feedback}</p>
      </div>
    </div>
  );
}