import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/app/provider";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata: this remains on the server side for SEO, title, and other static properties
export const metadata: Metadata = {
  title: "CareerCraft",
  description: "Turn Job Descriptions into Opportunities 🚀",
  icons: {
    icon: "/04.png", // Fixed path for public folder icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Next.js automatically injects necessary scripts here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Render children (the content of the page) */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
