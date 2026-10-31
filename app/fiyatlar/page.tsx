import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageIntro } from "@/components/PageIntro";
import { PriceTable } from "@/components/PriceTable";
import { whatsappUrl } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Fiyatlar",
  description:
    "Elina Hair & Beauty hizmetleri için fiyat bilgisi: seans ve bölgeye göre değişen net fiyatı WhatsApp'tan iletiyoruz.",
};

export default function PricesPage() {
  const wa = whatsappUrl();
  return (
    <>
      <PageIntro
        eyebrow="Fiyatlar"
        title={
          <>
            Net fiyat, <em>birkaç dakikada.</em>
          </>
        }
      >
        <p>Fiyatlar seans ve bölgeye göre değişir; net fiyatı WhatsApp&apos;tan birkaç dakikada iletiyoruz.</p>
      </PageIntro>

      <div className="container-x pt-12 pb-20 md:pt-16 md:pb-28">
        <PriceTable />
        {wa && (
          <div className="mt-14 flex flex-col gap-4 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-stone-700">Birden fazla işlem mi düşünüyorsunuz? Hepsini tek mesajda yazabilirsiniz.</p>
            <ButtonLink href={wa}>
              WhatsApp&apos;tan sor <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden />
            </ButtonLink>
          </div>
        )}
      </div>
    </>
  );
}
