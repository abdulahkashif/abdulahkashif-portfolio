import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import AnimatedNavbar from "@/components/AnimatedNavbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Abdullah Kashif | Creative Developer",
  description: "Portfolio of Abdullah Kashif, Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} dark`} suppressHydrationWarning>
      <body className="bg-black text-white antialiased overflow-x-hidden font-sans selection:bg-purple-500 selection:text-black min-h-screen">
        <AnimatedNavbar />
        {children}
      </body>
    </html>
  );
}
