import {
  Brain,
  FileText,
  MessageSquare,
  BarChart3,
} from "lucide-react";

export function Features() {
  return (
    <section
  id="features"
  className="bg-gray-50 py-24"
>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Everything You Need
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Practice smarter with AI-powered interview preparation.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<FileText className="h-10 w-10 text-blue-900" />}
            title="Resume Analysis"
            description="Upload your resume and let AI understand your skills and projects."
          />

          <FeatureCard
            icon={<Brain className="h-10 w-10 text-blue-900" />}
            title="AI Questions"
            description="Generate personalized interview questions."
          />

          <FeatureCard
            icon={<MessageSquare className="h-10 w-10 text-blue-900" />}
            title="Mock Interviews"
            description="Practice realistic HR and technical interviews."
          />

          <FeatureCard
            icon={<BarChart3 className="h-10 w-10 text-blue-900" />}
            title="Detailed Feedback"
            description="Receive AI-powered scores and suggestions."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl">
      {icon}

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </div>
  );
}