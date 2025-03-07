import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import '@fontsource-variable/dm-sans';
import "@radix-ui/themes/styles.css";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Example School District",
  description: "We provides the finest education to the Alice and Bob's of the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <ThemeProvider attribute="class">
          <Theme accentColor="purple">
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
