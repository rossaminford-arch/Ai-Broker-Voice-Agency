import type { Metadata } from "next";
import "@total-typescript/ts-reset";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Broker Voice Agency",
  description: "Compliant AI receptionist for mortgage and insurance brokers.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
