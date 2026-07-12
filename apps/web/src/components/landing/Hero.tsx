import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
      <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
        Ace Your Next{" "}
        <span className="text-blue-900">
          Technical Interview
        </span>
        <br />
        with AI
      </h1>

      <p className="mt-8 max-w-2xl text-lg text-gray-600 md:text-xl">
        Upload your resume, practice personalized AI-generated
        interviews, receive instant feedback, and improve
        your confidence before your dream job interview.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/register"
          className="rounded-xl bg-blue-900 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-950"
        >
          Get Started Free
        </Link>

        <Link
          href="/login"
          className="rounded-xl border border-gray-300 px-8 py-4 text-lg font-semibold transition hover:bg-gray-100"
        >
          Login
        </Link>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
        <span>✓ AI Resume Analysis</span>
        <span>✓ Personalized Questions</span>
        <span>✓ Instant Feedback</span>
        <span>✓ Performance Reports</span>
      </div>
    </section>
  );
}