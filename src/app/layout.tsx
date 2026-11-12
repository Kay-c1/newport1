import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/components/theme.css";
import CRTIntro from "@/components/CRTIntro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kristian-port.vercel.app"),
  title: {
    default: "Kristian Delos Santos | Software Developer",
    template: "%s | Kristian Delos Santos",
  },
  description:
    "Portfolio of Kristian Delos Santos, a Computer Engineering student and software developer specializing in backend engineering, AI systems, and full-stack development.",
  keywords: [
    "Kristian Delos Santos",
    "Software Developer",
    "Backend Developer",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
  ],
  openGraph: {
    title: "Kristian Delos Santos | Software Developer",
    description:
      "Building intelligent systems through backend engineering, AI, and software development.",
    url: "https://kristian-port.vercel.app",
    siteName: "Kristian Delos Santos Portfolio",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const initializeTheme = `
(function () {
  try {
    var stored = localStorage.getItem('kds-theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = 'light';
  }
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      </head>
      <body className="min-h-full flex flex-col">
        <CRTIntro />
        {children}
      </body>
    </html>
  );
}
