interface Props {
  current: number;
  total: number;
}

export function ProgressBar({
  current,
  total,
}: Props) {
  const percent = (current / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>
          Question {current} of {total}
        </span>

        <span>{Math.round(percent)}%</span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-blue-900 transition-all duration-500"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </div>
  );
}