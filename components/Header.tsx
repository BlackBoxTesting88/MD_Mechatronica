'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-xl py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="/logo.png"
              alt="MD Mechatronica"
              className="h-16 md:h-20 w-auto object-contain transition-all duration-300"
              style={{
                filter: isScrolled ? 'none' : 'brightness(0) invert(1)',
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white hover:text-secondary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-6">
            <a
              href="tel:+48666211626"
              className={`flex items-center space-x-2 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+48 666 211 626</span>
            </a>
            <a
              href="mailto:office@md-mechatronica.com"
              className="btn-primary text-sm py-3 px-6"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-dark' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <nav className="flex flex-col space-y-4 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+48666211626"
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+48 666 211 626</span>
                </a>
                <a
                  href="mailto:office@md-mechatronica.com"
                  className="flex items-center space-x-2 text-gray-700"
                >
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
