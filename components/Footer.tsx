
import { Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src={logo}
                alt="MD Mechatronica"
                className="h-16 w-auto object-contain mb-4"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Leading provider of industrial machinery installation, maintenance, and repair services. 
              Specialized in Müller Martini, Kolbus, and Hörauf printing equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Projects', 'Contact'].map((link:string) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-secondary transition-colors"
                    aria-label={`Go to ${link} section`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-1" aria-label="Email" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:office@md-mechatronica.com"
                    className="text-white hover:text-secondary transition-colors break-all"
                    aria-label="Email: office@md-mechatronica.com"
                  >
                    office@md-mechatronica.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" aria-label="Address" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Address</p>
                  <p className="text-white">
                    Ul. Przedwiośnia 23<br />
                    05-500 Piaseczno, Poland
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} MD Mechatronica Michał Dudek. All rights reserved. NIP: 5272245741
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
