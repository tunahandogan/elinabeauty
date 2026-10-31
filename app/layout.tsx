import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { DemoBadge } from "@/components/DemoBadge";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppBar } from "@/components/WhatsAppBar";
import { site } from "@/content/site";
import { bolumScript } from "@/lib/bolum-script";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: site.title, template: "%s · Elina Hair & Beauty" },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Elina Hair & Beauty",
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  // Konsept demo: işletme onayı olmadan dizine eklenmemeli
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f7f3ee",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-bolum ve data-hareket, hidrasyondan önce aşağıdaki betikle eklenir; uyarıyı bastırmak bu yüzden
    <html lang="tr" className={`${display.variable} ${body.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Seçilen bölümü ve zorunlu animasyon modunu ilk boyamadan önce geri yükler */}
        <script dangerouslySetInnerHTML={{ __html: bolumScript }} />
      </head>
      <body className="paper-grain flex min-h-dvh flex-col">
        <MotionProvider>
          <a
            href="#icerik"
            className="sr-only z-50 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
          >
            İçeriğe geç
          </a>
          <Header />
          <main id="icerik" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppBar />
          <DemoBadge />
          <JsonLd />
        </MotionProvider>
      </body>
    </html>
  );
}

