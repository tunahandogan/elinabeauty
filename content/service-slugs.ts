/**
 * Hizmet detay sayfalarının adresleri. Bağımlılığı olmayan bu küçük dosya hem içerikte (content/site.ts)
 * hem de proxy.ts içinde kullanılır; yeni hizmet eklerken önce buraya slug eklenir.
 */
export const serviceSlugs = [
  "sac-tasarimi",
  "lazer-epilasyon",
  "hydrafacial-cilt-bakimi",
  "vucut-bakimi",
  "ipek-kirpik-kas",
  "tirnak",
  "makyaj",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];
