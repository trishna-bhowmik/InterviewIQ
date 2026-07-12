"use client";

import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";

export function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-slate-100">

      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">

        <Navbar />

        <main className="flex-1 p-8">

          {children}

        </main>

      </div>

    </div>
  );
}