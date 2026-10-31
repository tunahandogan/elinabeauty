# Tasarım sistemi

Hedef: Elina Hair & Beauty (Erzurum, Kervansaray AVM) için sıcak, aydınlık, "bakım stüdyosu" hissi veren, saç ve güzellik/cihaz hizmetlerini aynı çatıda anlatan demo. Bütün tokenlar `app/globals.css` içindeki `@theme` bloğundadır; Tailwind sınıfları (`bg-paper`, `text-accent`, `text-h2` …) buradan üretilir.

> Renkler ve fontlar **işletmenin doğrulanmış kurumsal kimliği değildir.** Gerçek logo/marka materyali gelince önce `@theme` değerleri güncellenir.

## Renkler

| Token | Değer | Kullanım |
|---|---|---|
| `paper` | `#F7F3EE` | Ana zemin (sıcak kırık beyaz) |
| `paper-deep` | `#EEE7DE` | İkincil açık bölüm zemini |
| `ink` | `#22201D` | Metin, koyu bölümler, birincil düğme |
| `ink-soft` | `#33302C` | Koyu yüzey varyantı |
| `accent` | `#56634F` | Adaçayı: üst etiketler, italik vurgu, odak halkası, aktif menü |
| `accent-deep` | `#3F4A3A` | Accent'in koyu varyantı |
| `accent-tint` | `#E4E9DF` | Koyu zeminde vurgu metni, açık hover |
| `stone-100…700` | sıcak taş tonları | Çizgiler, iskelet, ikincil metin |
| `on-ink-muted` | `#B8B0A4` | Koyu zeminde ikincil metin |

Güzellik bölümünde (`html[data-bolum="guzellik"]`) `accent` → `#6F5A52` (sütlü kahve), `accent-deep` → `#574640`, `accent-tint` → `#EFE5DF`.

Kontrast (WCAG): accent/paper 5,77:1; accent/paper-deep 5,20:1; accent/accent-tint 5,17:1; güzellik accent/paper 5,83:1, /paper-deep 5,25:1; ink/paper 14,7:1; stone-500/paper 5,35:1, /paper-deep 4,82:1; accent-tint/ink 13,2:1; on-ink-muted/ink 7,6:1. Hepsi küçük metin için AA (4,5:1) üzerinde. `stone-300/400` yalnızca çizgi/devre dışı durum içindir.

Kaçınılanlar: mor/mavi degrade, cam (blur) efekti, gölge yığınları, emoji ikon.

## Köşe

Düğmelerde 3 px (`--radius-ctl`), kart ve görsel çerçevelerinde 6 px (`--radius-card`, Tailwind `rounded-md`). Küçük etiketlerde 2 px (`rounded-sm`). Daireler yalnızca durum noktası ve yuvarlak WhatsApp düğmesi içindir.

## Tipografi

- **Başlık:** Fraunces (`latin-ext`, normal + italik, `opsz`) → `font-serif`, `--font-display` değişkeni (`app/layout.tsx`). h1 ağırlığı 350, h2 400, h3 450; `letter-spacing: -0.015em`; "SOFT" ekseni 50 (italikte 100).
- **Gövde:** Outfit (`latin-ext`) → `font-sans`, `--font-body` değişkeni.
- İki aile dışında font eklenmez. Türkçe karakterler (ğ, ş, ı, İ, ç, ö, ü) iki ailede de desteklenir.
- Vurgu: başlık içinde `<em>` → Fraunces italik, accent renginde.
- Logo: yazı logosu "ELİNA" (serif, geniş harf aralığı) + "HAIR & BEAUTY". Favicon: accent zemin, paper renkli serif "E".

Akışkan ölçek (`clamp`):

| Token | Aralık | Kullanım |
|---|---|---|
| `text-display` | 40 → 108 px | Yalnızca ana sayfa hero başlığı |
| `text-h1` | 36 → 72 px | Sayfa başlıkları |
| `text-h2` | 30 → 52 px | Bölüm başlıkları |
| `text-h3` | 24 → 34 px | Alt başlıklar, hizmet dizini |
| `text-lead` | 18 → 22 px | Giriş paragrafları |
| `.eyebrow` | 12 px, büyük harf, 0.16em | Üst etiketler |

## Ölçüler ve düzen

- Kapsayıcı: `.container-x` → en fazla 1440 px, yan boşluk `clamp(16px … 48px)` (375 px'de 16 px).
- 12 kolonlu ızgara; masaüstünde hafif asimetrik yerleşim (ör. hero 5 + 6 kolon).
- Dikey ritim: bölümler `py-20` (mobil) / `py-28` (masaüstü).
- Dokunma hedefleri en az 44×44 px (`min-h-11`, düğmelerde `min-h-12`).
- Üst çubuk yapışkan ve opak; `safe-area-inset` hesaba katılır. Menü: 768–1279 px'te "Randevu" metin bağlantısı, 1280 px üstünde düğme.
- Mobilde altta sabit WhatsApp çubuğu (~64 px) vardır; içeriği örtmesin diye `Footer` alt şeridine mobilde `72px + safe-area` boşluk verilir.

## Fotoğraf

- `components/Photo.tsx`: `next/image` + `fill`, oran kutusu (`frame="aspect-[4/5]"`), `objectPosition` ile odak noktası (`content/photos.ts` → `focal`).
- Her stok karenin altında "İlham görseli · Foto: … / Pexels" künyesi.
- İlk ekrandaki görsel `preload`; diğerleri tembel yüklenir. Statik importlar sayesinde boyut ve bulanık yer tutucu otomatiktir.

## Hareket dili

- Sakin ve kısa: giriş mesafeleri 8–14 px, süreler 0,35–0,6 sn, kolaylaştırma `cubic-bezier(0.22, 1, 0.36, 1)`. Marquee şeridi yavaş (70 sn).
- **Hero ve sayfa başlıkları CSS animasyonuyla** (`animate-rise`, `animate-unveil`) açılır: JavaScript gecikse de içerik ~0,6 sn içinde görünür.
- **`Reveal` (Motion):** içerik sunucuda görünür gelir; yalnızca hidrasyondan sonra ekranın altında kalan öğeler gizlenip görünür alana girince açılır. JS yoksa hiçbir şey saklı kalmaz.
- Mobil menü paneli sağdan kayar (0,35 sn).
- `prefers-reduced-motion`: CSS animasyonları sıfırlanır, Motion geçişleri anında olur, lightbox animasyonları kapanır.
- Yok: açılış ekranı, scroll hijacking, özel imleç, zorunlu smooth scroll, ekranı dolduran animasyon, cam (blur) efekti. Mobilde hover'a bağlı bilgi yoktur.

## Bölüm seçimi (Saç / Güzellik)

- İlk ziyarette ana sayfa iki büyük fotoğraf paneliyle hangi bölümün keşfedileceğini sorar (`components/BolumChooser.tsx`). Bu, ziyaretçiyi bekleten bir açılış ekranı değildir: başlık hemen okunur ve sayfanın geri kalanı altında durur. JS yoksa paneller ilgili hizmet bölümüne giden bağlantılar olarak çalışır.
- Animasyon: masaüstünde imlecin üzerinde durduğu panel genişler (`flex-grow` geçişi). Tıklanan panel yaklaşık 0,75 saniyede tüm genişliğe yayılırken diğer panel kaybolur. Ardından aynı fotoğrafla o bölümün hero'su (`BolumHero`) CSS giriş animasyonlarıyla açılır. `prefers-reduced-motion` açıkken geçiş anında olur.
- Seçim `<html data-bolum="kuafor|guzellik">` özniteliğinde ve tarayıcının yerel deposunda tutulur. `app/layout.tsx` içindeki satır içi betik (`lib/bolum-script.ts`) seçimi ilk boyamadan önce geri yüklediği için titreme olmaz.
- Tailwind varyantları (`app/globals.css`): `kuafor:`, `guzellik:`, `secili:`. Örnekler: `hidden kuafor:grid`, `secili:hidden`, `guzellik:order-first`. JS gerektiren bileşenler aynı değeri `useBolum()` kancasıyla okur (`lib/bolum.ts`).
- Bölümü değiştirme yolları: masaüstünde üst menüdeki "Saç | Güzellik" anahtarı (seçili zemin Motion `layoutId` ile kayar), mobilde menünün içindeki aynı anahtar, hero altındaki "… bölümüne geç" bağlantısı. Alt bilgideki "Bölüm seçimini sıfırla" giriş ekranına döndürür.
- Güzellik seçiliyken vurgu rengi değişir: `--color-accent` → `#6F5A52` (sütlü kahve), `--color-accent-tint` → `#EFE5DF`.
- Seçime göre değişenler:
  - Ana sayfa: hero, hizmet dizini (yalnızca seçilen bölüm), seçili kareler, yaklaşım fotoğrafı, galeri önizlemesi, randevu kartı başlığı.
  - `/hizmetler`, `/randevu` ve telefon listeleri: seçilen bölüm önce gelir.
  - `/galeri`: seçilen bölümün kategorileri ve fotoğrafları önce gelir.

## Logo

`components/Logo.tsx` geçici bir yazı logosudur (Fraunces, "ELİNA / HAIR & BEAUTY"). Resmî logo değildir. Favicon `app/icon.svg` de geçicidir.

## Reddedilenler

- **Bordo + Bodoni moda-dergisi dili** — önceki işletmeye aitti; bakım/cihaz ağırlıklı salona fazla sert.
- **Keskin 0px köşeler** — aynı neden: yumuşak bakım-stüdyosu dili için 2–6 px.
- **Cam (backdrop-blur) yüzeyler ve süs yıldızları (✦)** — şablon görünümü; opak yüzey ve sade ayraç tercih edildi.
- **Uzun, geniş hareket (32 px kayma, 1,2 sn perde, 38 sn şerit)** — sakin bakım hissine uymuyor; mesafe ve süreler kısaltıldı.
