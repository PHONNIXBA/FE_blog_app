import type { Metadata } from "next";
import "./globals.css"
import { Header } from "@/componets/Header";
import { PostState } from "@/componets/PostState";

export const metadata: Metadata = {
  title: "Blog App",
  description: "A social Internet where people update information"
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <PostState>
          <Header />
          <main className="pt-16">
            {children}
          </main>
        </PostState>
      </body>
    </html>
  );
}