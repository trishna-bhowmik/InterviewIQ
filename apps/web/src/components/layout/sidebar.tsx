"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Mic,
  History,
  User,
  LogOut,
} from "lucide-react";

import { logout } from "@/lib/auth";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: FileText,
  },
  {
    name: "Create Interview",
    href: "/interview/create",
    icon: Mic,
  },
  {
    name: "History",
    href: "/history",
    icon: History,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <aside className="flex min-h-screen w-72 flex-col bg-slate-900 text-white">

      <div className="border-b border-slate-800 p-8">

        <h1 className="text-3xl font-bold">
          InterviewIQ
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Mock Interview Platform
        </p>

      </div>

      <nav className="flex-1 space-y-2 p-5">

        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-5 py-4 transition ${
                active
                  ? "bg-blue-900 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.name}
              </span>

            </Link>
          );
        })}

      </nav>

      <div className="border-t border-slate-800 p-5">

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-4 font-semibold transition hover:bg-red-700"
        >
          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}