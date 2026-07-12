import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-blue-900 px-8 py-20 text-center text-white">
        <h2 className="text-5xl font-bold">
          Ready to Ace Your Interview?
        </h2>

        <p className="mt-6 text-xl">
          Start practicing today with AI-powered mock interviews.
        </p>

        <Link
          href="/register"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-900 transition hover:bg-gray-100"
        >
          Get Started Free
        </Link>
      </div>
    </section>
  );
}