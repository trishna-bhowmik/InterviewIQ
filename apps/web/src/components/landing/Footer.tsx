export function Footer() {
  return (
    <footer className="border-t bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-gray-600 md:flex-row">
        <p>
          © {new Date().getFullYear()} AI Mock Interview Platform.
        </p>

        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}