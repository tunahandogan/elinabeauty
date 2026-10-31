import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Saç, tırnak, cilt ve salon için temsilî görseller; öncesi / sonrası alanı gerçek fotoğraflar için ayrıldı. Elina Hair & Beauty, Kervansaray AVM, Palandöken / Erzurum.",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Galeri · Temsilî görseller"
        title={
          <>
            Renk, doku, <em>bitiş.</em>
          </>
        }
      >
        <p>
          Buradaki fotoğraflar Pexels&apos;ten seçilmiş temsilî görsellerdir; Elina&apos;nın çalışmaları, müşterileri veya salonu
          değildir. Salonun kendi fotoğrafları ve müşteri izinli öncesi / sonrası kareleri geldiğinde yerlerine geçecek.
        </p>
      </PageIntro>
      <GalleryGrid />
    </>
  );
}
