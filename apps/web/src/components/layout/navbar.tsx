"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Bell,
  ChevronDown,
  User,
  FileText,
  Mic,
  LogOut,
} from "lucide-react";

import { logout } from "@/lib/auth";
import { useProfile } from "@/hooks/use-profile";

export function Navbar() {
  const router = useRouter();

  const { data } = useProfile();

  const profile = data?.data;

  const [open, setOpen] =
    useState(false);

  const menuRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(
      e: MouseEvent
    ) {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          e.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const hour =
    new Date().getHours();

  let greeting =
    "Good Evening";

  if (hour < 12)
    greeting = "Good Morning";
  else if (hour < 18)
    greeting = "Good Afternoon";

  const today =
    new Date().toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        month: "long",
        day: "numeric",
      }
    );

  const fullName =
    profile?.user.fullName ??
    "User";

  const initials = fullName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b bg-white px-10 py-6">

      <div>

        

        <p className="mt-1 text-blue-900 font-bold text-xl">
          {today}
        </p>

      </div>

      <div className="relative flex items-center gap-6" ref={menuRef}>

        <button className="rounded-full bg-slate-100 p-3 hover:bg-slate-200">

          <Bell size={20} />

        </button>

        <button
          onClick={() =>
            setOpen(!open)
          }
          className="flex items-center gap-3 rounded-xl border px-4 py-2 transition hover:bg-slate-100"
        >

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-900 font-bold text-white">

            {initials}

          </div>

          <div className="text-left">

            <p className="font-semibold">

              {fullName}

            </p>

            

          </div>

          <ChevronDown size={18} />

        </button>

        {open && (

          <div className="absolute right-0 top-20 w-64 rounded-2xl border bg-white shadow-xl">

            <Link
              href="/profile"
              className="flex items-center gap-3 px-5 py-4 hover:bg-slate-50"
            >

              <User size={18} />

              Profile

            </Link>

            <Link
              href="/resume"
              className="flex items-center gap-3 px-5 py-4 hover:bg-slate-50"
            >

              <FileText size={18} />

              Resume

            </Link>

            <Link
              href="/interview/create"
              className="flex items-center gap-3 px-5 py-4 hover:bg-slate-50"
            >

              <Mic size={18} />

              Create Interview

            </Link>

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-5 py-4 text-red-600 hover:bg-red-50"
            >

              <LogOut size={18} />

              Logout

            </button>

          </div>

        )}

      </div>

    </header>
  );
}