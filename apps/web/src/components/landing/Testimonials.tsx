import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "TCS",
      text: "The AI feedback helped me identify my weak areas before placements.",
    },
    {
      name: "Rahul Verma",
      role: "SDE Intern",
      company: "Infosys",
      text: "The personalized questions felt like a real technical interview.",
    },
    {
      name: "Sneha Das",
      role: "Backend Developer",
      company: "Accenture",
      text: "One of the best interview preparation platforms I've used.",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Loved by Students
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border bg-white p-8 shadow"
            >
              <div className="mb-4 flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current"
                  />
                ))}
              </div>

              <p className="italic text-gray-600">
                "{t.text}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold">
                  {t.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {t.role} • {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}