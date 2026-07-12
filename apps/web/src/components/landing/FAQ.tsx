export function FAQ() {
  const faqs = [
    {
      q: "Is the platform free?",
      a: "Yes, you can start practicing for free.",
    },
    {
      q: "Does AI generate personalized questions?",
      a: "Yes, questions are generated based on your resume and selected interview type.",
    },
    {
      q: "Can I practice multiple interviews?",
      a: "Yes, you can create and manage multiple interview sessions.",
    },
  ];

  return (
    <section
  id="faq"
  className="bg-gray-50 py-24"
>
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border bg-white p-6"
            >
              <h3 className="text-lg font-semibold">
                {faq.q}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}