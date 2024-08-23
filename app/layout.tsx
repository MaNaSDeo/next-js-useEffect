import "../styles/global.css";
import React from "react";

export const metadata = {
  title: "My Next.js App",
  description: "Created with Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
