export type Project = {
    title: string;
    category: string;
    image: string;
    description: string;
    year: string;
    client: string;
  }
  
  export const PROJECTS: Project[] = [
    {
      title: "Müller Martini Diamant Installation",
      category: "Installation & Setup",
      image: "/images/Muller-Martini-Diamant-MC-35-7-scaled.webp",
      description:
        "Complete installation and calibration of Diamant hardcover system for major printing facility in Germany.",
      year: "2024",
      client: "PrintTech GmbH",
      sasa: 'test'
    },
    {
      title: "Kolbus RF Complete Overhaul",
      category: "Maintenance & Repair",
      image: "/images/x800_muellermartini-diamant-11862325.webp",
      description:
        "Full mechanical and electrical overhaul of Kolbus RF binding line with modernization and automation upgrades.",
      year: "2024",
      client: "Europa Binding SA",
    },
    {
      title: "Three-Knife Trimmer Upgrade",
      category: "Modernization",
      image: "/images/x800_muellermartini-zenith-s-450470.webp",
      description:
        "Technology upgrade for Esprit trimmer including automation systems and safety improvements.",
      year: "2023",
      client: "Nordic Print AS",
    },
    {
      title: "Emergency Production Line Repair",
      category: "Emergency Support",
      image: "/images/x800_muellermartini-diamant-12398885.webp",
      description:
        "24-hour emergency response for critical production line failure, restoring operations within deadline.",
      year: "2023",
      client: "FastPrint Industries",
    },
  ];