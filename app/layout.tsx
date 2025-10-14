import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Chisomo Misomali | Fiber Optics & Networking Specialist",
  description:
    "IT Professional, expertise in fiber optics, Linux administration, IoT and Electronics, networking, and telecommunications systems.",
  icon: "/favicon.ico",  
  keywords: [
    "Chisomo Misomali",
    "fiber optics",
    "networking specialist",
    "Linux administration",
    "telecommunications",
    "system administrator",
    "network engineer",
    "fiber optic technician",
    "Debian systems",
    "Linux in Malawi",
    "Ubuntu in Malawi",
    "Debian in Malawi",
    "Docker in Malawi",
    "Internet of Things IoT",
    "Robotics, Malawi",
    "LoRa Technology",
    "Proxmox virtualization",
    "Ubiquiti networks",
    "Motorola radio systems",
    "FTTx installation",
    "GIS applications",
    "Earth ranger systems",
    "network infrastructure",
    "data center management",
    "wireless networks",
    "radio management",
    "containerization",
    "automation",
    "cloud platforms",
  ],
  authors: [{ name: "Chisomo Misomali" }],
  creator: "Chisomo Misomali",
  publisher: "Chisomo Misomali",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chisomo-misomali.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chisomo Misomali | Fiber Optics, Networking Specialist, Linux Sys Admin, Docker, Robotics",
    description:
      "IT Professional, expertise in fiber optics, Linux administration, IoT and Electronics, networking, and telecommunications systems.",
    url: "https://chisomo-misomali.vercel.app",
    siteName: "Chisomo Misomali Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chisomo Misomali - Fiber Optics & Networking Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chisomo Misomali | Fiber Optics & Networking Specialist",
    description:
      "IT Professional, expertise in fiber optics, Linux administration, IoT and Electronics, networking, and telecommunications systems.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chisomo Misomali",
              jobTitle: "Fiber Optics & Networking Specialist",
              description: "Expert in fiber optics, Linux administration, networking, and telecommunications systems",
              url: "https://chisomo-misomali.vercel.app",
              email: "cjmisomali@gmail.com",
              telephone: "+265998335256",
              knowsAbout: [
                "Fiber Optics",
                "Linux Administration",
                "Network Engineering",
                "Telecommunications",
                "System Administration",
                "Debian Systems",
                "Proxmox Virtualization",
                "Ubiquiti Networks",
                "Motorola Radio Systems",
                "FTTx Installation",
                "GIS Applications",
                "Network Infrastructure",
                "Data Center Management",
                "Wireless Networks",
                "Containerization",
                "Automation",
                "Cloud Platforms",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Network Engineer",
                occupationLocation: {
                  "@type": "Country",
                  name: "Malawi",
                },
                skills: [
                  "Fiber Optic Splicing",
                  "Network Troubleshooting",
                  "Linux System Administration",
                  "Virtualization",
                  "Radio Systems Management",
                  "GIS Applications",
                  "Network Design",
                  "Infrastructure Management",
                ],
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Technical Education Background",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
