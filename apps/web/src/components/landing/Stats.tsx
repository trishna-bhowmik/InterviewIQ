export function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Mock Interviews",
    },
    {
      value: "95%",
      label: "Success Rate",
    },
    {
      value: "24/7",
      label: "AI Availability",
    },
    {
      value: "4.9★",
      label: "User Rating",
    },
  ];

  return (
    <section className="bg-blue-900 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h2 className="text-5xl font-extrabold">
              {stat.value}
            </h2>

            <p className="mt-3 text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}