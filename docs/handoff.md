# Devir notu

Durum tarihi: **2026-10-31**. Proje yerel; **deploy edilmedi**. Dal: `demo/elina-beauty-studio`.

## Durum

- Next.js 16 (App Router) + TypeScript + Tailwind 4, npm.
- Sayfalar: `/`, `/hizmetler`, `/hizmetler/[slug]` (7 hizmet), `/fiyatlar`, `/galeri`, `/salon`, `/iletisim`, `/randevu`, 404, `robots.txt`.
- Tek içerik kaynağı `content/site.ts`; uyarlama adımları `README.md` içinde.
- Hizmet sayfalarında "Nasıl yapılır", "Seans / süre", "Kimlere uygun değildir" ve fiyat bloğu var; fiyat `null` ise "Fiyat al" WhatsApp düğmesi çıkar (`serviceWhatsappUrl`).
- Galeride "Öncesi / sonrası" kategorisi gerçek fotoğraf gelene kadar kesikli çerçeveli yer tutucu gösterir.
- Demo notu ve `noindex` (meta + `X-Robots-Tag` + `robots.txt`) açık.

## Doldurulacak yer tutucular (`[DOLDURULACAK: ...]`)

| Ne | Nerede (`content/site.ts`) |
|---|---|
| Kat / mağaza no | `business.mall.floor` |
| Pazartesi–Cumartesi saatleri | `business.hours[0].time` |
| Pazar kapanış saati | `business.hours[1].time` |
| Üç uzmanın adı | `business.team[].name` |
| Lazer genel seans planı | `services` → lazer-epilasyon → `sessions` |
| Infra Shape cihaz açıklaması | `services` → vucut-bakimi → `howItWorks` |
| Paket seans sayısı | `services` → vucut-bakimi → `sessions` |
| Otopark ve kat bilgisi | `faqs` (salona nasıl gelirim) |
| Ödeme seçenekleri | `faqs` (ödeme) |
| Tek kullanımlık malzeme | `hygiene.points[0]` |
| Alet sterilizasyon yöntemi | `hygiene.points[1]` |
| Cihaz marka / model | `hygiene.points[2]` |
| Öncesi / sonrası fotoğrafları (3 yuva, müşteri izniyle) | `beforeAfter.slots[].note` |

Ayrıca fiyatlar (`services[].price`) ve süreler (`duration`) `null`; verilince arayüz otomatik gösterir.

## Doğrulanması gerekenler

- 0537 048 38 30 numarasının WhatsApp'ta açık olduğu (`business.whatsappVerified`).
- `source: "dogrulanacak"` olan hizmet kalemleri, SSS, yaklaşım ve hijyen metinleri ("Teyit bekliyor" etiketi çıkar).
- Yorum alıntılarının Google'da hâlâ görünür olduğu (kontrol tarihi 2026-10-31).
- Ekip adlarının ve unvanlarının salonun onayıyla yazılması.

## Bilinen sınırlar

- Bölüm seçimi yalnızca tarayıcının yerel deposunda tutulur; çerez veya sunucu kaydı yoktur.
- Randevu akışı form göndermez; hazırlanan mesaj WhatsApp'a, Instagram'a veya telefona yönlendirir. Kişisel veri toplanmaz.
- Galeri filtresi URL'ye yazılmıyor.
- `mekan-koltuk.jpg` ve erkek fotoğrafları (`erkek-*.jpg`) kullanılmıyor, yedek.
- Lighthouse ölçülmedi.
- `next dev` çalışırken `AGENTS.md` içindeki Next.js kural bloğunu yeniden yazar.

## Yayına alma kararı verilirse

1. İşletme onayını alın, yer tutucuları doldurun.
2. Noindex'i kaldırın (`app/layout.tsx` `robots`, `next.config.ts` `X-Robots-Tag`, `app/robots.ts`), demo notunu ve rozetini kaldırın (`demo`, `site.demoNote`).
3. `NEXT_PUBLIC_SITE_URL` ve gerçek alan adını ekleyin; KVKK/çerez durumunu değerlendirin (şu an çerez, analitik veya form gönderimi yok).
4. Her değişiklikten sonra: `npm run lint && npm run typecheck && npm run build`, sonra `npm start` + `npm run check`.
