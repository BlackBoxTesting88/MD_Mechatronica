"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: t("home"), href: "#home" },
    { label: t("services"), href: "#services" },
    { label: t("about"), href: "#about" },
    { label: t("projects"), href: "#projects" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-xl py-3"
          : "bg-transparent py-5"
      }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4">
          <Image
            src="/logo.png"
            alt="MD Mechatronica"
            width={200}
            height={200}
            className="h-[120px] lg:h-[120px] w-auto object-contain transition-all duration-300 shrink-0"
            style={{ filter: isScrolled ? "none" : "brightness(0) invert(1)" }}
          />

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-secondary"
                }`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <LanguageSwitcher isScrolled={isScrolled} />
            <a
              href="mailto:office@md-mechatronica.com"
              className="btn-primary text-sm py-3 px-6 whitespace-nowrap">
              Get Quote
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher isScrolled={isScrolled} compact />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className={`p-2 ${isScrolled ? "text-dark" : "text-white"}`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <nav className="flex flex-col space-y-4 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-primary font-medium transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="mailto:office@md-mechatronica.com"
                  className="flex items-center space-x-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">office@md-mechatronica.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
