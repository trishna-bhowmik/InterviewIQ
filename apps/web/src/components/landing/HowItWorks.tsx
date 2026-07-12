export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Upload Resume",
      description: "Upload your latest resume.",
    },
    {
      number: 2,
      title: "AI Analysis",
      description: "AI understands your skills and experience.",
    },
    {
      number: 3,
      title: "Practice Interview",
      description: "Answer personalized interview questions.",
    },
    {
      number: 4,
      title: "Get Feedback",
      description: "Receive scores and improvement tips.",
    },
  ];

  return (
    <section
  id="how-it-works"
  className="py-24"
>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold">
          How It Works
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Four simple steps to prepare for your interview.
        </p>

        <div className="mt-20 grid gap-10 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 text-2xl font-bold text-white">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}