import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UnAbandon AI — RetailGenie & AI for Retail",
    template: "%s | UnAbandon AI",
  },
  description:
    "UnAbandon AI helps retailers reduce abandonment and increase conversion with RetailGenie (SSOI), AI Agents (MerchAssist, PriceRite, DemandSync), and customer intelligence.",
  keywords: [
    "Retail AI",
    "RetailGenie",
    "UnAbandon AI",
    "MerchAssist",
    "PriceRite",
    "DemandSync",
    "Customer Intelligence",
    "Inventory Optimization",
    "Dynamic Pricing",
    "Ecommerce Conversion",
    "Reduce Cart Abandonment",
    "Retail Analytics",
  ],
  category: "Retail Technology",
  openGraph: {
    type: "website",
    url: "/",
    title: "Retail Genie — UnAbandon AI",
    description:
      "AI-native retail platform to make supply meet demand. SSOI for AI apps, real-time intelligence, and agentic workflows for retail.",
    images: [
      {
        url:
          "https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/5ddb25d0-c434-4a9c-888d-4d6eb7226e9b/Website+image+chatgpt+created.png",
        width: 1200,
        height: 630,
        alt: "UnAbandon AI RetailGenie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UnAbandon AI — RetailGenie & AI for Retail",
    description:
      "Reduce abandonment, boost conversion. RetailGenie + AI Agents for merchandising, pricing, and inventory.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/5ddb25d0-c434-4a9c-888d-4d6eb7226e9b/Website+image+chatgpt+created.png",
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/icon.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "UnAbandon AI",
              url: siteUrl,
              logo: `${siteUrl}/icon.svg`,
              sameAs: [
                "https://RetailGenie.unabandon.ai",
              ],
            }),
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "UnAbandon AI",
              url: siteUrl,
            }),
          }}
        />
        {/* Product Schema for RetailGenie */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "RetailGenie",
              brand: { "@type": "Brand", name: "UnAbandon AI" },
              description:
                "RetailGenie is a Single Source of Intelligence (SSOI) platform that powers AI apps for retail associates across merchandising, eCommerce, and supply chain.",
              url: `${siteUrl}/retailgenie`,
              sameAs: ["https://RetailGenie.unabandon.ai"],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/PreOrder",
                url: `${siteUrl}/retailgenie`,
              },
            }),
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is UnAbandon AI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "UnAbandon AI is an AI-native retail platform to reduce abandonment, increase conversion, and make supply meet demand using domain language models and AI agents.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is RetailGenie?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "RetailGenie is the Single Source of Intelligence (SSOI) that powers retail AI apps with real-time, customer-centric insights across merchandising, pricing, and inventory.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who is MerchAssist for?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "MerchAssist helps merchants, planners, and buyers make more data-driven, agile decisions closer to real-time demand.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}