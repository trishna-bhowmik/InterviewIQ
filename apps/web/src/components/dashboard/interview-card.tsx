interface Props {
  title: string;
  status: string;
  score: number | null;
}

export function InterviewCard({
  title,
  status,
  score,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <p className="mt-2">
        Status: {status}
      </p>

      <p>
        Score: {score ?? "--"}
      </p>
    </div>
  );
}