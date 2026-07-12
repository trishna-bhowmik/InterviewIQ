import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  color:
    | "blue"
    | "green"
    | "amber"
    | "purple";
}

export function StatCard({
  title,
  value,
  icon,
  color,
}: StatCardProps) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    amber: "bg-amber-100 text-amber-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`mb-5 inline-flex rounded-xl p-3 ${colors[color]}`}
      >
        {icon}
      </div>

      <h3 className="text-sm text-gray-500">
        {title}
      </h3>

      <p className="mt-2 text-4xl font-bold">
        {value}
      </p>
    </div>
  );
}