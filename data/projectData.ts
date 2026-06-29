export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  client: string;
};

export const PROJECT_KEYS = [
  "diamant",
  "kolbus",
  "trimmer",
  "emergency",
] as const;

export type ProjectKey = (typeof PROJECT_KEYS)[number];

export const PROJECT_META: Record<
  ProjectKey,
  { image: string; year: string; client: string }
> = {
  diamant: {
    image: "/images/Collibri.webp",
    year: "2024",
    client: "PrintTech GmbH",
  },
  kolbus: {
    image: "/images/Alegro_SaudiArabia.webp",
    year: "2024",
    client: "Europa Binding SA",
  },
  trimmer: {
    image: "/images/Diamant.webp",
    year: "2023",
    client: "Nordic Print AS",
  },
  emergency: {
    image: "/images/Sorter.webp",
    year: "2023",
    client: "FastPrint Industries",
  },
};
