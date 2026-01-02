import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rapidhyre.ai"),
  title: {
    template: "%s | Rapidhyre AI - Smart, Scalable Hiring",
    default: "Rapidhyre AI - Smart, Scalable Hiring",
  },
  description:
    "Rapidhyre AI is an intelligent recruitment platform that automates candidate screening, scheduling, and communication—enabling faster, fairer, and more efficient hiring at scale.",
  applicationName: "Rapidhyre AI - Smart Hiring Platform",
  authors: [
    { name: "Rapidhyre AI Team", url: "https://www.rapidhyre.ai/about" },
  ],
  generator: "Rapidhyre AI Platform using Next.js 15, TypeScript, and Supabase",
  keywords: [
    "AI in HR",
    "AI Agents",
    "AI Recruiting",
    "Automated Hiring",
    "Smart Recruitment",
    "Candidate Screening",
    "Interview Automation",
    "AI Hiring Platform",
    "Recruitment Automation",
    "AI Talent Acquisition",
    "Resume Parsing",
    "Hiring Software",
    "AI Interview Scheduling",
    "Recruiter Productivity",
    "Fair Hiring",
    "Rapidhyre AI",
  ],
  referrer: "no-referrer-when-downgrade",
  creator: "Rapidhyre AI",
  publisher: "Rapidhyre AI Labs",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noarchive: false,
      nosnippet: false,
      noimageindex: false,
      nocache: false,
      notranslate: false,
      indexifembedded: true,
      nositelinkssearchbox: false,
      unavailable_after: undefined,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://www.rapidhyre.ai",
    languages: {
      "en-US": "https://www.rapidhyre.ai/en-US",
      "es-ES": "https://www.rapidhyre.ai/es-ES",
      "fr-FR": "https://www.rapidhyre.ai/fr-FR",
    },
    media: {
      "(max-width: 600px)": "https://m.rapidhyre.ai",
    },
    types: {
      "application/rss+xml": "https://www.rapidhyre.ai/rss.xml",
    },
  },
  icons: {
    icon: [
      { url: "/brand/icon0.svg", type: "image/svg+xml", rel: "icon" },
      { url: "/brand/icon1.png", type: "image/png", rel: "icon" },
      {
        url: "/brand/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
        rel: "icon",
      },
      {
        url: "/brand/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
        rel: "icon",
      },
      {
        url: "/brand/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
        rel: "icon",
      },
    ],
    shortcut: [
      {
        url: "/brand/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
        rel: "shortcut icon",
      },
    ],
    apple: [
      {
        url: "/brand/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        rel: "apple-touch-icon",
      },
    ],
    other: [
      {
        url: "/brand/favicon.ico",
        type: "image/x-icon",
        rel: "icon",
      },
    ],
  },
  // manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    determiner: "auto",
    locale: "en_US",
    alternateLocale: ["en_GB", "es_ES", "fr_FR"],
    url: "https://www.rapidhyre.ai",
    siteName: "Rapidhyre AI - Smart, Scalable Hiring",
    title: "Rapidhyre AI - Smart, Scalable Hiring",
    description:
      "Rapidhyre AI automates the hiring process with intelligent screening, scheduling, and communication tools—accelerating recruitment while ensuring fairness and efficiency.",
    emails: ["support@rapidhyre.ai"],
    phoneNumbers: ["+1-800-123-4567"],
    videos: [
      {
        url: "https://www.rapidhyre.ai/assets/rapidhyre-ai-demo.mp4",
        secureUrl: "https://cdn.rapidhyre.ai/demo.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
      },
    ],
    audio: [
      {
        url: "https://www.rapidhyre.ai/assets/rapidhyre-ai-intro.mp3",
        type: "audio/mpeg",
      },
    ],
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "Rapidhyre AI Logo",
      },
      {
        url: "/brand/social-card.png",
        width: 1200,
        height: 600,
        alt: "Rapidhyre AI - Hiring Automation",
      },
    ],
    countryName: "United States",
    ttl: 86400,
  },
  twitter: {
    card: "summary_large_image",
    site: "@round_ai",
    siteId: "1234567890",
    creator: "@round_ai",
    creatorId: "1234567890",
    title: "Rapidhyre AI - Smart, Scalable Hiring",
    description:
      "Experience faster, fairer hiring with Rapidhyre AI's automated screening, scheduling, and candidate communications.",
    images: [
      {
        url: "https://www.rapidhyre.ai/brand/social-card.png",
        alt: "Rapidhyre AI - Automated Recruitment Dashboard",
        secureUrl: "https://cdn.rapidhyre.ai/social-card.png",
        type: "image/png",
        width: 1200,
        height: 600,
      },
      {
        url: "https://www.rapidhyre.ai/brand/logo-twitter.png",
        alt: "Rapidhyre AI Logo",
        type: "image/png",
        width: 600,
        height: 600,
      },
    ],
    // (Optional) Player card for embedding a short demo video
    // card: "player",
    // players: [
    //   {
    //     playerUrl: "https://www.rapidhyre-ai.ai/embed/demo-player.html",
    //     streamUrl: "https://cdn.rapidhyre-ai.ai/demo.mp4",
    //     width: 1280,
    //     height: 720,
    //   },
    // ],
  },
  // facebook: {},
  // verification: {},
  appleWebApp: {
    capable: true,
    title: "Rapidhyre AI",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/brand/apple-splash-2048x2732.png",
        media: "(device-width: 1024px)",
      },
      {
        url: "/brand/apple-splash-1668x2224.png",
        media: "(device-width: 834px)",
      },
    ],
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  // itunes: {
  //   appId: "123456789",
  //   appArgument: "https://www.rapidhyre.ai",
  // },
  appLinks: {
    // ios: {
    //   url: "rapidhyre-ai://home",
    //   app_store_id: "123456789",
    //   app_name: "rapidhyre-ai AI",
    // },
    // android: {
    //   package: "com.rapidhyre-ai.app",
    //   url: "intent://home#Intent;scheme=rapidhyre-ai;package=com.rapidhyre-ai.app;end",
    //   class: "com.rapidhyre-ai.MainActivity",
    //   app_name: "Rapidhyre AI",
    // },
    // web: {
    //   url: "https://www.rapidhyre.ai",
    //   should_fallback: true,
    // },
  },
};

export default function PoliciesRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          poppins.variable
        )}
      >
        {children}
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
