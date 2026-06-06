"use client";

import { Wrench, Package, Settings, Zap, Shield, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  stats: string;
  bgImage: string;
}

// Slideshow component
function MachineSlideshow() {
  const images: string[] = [
    "/images/x800_muellermartini-diamant-11862325.webp",
    "/images/Muller-Martini-Diamant-MC-35-7-scaled.webp",
    "/images/muller-martini-diamant-mc-30.webp",
    "/images/x800_muellermartini-zenith-s-450470.webp",
    "/images/x800_muellermartini-zenith-s-450466.webp",
    "/images/x800_muellermartini-zenith-s-450467.webp",
    "/images/x800_muellermartini-zenith-s-460210.webp",
    "/images/thorium-APO0TCVHBv0-unsplash.jpg",
    "/images/futuristic-machinery-in-production-line.webp",
    "/images/1418887497_3.webp",
    "/images/x800_muellermartini-diamant-12398885.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 sekunde

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Machine ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-secondary w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const services: Service[] = [
  {
    icon: Wrench,
    title: "Machine Service & Repair",
    description:
      "Expert maintenance and repair of Müller Martini, Kolbus, and Hörauf printing machines. Fast response time and professional diagnostics.",
    features: ["Hardcover machines", "Three-knife trimmers", "Binding systems"],
    stats: "200+ repairs",
    bgImage: "/images/x800_muellermartini-diamant-11862325.webp",
  },
  {
    icon: Settings,
    title: "Installation & Dismantling",
    description:
      "Professional installation and relocation services for industrial machinery. Complete project management from start to finish.",
    features: ["Machine relocation", "Technical setup", "Safety compliance"],
    stats: "50+ installations",
    bgImage: "/images/Muller-Martini-Diamant-MC-35-7-scaled.webp",
  },
  {
    icon: Package,
    title: "Replacement Parts",
    description:
      "High-quality replacement parts for all major printing machine brands. Fast delivery and expert consultation.",
    features: ["Original parts", "Quality alternatives", "Fast delivery"],
    stats: "1000+ parts",
    bgImage: "/images/muller-martini-diamant-mc-30.webp",
  },
  {
    icon: Zap,
    title: "Emergency Support",
    description:
      "24/7 emergency support for critical machine failures. Minimize downtime with our rapid response team.",
    features: ["24/7 availability", "Remote diagnostics", "On-site service"],
    stats: "<2h response",
    bgImage: "/images/x800_muellermartini-zenith-s-450470.webp",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description:
      "Regular maintenance programs to prevent breakdowns and extend machine lifespan. Customized service plans.",
    features: [
      "Scheduled inspections",
      "Performance optimization",
      "Extended warranty",
    ],
    stats: "100+ contracts",
    bgImage: "/images/thorium-APO0TCVHBv0-unsplash.jpg",
  },
  {
    icon: Clock,
    title: "Modernization & Upgrades",
    description:
      "Upgrade older machines with modern technology. Improve efficiency and extend equipment life.",
    features: ["Technology updates", "Automation", "Performance boost"],
    stats: "30+ upgrades",
    bgImage: "/images/futuristic-machinery-in-production-line.webp",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            Comprehensive <span className="text-primary">Machine Service</span>{" "}
            Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From installation to maintenance, we provide complete support for
            your industrial machinery needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHovered: boolean = hoveredIndex === index;
            const isOtherHovered: boolean =
              hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  opacity: isOtherHovered ? 0.4 : 1,
                  filter: isOtherHovered ? "blur(2px) grayscale(50%)" : "none",
                  transition: "all 0.4s ease-in-out",
                }}
              >
                {/* Background Image - prikazuje se SAMO na hover */}
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                  <Image
                    src={service.bgImage as string}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                    aria-label={service.title}
                  />
                  {/* Gradient overlay - svetliji za bolju vidljivost */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-secondary-dark/60 to-primary/70" />
                </div>

                {/* Card Content */}
                <div
                  className={`relative p-8 h-full transition-all duration-300 ${isHovered ? "bg-transparent" : "bg-white shadow-lg border border-gray-100"}`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative transition-all duration-300 ${isHovered ? "bg-white/20 backdrop-blur-sm" : "bg-primary/10"}`}
                  >
                    <service.icon
                      className={`w-8 h-8 transition-colors duration-300 ${isHovered ? "text-white" : "text-primary"}`}
                    />
                  </div>

                  {/* Stats badge */}
                  <div className="absolute top-6 right-6">
                    <div
                      className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transition-all duration-300 ${isHovered ? "bg-white/20 text-white backdrop-blur-sm" : "bg-secondary text-white"}`}
                    >
                      {service.stats}
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${isHovered ? "text-white drop-shadow-lg" : "text-dark"}`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`mb-6 leading-relaxed font-medium transition-colors duration-300 ${isHovered ? "text-white drop-shadow-md" : "text-gray-600"}`}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-300 ${isHovered ? "bg-white" : "bg-secondary"}`}
                        />
                        <span
                          className={`transition-colors duration-300 font-medium ${isHovered ? "text-white drop-shadow-md" : "text-gray-700"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <div
                    className="mt-auto pt-6 border-t transition-colors duration-300"
                    style={{
                      borderColor: isHovered
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(229,231,235,1)",
                    }}
                  >
                    <a
                      href="#contact"
                      aria-label="Learn More"
                      className={`font-bold text-sm transition-colors inline-flex items-center ${isHovered ? "text-white drop-shadow-md" : "text-primary"}`}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Machine Expertise Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-primary via-primary-dark to-primary-dark rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  Our Expertise
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Printing Machine Maintenance Müller Martini
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                We service all generations and models with expert precision
              </p>
            </div>

            {/* Machine categories - 2 column layout */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 md:max-h-[600px]">
              {/* ALL MACHINES IN ONE CARD - LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 md:overflow-y-auto md:max-h-[600px]"
              >
                {/* HARDCOVER */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary uppercase tracking-wide">
                      Hardcover
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Diamant (all generations)",
                      "Ventura (all generations)",
                      "Collibri",
                      "Ribbon",
                      "Vesta",
                      "Kolbus RF",
                      "Kolbus BF",
                      "Hörauf Compact",
                      "Hörauf Universal",
                    ].map((machine) => (
                      <li
                        key={machine}
                        className="flex items-start space-x-3 group"
                      >
                        <div className="w-5 h-5 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary transition-colors">
                          <svg
                            className="w-3 h-3 text-secondary group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-white/90 group-hover:text-white transition-colors">
                          {machine}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TRIMMERS */}
                <div className="mb-6 pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary uppercase tracking-wide">
                      Trimmers
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Esprit",
                      "Merit",
                      "Zenith",
                      "Orbit",
                      "Solit",
                      "Kolbus HD",
                      "Granit",
                    ].map((machine: string) => (
                      <li
                        key={machine}
                        className="flex items-start space-x-3 group"
                      >
                        <div className="w-5 h-5 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary transition-colors">
                          <svg
                            className="w-3 h-3 text-secondary group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-white/90 group-hover:text-white transition-colors">
                          {machine}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BINDERS */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary uppercase tracking-wide">
                      Binders
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Acoro",
                      "Bolero",
                      "Corona",
                      "Pantera",
                      "Kolbus KM",
                      "Kolbus DA",
                      "Alegro",
                    ].map((machine: string) => (
                      <li
                        key={machine}
                        className="flex items-start space-x-3 group"
                      >
                        <div className="w-5 h-5 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary transition-colors">
                          <svg
                            className="w-3 h-3 text-secondary group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-white/90 group-hover:text-white transition-colors">
                          {machine}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* IMAGE SLIDESHOW - RIGHT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 relative h-64 md:h-[600px]"
              >
                <MachineSlideshow />
              </motion.div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="#contact"
                aria-label="Request Service Quote"
                className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span>Request Service Quote</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
