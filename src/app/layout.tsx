import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subjectspot — NGO Storytelling Videographer · Cameroon",
  description:
    "Subjectspot is a premium documentary storytelling studio based in Bamenda, Cameroon. We help NGOs, nonprofits, and humanitarian organizations transform their impact into emotional cinematic stories that increase donor trust and fundraising success.",
  keywords: [
    "NGO videographer Cameroon",
    "documentary storytelling",
    "nonprofit video production",
    "humanitarian filmmaking",
    "impact storytelling",
    "Bamenda videographer",
    "fundraising video",
    "SDG storytelling",
  ],
  openGraph: {
    title: "Subjectspot — Powerful Storytelling for NGOs",
    description:
      "Cinematic storytelling videos that help NGOs inspire, raise funds & show real impact. Based in Bamenda, Cameroon.",
    type: "website",
    locale: "en_US",
    siteName: "Subjectspot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subjectspot — NGO Storytelling Videographer",
    description:
      "Powerful storytelling videos that help NGOs inspire, raise funds & show real impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Subjectspot",
              description:
                "Premium documentary storytelling studio for NGOs and humanitarian organizations",
              url: "https://subjectspot.com",
              telephone: "+237673589999",
              email: "subjectspot@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bamenda",
                addressCountry: "CM",
              },
              areaServed: "Cameroon",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="bg-dark-950 text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
