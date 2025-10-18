"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/app", label: "Overview" },
  { href: "/app/calls", label: "Calls" },
  { href: "/app/leads", label: "Leads" },
  { href: "/app/bookings", label: "Bookings" },
  { href: "/app/docs", label: "Docs" },
  { href: "/app/settings", label: "Settings" },
  { href: "/app/affiliates", label: "Affiliates" }
];

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-slate-900">
            Broker Voice Agency
          </Link>
          <nav className="flex items-center gap-4 text-sm font-medium text-slate-500">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 transition",
                  pathname === item.href ? "bg-slate-900 text-white" : "hover:bg-slate-200"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="hidden sm:inline">demo@broker.ai</span>
            <span className="h-8 w-8 rounded-full bg-brand-500/10" />
          </div>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-6 py-10">{children}</main>
    </div>
  );
}
