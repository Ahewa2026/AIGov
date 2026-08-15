import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentinel AI — Govern every model, agent, and dataset",
  description:
    "Sentinel AI gives enterprises a single control plane to inventory, assess, monitor, and prove compliance for every AI system in production.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
