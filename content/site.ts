/**
 * Sitenin TEK içerik kaynağı. Demoyu başka bir işletmeye uyarlarken önce bu dosya değişir.
 *
 * Kural: işletmeden doğrulanmamış bilgi uydurulmaz. Bilinmeyen alanlarda "[DOLDURULACAK: …]"
 * yer tutucusu kullanılır. Kaynaklar: research/adaylar.md (Google Haritalar ve Instagram, 2026-10-31).
 * `source: "dogrulanacak"` olan metinler konsept önerisidir; yayına almadan önce işletmeye onaylatılmalı.
 * Sağlık iddiası yazılmaz ("kalıcı", "garanti", "%100", "acısız" yok).
 */
import { photos } from "./photos";
import type { Faq, GalleryCategory, GalleryItem, Hours, Phone, Review, Service } from "./types";

export const business = {
  name: "Elina",
  /** Instagram profil adı: "ELİNA HAİR&BEAUTY"; Google kaydı: "Elina Beauty Studio" */
  displayName: "Elina Hair & Beauty",
  legalName: "Elina Beauty Studio",
  slug: "elina-beauty-studio",
  city: "Erzurum",
  district: "Palandöken",
  mall: {
    name: "Kervansaray AVM",
    /** Kat / mağaza no doğrulanmadı */
    floor: "[DOLDURULACAK: kat / mağaza no]",
    category: "Güzellik salonu",
    /** Google Haritalar kaydındaki adres */
    address: "Kervansaray AVM, Hüseyin Avni Ulaş Mh., 25070 Palandöken / Erzurum",
    /** Instagram biyografisindeki harita bağlantısı */
    directionsUrl: "https://maps.app.goo.gl/UscVDJyzmKPWPZqF6",
    directionsLabel: "Yol tarifi al",
    sourceUrl: "https://www.google.com/maps/place/Elina+Beauty+Studio/@39.8780831,41.2441018,17z",
  },
  geo: { lat: 39.8780831, lng: 41.2441018, plusCode: "V6HV+6J Palandöken, Erzurum" },
  /** Anahtarsız Google Maps gömme adresi (iframe) */
  mapEmbedUrl: "https://www.google.com/maps?q=Elina+Beauty+Studio,+Kervansaray+AVM,+Erzurum&output=embed",
  instagram: {
    handle: "@elinaabeautystudio",
    url: "https://www.instagram.com/elinaabeautystudio/",
  },
  phones: [
    {
      label: "Randevu ve bilgi",
      display: "0537 048 38 30",
      e164: "+905370483830",
      desk: "kuafor",
      source: "google",
      verifiedByOwner: false,
    },
  ] satisfies Phone[],
  /**
   * WhatsApp hattı: Google'daki cep numarası olduğu varsayıldı (yalnızca rakam, ülke koduyla).
   * Demo gösterilmeden önce numaranın WhatsApp'ta açık olduğu doğrulanmalı.
   */
  whatsapp: "905370483830" as string | null,
  whatsappVerified: false,
  /** WhatsApp'ta açılan varsayılan mesaj */
  whatsappMessage: "Merhaba, web sitenizden yazıyorum. Randevu ve fiyat bilgisi almak istiyorum.",
  /** Google'da yalnızca "Pazar 09:30 açılış" görüldü; tam saatler doğrulanmadı */
  hours: [
    { days: "Pazartesi – Cumartesi", time: "[DOLDURULACAK: saat]" },
    { days: "Pazar", time: "09:30 – [DOLDURULACAK: kapanış]" },
  ] satisfies Hours[],
  google: { rating: 4.8, reviewCount: 209, checkedAt: "2026-10-31" },
  website: null as string | null,
  /** Resmî logo kullanılmadı; sitede yazı logosu var */
  logo: null as string | null,
  foundedYear: null as number | null,
  /** Google yorumlarında saç tarafında Fatih Bey ve Adem Bey anılıyor; unvan ve onay alınmadan sitede ad yazılmaz */
  team: [
    { name: "[DOLDURULACAK: uzman adı]", role: "Saç tasarımı · renk ve ombre" },
    { name: "[DOLDURULACAK: uzman adı]", role: "Lazer ve cilt bakımı" },
    { name: "[DOLDURULACAK: uzman adı]", role: "Kirpik, kaş ve tırnak" },
  ],
} as const;

export const phoneSourceNote = "Numara Elina Beauty Studio'nun Google Haritalar kaydında yayımlanmıştır.";

export const nav = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/fiyatlar", label: "Fiyatlar" },
  { href: "/galeri", label: "Galeri" },
  { href: "/salon", label: "Salon" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const bookingNote = "Randevu, salonun WhatsApp'tan teyidiyle kesinleşir.";
export const inspirationLabel = "Temsilî görsel";
export const priceCta = "Fiyat al";
export const demo = { label: "Demo", note: "Bu sayfa Elina Hair & Beauty için hazırlanmış bir tasarım önizlemesidir; henüz işletme tarafından onaylanmamıştır." };

export const services: Service[] = [
  {
    slug: "sac-tasarimi",
    number: "01",
    title: "Saç tasarımı",
    category: "sac",
    desk: "kuafor",
    short: "Kesim, boya, ombre ve fön; saçınızın bugünkü hâlinden yola çıkan bir plan.",
    intro:
      "Kesimden renge saçla ilgili bütün işlemler. Ombre ve açma işlemlerinde saçın geçmişi konuşulmadan karar verilmez.",
    items: [
      { name: "Kesim ve fön", source: "instagram" },
      { name: "Boya", source: "instagram" },
      { name: "Ombre / balyaj", source: "google" },
      { name: "Saç bakımı", source: "dogrulanacak" },
    ],
    consultation: [
      "Son aylarda saçınıza yapılan boya, açma veya düzleştirme işlemleri",
      "Beğendiğiniz ya da kaçınmak istediğiniz renk örnekleri",
      "Günlük şekillendirmeye ayırabildiğiniz zaman",
    ],
    howItWorks:
      "Renk işlemlerinde önce saçın durumu incelenir, gerekirse tutam testi yapılır. Açma ve ombre, saçın kaldırabileceği tona göre bir ya da birkaç randevuya bölünebilir.",
    sessions: "Ombre ve renk değişimi genellikle tek uzun randevuda yapılır; süre saç boyu ve yoğunluğuna göre değişir.",
    notFor: [
      "Saç boyasına karşı bilinen alerjisi olanlar (uygulama öncesi test önerilir)",
      "Kafa derisinde aktif tahriş veya yara olanlar",
    ],
    photo: photos.sacTarama,
    secondaryPhoto: photos.portreHareket,
    source: "instagram",
    price: null,
    duration: null,
  },
  {
    slug: "lazer-epilasyon",
    number: "02",
    title: "Lazer epilasyon",
    category: "guzellik",
    desk: "guzellik",
    short: "Bölge bölge planlanan, cilt ve kıl tipinize göre ayarlanan seanslar.",
    intro:
      "Lazer epilasyonda ilk görüşmede cilt ve kıl tipi değerlendirilir, bölgeye göre seans aralığı planlanır.",
    items: [
      { name: "Tüm vücut", source: "dogrulanacak" },
      { name: "Bölgesel (koltuk altı, bacak, yüz …)", source: "dogrulanacak" },
    ],
    consultation: [
      "Kullandığınız ilaçlar ve bilinen cilt hassasiyetleri",
      "Son dönemde güneşlenme veya solaryum",
      "Daha önce aldığınız lazer seansları",
    ],
    howItWorks:
      "Uygulanacak bölge temizlenir, cihaz ayarları cilt ve kıl tipine göre yapılır. Kıllar büyüme döngüsünde farklı evrelerde olduğu için uygulama aralıklı seanslarla planlanır.",
    sessions: "Seans sayısı ve aralığı kişiye ve bölgeye göre ön görüşmede belirlenir. [DOLDURULACAK: salonun genel seans planı]",
    notFor: [
      "Gebelik ve emzirme dönemi",
      "Uygulama bölgesinde aktif enfeksiyon, açık yara veya yeni güneş yanığı",
      "Işığa duyarlılık yapan ilaç kullananlar (önce hekime danışılmalı)",
    ],
    note: "Bir sağlık durumunuz veya süren bir tedaviniz varsa uygulama öncesinde hekiminize danışın.",
    photo: photos.ciltMasaj,
    source: "instagram",
    price: null,
    duration: null,
  },
  {
    slug: "hydrafacial-cilt-bakimi",
    number: "03",
    title: "Hydrafacial ve cilt bakımı",
    category: "guzellik",
    desk: "guzellik",
    short: "Temizlik, peeling ve nem adımlarından oluşan, cildinizi dinleyerek başlayan bakım.",
    intro:
      "Cilt bakımı ve Hydrafacial, cilt tipinize ve o günkü ihtiyacınıza göre seçilir.",
    items: [
      { name: "Hydrafacial", source: "instagram" },
      { name: "Klasik cilt bakımı", source: "instagram" },
    ],
    consultation: [
      "Cilt tipiniz ve sizi en çok rahatsız eden konu",
      "Kullandığınız ürünler, asitler veya retinol",
      "Son dönemde gördüğünüz dermatolojik tedaviler",
    ],
    howItWorks:
      "Hydrafacial'da cilt vakum başlıklı bir cihazla temizlenir, hafif peeling uygulanır ve ardından nemlendirici serumlar verilir. Klasik bakımda adımlar cilt analizine göre belirlenir.",
    sessions: "Tek seans olarak alınabilir; düzenli bakım aralığı cilt durumuna göre önerilir.",
    notFor: [
      "Yüzde aktif sivilce iltihabı, açık yara veya enfeksiyon olanlar",
      "Yakın zamanda yüzüne kimyasal peeling, lazer veya dolgu yaptıranlar (önce danışın)",
    ],
    photo: photos.ciltMaske,
    secondaryPhoto: photos.ciltMasaj,
    source: "instagram",
    price: null,
    duration: null,
  },
  {
    slug: "vucut-bakimi",
    number: "04",
    title: "G5, Infra Shape ve Emslim",
    category: "guzellik",
    desk: "guzellik",
    short: "Vücut bakımı için cihaz destekli uygulamalar; seans planı ön görüşmede çıkarılır.",
    intro:
      "G5 masaj cihazı, Infra Shape ve Emslim, vücut bakımı tarafındaki cihaz destekli uygulamalardır. Bu sayfa bir sonuç ya da tedavi vaadi içermez.",
    items: [
      { name: "G5", source: "google" },
      { name: "Infra Shape", source: "google" },
      { name: "Emslim", source: "google" },
    ],
    consultation: [
      "Uygulamadan beklentiniz",
      "Bilinen sağlık durumunuz, gebelik veya kullandığınız ilaçlar",
      "Seans sıklığı ve haftalık programınız",
    ],
    howItWorks:
      "G5 titreşimli masaj başlıklarıyla uygulanır. Emslim kaslara elektromanyetik uyarı veren bir cihazdır. Infra Shape [DOLDURULACAK: salonun cihaz açıklaması]. Her uygulamanın bölgesi ve süresi görüşmede belirlenir.",
    sessions: "Genellikle haftalık seanslardan oluşan bir paket olarak planlanır. [DOLDURULACAK: paket seans sayısı]",
    notFor: [
      "Gebelik dönemi",
      "Kalp pili veya vücutta metal implant taşıyanlar (Emslim için)",
      "Uygulama bölgesinde varis, yara veya aktif enfeksiyon olanlar",
      "Kalp-damar rahatsızlığı olanlar (önce hekime danışılmalı)",
    ],
    note: "Bu uygulamalar tıbbi tedavi yerine geçmez. Sağlık durumunuzla ilgili bir sorunuz varsa önce hekiminize danışın.",
    photo: photos.vucut,
    source: "google",
    price: null,
    duration: null,
  },
  {
    slug: "ipek-kirpik-kas",
    number: "05",
    title: "İpek kirpik ve kaş",
    category: "guzellik",
    desk: "guzellik",
    short: "Doğal ya da belirgin; bakışınızı tamamlayan kirpik ve kaş tasarımı.",
    intro: "İpek kirpikte yoğunluk ve form yüz hatlarınıza göre seçilir.",
    items: [
      { name: "İpek kirpik", source: "instagram" },
      { name: "Kaş tasarımı", source: "dogrulanacak" },
    ],
    consultation: [
      "İstediğiniz görünüm: doğal mı, daha yoğun mu",
      "Göz çevresinde bilinen hassasiyet veya alerji",
      "Kontakt lens kullanıp kullanmadığınız",
    ],
    howItWorks:
      "Her doğal kirpiğe tek tek ipek kirpik tutturulur; gözler uygulama boyunca kapalıdır. Kaş tasarımında önce yüz oranına göre çizim yapılır.",
    sessions: "İlk uygulama tek randevudur; tazeleme aralığı salonla planlanır.",
    notFor: [
      "Göz çevresinde aktif enfeksiyon veya yakın zamanda göz ameliyatı geçirenler",
      "Kirpik yapıştırıcısına karşı bilinen alerjisi olanlar",
    ],
    photo: photos.kirpik,
    secondaryPhoto: photos.kirpikUygulama,
    source: "instagram",
    price: null,
    duration: null,
  },
  {
    slug: "tirnak",
    number: "06",
    title: "Tırnak",
    category: "guzellik",
    desk: "guzellik",
    short: "Manikür, pedikür ve tırnak tasarımı; ölçülü ya da iddialı, bakımlı bir bitiş.",
    intro: "Uygulama seçeneklerini ve renkleri salonla birlikte belirleyin.",
    items: [
      { name: "Manikür", source: "instagram" },
      { name: "Pedikür", source: "dogrulanacak" },
      { name: "Tırnak tasarımı", source: "instagram" },
    ],
    consultation: [
      "Tırnaklarınızın şu anki durumu ve önceki uygulamalar",
      "Tercih ettiğiniz uzunluk, form ve renk",
    ],
    howItWorks: "Tırnaklar şekillendirilir, kütiküller bakılır, ardından seçilen renk veya tasarım uygulanır.",
    sessions: "Tek randevu; tazeleme aralığı uygulama türüne göre değişir.",
    notFor: ["Tırnakta veya çevresinde mantar, enfeksiyon ya da açık yara olanlar"],
    photo: photos.tirnakBordo,
    secondaryPhoto: photos.tirnakBakim,
    source: "instagram",
    price: null,
    duration: null,
  },
  {
    slug: "makyaj",
    number: "07",
    title: "Makyaj",
    category: "guzellik",
    desk: "guzellik",
    short: "Nişan, düğün ve özel günler için yüzünüze göre makyaj.",
    intro: "Özel gün makyajında tarih ve saat önceden planlanır; prova talep edebilirsiniz.",
    items: [
      { name: "Özel gün makyajı", source: "instagram" },
      { name: "Gelin / nişan makyajı", source: "dogrulanacak" },
    ],
    consultation: [
      "Etkinliğin türü, saati ve kıyafetiniz",
      "Cilt hassasiyetleriniz ve kullandığınız ürünler",
    ],
    howItWorks: "Cilt hazırlığıyla başlar; renkler kıyafet ve ışığa göre seçilir.",
    sessions: "Tek randevu; gelin ve nişan için prova ayrıca planlanabilir.",
    notFor: ["Yüzde aktif cilt iltihabı olanlar (ürün seçimi için önce bilgi verin)"],
    photo: photos.portreDuz,
    source: "instagram",
    price: null,
    duration: null,
  },
];

export const serviceCategories = [
  { id: "sac", label: "Saç", desk: "kuafor" },
  { id: "guzellik", label: "Güzellik ve bakım", desk: "guzellik" },
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Salonun tek hattı var; bölüm ayrımı yapılmaz */
export function getPhone(desk?: Service["desk"]) {
  return business.phones.find((p) => p.desk === desk) ?? business.phones[0] ?? null;
}

/** Google yorumlarından kısa alıntılar (2026-10-31'de görüldü). Uydurma yorum eklenmez. */
export const reviews: Review[] = [
  {
    initials: "S. T.",
    text: "Çok çok memnun kaldım. Salondaki herkesin ilgisi, güleryüzlülüğü…",
    topic: "Ombre",
    when: "Temmuz 2026",
    source: "google",
  },
  {
    initials: "K. A.",
    text: "İlgi, alaka ve işçilik harika. Sonuçtan çok memnun kaldım.",
    topic: "Saç",
    when: "Ekim 2026",
    source: "google",
  },
  {
    initials: "M.",
    text: "Yaklaşık 1 aydır İnfra Shape, G5 ve Emslim uygulamalarına gidiyorum.",
    topic: "Vücut bakımı",
    when: "Nisan 2026",
    source: "google",
  },
];

export const faqs: Faq[] = [
  {
    q: "Fiyatları neden sitede tek tek göremiyorum?",
    a: "Lazer ve vücut uygulamalarında fiyat bölgeye ve seans sayısına göre değişir. Hangi işlemle ilgilendiğinizi WhatsApp'tan yazın, size net fiyatı iletelim.",
    source: "dogrulanacak",
  },
  {
    q: "Randevuyu nasıl alırım?",
    a: "Sayfadaki WhatsApp düğmesine dokunun; hizmeti ve size uyan günü yazmanız yeterli. Randevu salonun teyidiyle kesinleşir.",
    source: "dogrulanacak",
  },
  {
    q: "Lazer epilasyondan önce nelere dikkat etmeliyim?",
    a: "Uygulama öncesinde bölgeyi ağdayla almamanız ve güneşlenmemeniz önerilir. Kullandığınız ilaçları ilk görüşmede mutlaka belirtin.",
    source: "dogrulanacak",
  },
  {
    q: "Ombre için kaç saat ayırmalıyım?",
    a: "Saçın boyuna, yoğunluğuna ve önceki işlemlere göre değişir. Fotoğrafını gönderirseniz yaklaşık süreyi önceden söyleyebiliriz.",
    source: "dogrulanacak",
  },
  {
    q: "Salona nasıl gelirim, otopark var mı?",
    a: "Salon Palandöken'deki Kervansaray AVM içinde. [DOLDURULACAK: otopark ve kat bilgisi]",
    source: "dogrulanacak",
  },
  {
    q: "Ödeme seçenekleri neler?",
    a: "[DOLDURULACAK: nakit / kart / taksit bilgisi]",
    source: "dogrulanacak",
  },
];

/** Hijyen ve cihaz bölümü; cihaz marka/modelleri salondan alınacak */
export const hygiene = {
  source: "dogrulanacak" as const,
  title: "Temizlik ve cihazlar",
  points: [
    { title: "Tek kullanımlık malzeme", text: "[DOLDURULACAK: tek kullanımlık örtü, başlık, eldiven kullanımı]" },
    { title: "Alet sterilizasyonu", text: "[DOLDURULACAK: tırnak ve kirpik aletlerinin sterilizasyon yöntemi]" },
    { title: "Cihazlar", text: "Lazer, Hydrafacial, G5, Infra Shape ve Emslim. [DOLDURULACAK: marka / model]" },
  ],
};

export const galleryCategories: { id: GalleryCategory | "tumu"; label: string }[] = [
  { id: "tumu", label: "Tümü" },
  { id: "sac", label: "Saç" },
  { id: "tirnak", label: "Tırnak" },
  { id: "cilt-kirpik", label: "Cilt ve kirpik" },
  { id: "oncesi-sonrasi", label: "Öncesi / sonrası" },
  { id: "mekan", label: "Salon" },
];

export const gallery: GalleryItem[] = [
  { ...photos.portreHareket, category: "sac", caption: "Hacim ve hareket" },
  { ...photos.sacFonDetay, category: "sac", caption: "Fırçayla fön" },
  { ...photos.tirnakBordo, category: "tirnak", caption: "Koyu tonlar" },
  { ...photos.sacToka, category: "sac", caption: "Bölümleyerek çalışmak" },
  { ...photos.portreDuz, category: "sac", caption: "Düz ve parlak" },
  { ...photos.kirpik, category: "cilt-kirpik", caption: "Kirpik detayı" },
  { ...photos.mekanAyna, category: "mekan", caption: "Ayna başı" },
  { ...photos.renk, category: "sac", caption: "Renk uygulaması" },
  { ...photos.tirnakKoyu, category: "tirnak", caption: "Klasik bitiş" },
  { ...photos.ciltMasaj, category: "cilt-kirpik", caption: "Yüz bakımı" },
  { ...photos.portreDalgali, category: "sac", caption: "Doğal dalga" },
  { ...photos.mekanYikama, category: "mekan", caption: "Yıkama alanı" },
  { ...photos.sacMakas, category: "sac", caption: "Uç alımı" },
  { ...photos.tirnakKirmizi, category: "tirnak", caption: "Kırmızı" },
  { ...photos.kirpikUygulama, category: "cilt-kirpik", caption: "Kirpik uygulaması" },
  { ...photos.portreBeyaz, category: "sac", caption: "Uzun ve sade" },
  { ...photos.mekanAydinlik, category: "mekan", caption: "Akşam ışığı" },
  { ...photos.ciltMaske, category: "cilt-kirpik", caption: "Bakım maskesi" },
  { ...photos.aletler, category: "sac", caption: "Tezgâh" },
];

/** Öncesi / sonrası galerisi: salonun izinli gerçek fotoğrafları gelene kadar boş yer tutucu gösterilir */
export const beforeAfter = {
  source: "dogrulanacak" as const,
  slots: [
    { label: "Ombre", note: "[DOLDURULACAK: öncesi / sonrası fotoğraf, müşteri izniyle]" },
    { label: "Hydrafacial", note: "[DOLDURULACAK: öncesi / sonrası fotoğraf, müşteri izniyle]" },
    { label: "İpek kirpik", note: "[DOLDURULACAK: öncesi / sonrası fotoğraf, müşteri izniyle]" },
  ],
};

/** Ana sayfadaki dokunmatik şerit */
export const selectedFrames = [
  { ...photos.sacKesim, caption: "Islak kesim" },
  { ...photos.sacFonDetay, caption: "Fırçayla fön" },
  { ...photos.tirnakBordo, caption: "Koyu tonlar" },
  { ...photos.portreBeyaz, caption: "Uzun ve sade" },
  { ...photos.kirpik, caption: "Kirpik detayı" },
  { ...photos.sacToka, caption: "Bölümleyerek çalışmak" },
  { ...photos.portreDuz, caption: "Düz ve parlak" },
];

/**
 * Girişte seçilen bölüme göre değişen içerik (lib/bolum.ts).
 * Instagram adı "Hair & Beauty": salonda saç ve güzellik birlikte.
 */
export const bolumler = {
  kuafor: {
    id: "kuafor",
    label: "Saç",
    letter: "A",
    desk: "kuafor",
    category: "sac",
    galleryCategories: ["sac"],
    other: "guzellik",
    heroTitle: "Rengini birlikte",
    heroAccent: "seçelim.",
    lead: "Kesim, boya, ombre ve fön.",
    chooserText: "Kesim · boya · ombre · fön",
    cta: "Saç randevusu",
    photo: photos.hero,
    approachPhoto: photos.portreDalgali,
    servicesTitle: "Saç için.",
    frames: [
      { ...photos.sacKesim, caption: "Islak kesim" },
      { ...photos.portreBeyaz, caption: "Uzun ve sade" },
      { ...photos.sacFonDetay, caption: "Fırçayla fön" },
      { ...photos.portreDuz, caption: "Düz ve parlak" },
      { ...photos.sacToka, caption: "Bölümleyerek çalışmak" },
      { ...photos.renk, caption: "Renk uygulaması" },
      { ...photos.portreHareket, caption: "Hacim ve hareket" },
    ],
    preview: [photos.portreHareket, photos.sacMakas, photos.sacFon],
  },
  guzellik: {
    id: "guzellik",
    label: "Güzellik",
    letter: "B",
    desk: "guzellik",
    category: "guzellik",
    galleryCategories: ["tirnak", "cilt-kirpik"],
    other: "kuafor",
    heroTitle: "Bakımını",
    heroAccent: "planlayalım.",
    lead: "Lazer epilasyon, Hydrafacial, G5, Infra Shape, Emslim, kirpik, tırnak ve makyaj.",
    chooserText: "Lazer · Hydrafacial · G5 · kirpik · tırnak",
    cta: "Güzellik randevusu",
    photo: photos.ciltMasaj,
    approachPhoto: photos.kirpikUygulama,
    servicesTitle: "Güzellik ve bakım için.",
    frames: [
      { ...photos.ciltMaske, caption: "Bakım maskesi" },
      { ...photos.tirnakKirmizi, caption: "Kırmızı" },
      { ...photos.tirnakBakim, caption: "Manikür öncesi" },
      { ...photos.kirpik, caption: "Kirpik detayı" },
      { ...photos.tirnakKoyu, caption: "Klasik bitiş" },
    ],
    preview: [photos.ciltMasaj, photos.tirnakKoyu, photos.kirpik],
  },
} as const;

/** Seçim yapılmadığında (karma) kullanılan ana sayfa önizlemesi */
export const neutralPreview = [photos.portreHareket, photos.ciltMaske, photos.sacFon] as const;

/**
 * Yaklaşım metinleri. source: "dogrulanacak": salonun kendi ifadeleriyle değiştirilmeli.
 * Üstünlük iddiası, sayı veya sonuç vaadi içermez.
 */
export const approach = {
  source: "dogrulanacak" as const,
  title: "Önce konuşalım, sonra başlayalım.",
  lead: "İyi bir randevu, ne istediğinizi anlatabildiğiniz birkaç dakikayla başlar. Fotoğraf getirin, kaçınmak istediklerinizi söyleyin, aklınızdaki soruları sorun.",
  points: [
    { title: "Ön görüşme", text: "Saçınızın ya da cildinizin geçmişi, beklentiniz ve sağlık durumunuz konuşulur." },
    { title: "Plan", text: "İşlem ve gerekiyorsa seans planı birlikte belirlenir; fiyat baştan söylenir." },
    { title: "Sonrası", text: "Evde bakım ve bir sonraki randevu aralığı için öneri alırsınız." },
  ],
};

export const site = {
  title: "Elina Hair & Beauty · Kervansaray AVM, Palandöken / Erzurum",
  description:
    "Erzurum Palandöken Kervansaray AVM'de saç ve güzellik salonu: ombre, boya, lazer epilasyon, Hydrafacial, G5, Infra Shape, Emslim, ipek kirpik, tırnak ve makyaj. WhatsApp'tan randevu.",
  demoNote: demo.note,
};
