"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b bg-white/80 shadow backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold text-blue-900"
        >
          InterviewIQ
        </Link>

        {/* Desktop */}

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-gray-600 hover:text-blue-900"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-blue-900"
          >
            How It Works
          </a>

          <a
            href="#faq"
            className="text-gray-600 hover:text-blue-900"
          >
            FAQ
          </a>

          <Link
            href="/login"
            className="rounded-lg border px-5 py-2 hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-blue-900 px-5 py-2 text-white hover:bg-blue-950"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile */}

        <button
          className="md:hidden"
          onClick={() =>
            setIsOpen(!isOpen)
          }
        >
          {isOpen ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col gap-4 p-6">
            <a
              href="#features"
              onClick={() =>
                setIsOpen(false)
              }
            >
              Features
            </a>

            <a
              href="#how-it-works"
              onClick={() =>
                setIsOpen(false)
              }
            >
              How It Works
            </a>

            <a
              href="#faq"
              onClick={() =>
                setIsOpen(false)
              }
            >
              FAQ
            </a>

            <Link
              href="/login"
              onClick={() =>
                setIsOpen(false)
              }
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() =>
                setIsOpen(false)
              }
              className="rounded-lg bg-blue-900 p-3 text-center text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}