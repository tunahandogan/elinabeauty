# İçerik kaynakları

Son kontrol: **2026-10-31**. Bütün değerler `content/site.ts` içindedir. Ayrıntılı araştırma: `research/adaylar.md`, seçim gerekçesi: `research/secim.md`.

## Kaynak URL'leri

| Kaynak | URL | Erişim |
|---|---|---|
| Google Haritalar kaydı (Elina Beauty Studio) | https://www.google.com/maps/place/Elina+Beauty+Studio/@39.8780831,41.2441018,17z | Okundu: ad, adres, telefon, puan (4,8), yorum sayısı (209), hizmet etiketleri, "Web sitesi ekleyin" boşluğu |
| Instagram profili | https://www.instagram.com/elinaabeautystudio/ | Herkese açık profil okundu (profil adı "ELİNA HAİR&BEAUTY", biyografi, öne çıkanlar). Gönderi fotoğrafları kullanılmadı. |
| Instagram biyografisindeki harita bağlantısı | https://maps.app.goo.gl/UscVDJyzmKPWPZqF6 | "Yol tarifi al" bağlantısı olarak kullanıldı |

Google kaydında web sitesi alanı boş; Instagram biyografisi yalnızca haritaya gidiyor.

## Doğrulanan bilgiler

| Bilgi | Değer | Kaynak |
|---|---|---|
| Ad | Elina Hair & Beauty (Google: Elina Beauty Studio) | Instagram + Google |
| Adres | Kervansaray AVM, Hüseyin Avni Ulaş Mh., 25070 Palandöken / Erzurum | Google |
| Konum | 39.8780831, 41.2441018 (V6HV+6J) | Google |
| Telefon | 0537 048 38 30 | Google (sahibi ayrıca teyit etmedi) |
| Puan ve yorum | 4,8 · 209 yorum (kontrol: 2026-10-31) | Google |
| Hizmetler | Ombre ve saç, lazer epilasyon, Hydrafacial, cilt bakımı, G5, Infra Shape, Emslim, ipek kirpik, tırnak, makyaj | Google etiketleri + Instagram |
| Yorum alıntıları | Üç kısa alıntı, ad baş harfiyle (S. T., K. A., M.) | Google yorumları |
| Pazar açılış saati | 09:30 | Google |

## Varsayım ve belirsiz alanlar

| Alan | Durum |
|---|---|
| WhatsApp | 0537 numarasının WhatsApp'ta açık olduğu varsayıldı (`business.whatsappVerified = false`); gösterimden önce doğrulayın |
| Çalışma saatleri | Yalnızca Pazar 09:30 açılış görüldü; kalanı yer tutucu |
| Kat / mağaza no | Yer tutucu |
| Fiyatlar, süreler, seans sayıları | Bilinmiyor; `price = null`, "Fiyat al" WhatsApp düğmesi |
| Ekip | Ad ve unvan yok (yorumlarda iki isim anılıyor, onay olmadan yazılmadı); yer tutucu |
| Hijyen ve cihaz marka/modelleri | Yer tutucu |
| Hizmet metinleri, SSS, yaklaşım | Konsept metin (`source: "dogrulanacak"`); işletmeye onaylatılmalı |
| Öncesi / sonrası fotoğrafları | Yok; galeride kesikli çerçeveli yer tutucu |
| Logo | Resmî logo kullanılmadı; yazı logosu ve "E" favicon |
| Sahibin adı | Yalnızca brief'te geçiyor; sitede kullanılmadı |

## Görsel kaynakları ve lisans

Bütün fotoğraflar [Pexels](https://www.pexels.com) üzerinden indirildi, `public/images/stok/` altında yerel olarak tutuluyor. Pexels'in kendi boyutlandırmasıyla 1800 px genişlikte JPEG; başka düzenleme yapılmadı. Sitede `next/image` ile yeniden boyutlandırılıp modern formatlarda sunuluyor.

**Lisans:** [Pexels License](https://www.pexels.com/license/): ücretsiz, ticari kullanıma açık, atıf zorunlu değil (yine de sitede ve aşağıda veriliyor), düzenlenebilir. Lisans, fotoğraftaki tanınabilir kişilerin bir işletmeyi onaylıyormuş gibi gösterilmesine izin vermez. Bu yüzden her karede "Temsilî görsel" künyesi var; kişiler Elina çalışanı veya müşterisi olarak sunulmuyor.

Fotoğrafçı adları Pexels sayfalarından alındı; bir kısmı Pexels'in listeleme verisinden (kullanıcı adı) geldiği için profil adıyla küçük farklar olabilir.

| Dosya | Kullanıldığı yer | Fotoğrafçı | Kaynak |
|---|---|---|---|
| `hero.jpg` | Ana sayfa hero | cottonbro studio | https://www.pexels.com/photo/a-woman-in-beige-shirt-10210765/ |
| `portre-dalgali.jpg` | Ana sayfa "Yaklaşım", galeri | Jonatan Galvis | https://www.pexels.com/photo/young-woman-with-wavy-hair-17779645/ |
| `portre-hareket.jpg` | Saç tasarımı, ana sayfa galeri önizleme, galeri | Hannah Bickmore | https://www.pexels.com/photo/woman-in-a-beige-suit-lifting-her-brown-hair-9514662/ |
| `portre-duz.jpg` | Şerit, galeri | Arash KH | https://www.pexels.com/photo/moody-contemporary-fashion-portrait-of-woman-38020514/ |
| `portre-beyaz.jpg` | Şerit, galeri | Andrea Musto | https://www.pexels.com/photo/elegant-portrait-of-woman-in-stylish-white-shirt-32213600/ |
| `sac-tarama.jpg` | Saç tasarımı | Oleskandra Biliak | https://www.pexels.com/photo/a-hairdresser-combing-clients-hair-23349912/ |
| `sac-fon.jpg` | Ana sayfa galeri önizleme | Deni Priyo | https://www.pexels.com/photo/close-up-of-women-hairdressing-10028673/ |
| `sac-fon-detay.jpg` | Şerit, galeri, randevu | cottonbro studio | https://www.pexels.com/photo/woman-in-black-and-gold-round-watch-3993467/ |
| `sac-makas.jpg` | Galeri | mths | https://www.pexels.com/photo/close-up-of-the-hands-of-a-hairdresser-at-work-6487888/ |
| `sac-kesim.jpg` | Şerit | cottonbro studio | https://www.pexels.com/photo/woman-getting-a-haircut-3993462/ |
| `sac-toka.jpg` | Şerit, galeri | jibarofoto | https://www.pexels.com/photo/clips-on-woman-hair-at-hairdresser-20092122/ |
| `sac-kesim-beyaz.jpg` | Salon: kuaför bölümü | Engin Akyurt | https://www.pexels.com/photo/person-cutting-hair-3356170/ |
| `erkek-kesim.jpg` | Kullanılmıyor (erkek hizmeti kapsam dışı) | Jari Lobo | https://www.pexels.com/photo/close-up-of-person-with-short-hair-getting-a-haircut-15659494/ |
| `erkek-studyo.jpg` | Kullanılmıyor (erkek hizmeti kapsam dışı) | Kawe Rodrigues | https://www.pexels.com/photo/barber-cutting-client-hair-19664876/ |
| `renk.jpg` | Galeri | cottonbro studio | https://www.pexels.com/photo/woman-getting-a-haircut-3993320/ |
| `aletler.jpg` | Salon: yaklaşım, galeri | N. Voitkevich | https://www.pexels.com/photo/black-and-white-hair-brush-8468143/ |
| `tirnak-bordo.jpg` | Tırnak, şerit, galeri | Polina Tankilevitch | https://www.pexels.com/photo/person-with-black-and-white-manicure-3738369/ |
| `tirnak-kirmizi.jpg` | Galeri | cottonbro studio | https://www.pexels.com/photo/person-with-red-nail-polish-3997384/ |
| `tirnak-bakim.jpg` | Tırnak, salon: güzellik bölümü | Polina Tankilevitch | https://www.pexels.com/photo/photo-of-person-s-hand-soak-in-water-3738378/ |
| `tirnak-koyu.jpg` | Galeri | svliiim | https://www.pexels.com/photo/elegant-hand-with-french-manicure-and-jewelry-34997574/ |
| `cilt-masaj.jpg` | Hydrafacial ve cilt bakımı, galeri | DΛVΞ GΛRCIΛ | https://www.pexels.com/photo/relaxing-facial-massage-at-spa-37240340/ |
| `cilt-maske.jpg` | Hydrafacial ve cilt bakımı, galeri | Denys Mikhalevych | https://www.pexels.com/photo/unrecognizable-beautician-removing-clay-mask-from-woman-face-12115040/ |
| `kirpik.jpg` | İpek kirpik, şerit, galeri | Ekaterina Bogdanova | https://www.pexels.com/photo/close-up-of-eyelash-extension-application-process-35013077/ |
| `kirpik-uygulama.jpg` | İpek kirpik, galeri | Kerim Eveyik | https://www.pexels.com/photo/close-up-of-eyelash-extension-procedure-36930354/ |
| `vucut.jpg` | G5, Infra Shape ve Emslim | Koolshooters | https://www.pexels.com/photo/a-woman-having-a-massage-6628611/ |
| `mekan-yikama.jpg` | Salon (mekân ilhamı), galeri | Max Vakhtbovych | https://www.pexels.com/photo/backwash-chair-in-contemporary-beauty-studio-7195812/ |
| `mekan-koltuk.jpg` | Şu an kullanılmıyor (yedek) | Max Vakhtbovych | https://www.pexels.com/photo/backwash-chairs-in-modern-beauty-salon-7195805/ |
| `mekan-aydinlik.jpg` | İletişim, galeri | Emirhan Sayar | https://www.pexels.com/photo/modern-hair-salon-interior-with-stylish-lighting-35844833/ |
| `mekan-ayna.jpg` | Salon (mekân ilhamı), galeri | Max Vakhtbovych | https://www.pexels.com/photo/photo-of-a-black-chair-and-a-mirror-with-a-ring-light-7750144/ |

Seçimde rakip salon portföyü, sosyal medya görseli ve belirgin marka logosu içeren kareler kullanılmadı.

Tipografi: Fraunces ve Outfit, Google Fonts üzerinden SIL Open Font License ile (`next/font` derleme sırasında indirip yerel sunar).
