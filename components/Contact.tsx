"use client";

import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background with Gradient 123*/}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-primary-dark" />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="heading-lg mt-4 mb-6 text-white">
            Ready to Start Your <span className="text-secondary">Project?</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Contact us today and let's discuss how we can help with your
            machinery needs.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Top Row - QR Code and Form */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - QR Code */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              {/* QR Code Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Quick Call QR Code
                </h3>

                <div className="flex flex-col items-center">
                  {/* QR Code Placeholder */}
                  <div className="bg-white rounded-2xl p-4 md:p-6 mb-6">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=tel:+48666211626"
                      alt="QR Code - Call us"
                      className="w-48 h-48 md:w-64 md:h-64"
                    />
                  </div>

                  <p className="text-white font-semibold text-center mb-2">
                    Scan to Call Us Directly
                  </p>
                  <p className="text-gray-400 text-sm text-center">
                    Point your camera at the QR code to instantly call us
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/20 w-full">
                    <p className="text-gray-400 text-xs text-center mt-1">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <ContactForm />
            </motion.div>
          </div>

          {/* Bottom Row - Contact Information (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-lg border border-secondary/30 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Email */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                    <Mail className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Send Email</p>
                  <a
                    href="mailto:office@md-mechatronica.com"
                    className="text-white text-lg font-bold hover:text-primary transition-colors break-all">
                    office@md-mechatronica.com
                  </a>
                  <p className="text-gray-400 text-xs mt-2">
                    We'll respond within 24 hours
                  </p>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-all duration-300">
                    <MapPin className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Visit Our Office</p>
                  <p className="text-white font-bold text-lg">
                    Ul. Przedwiośnia 23
                    <br />
                    05-500 Piaseczno
                    <br />
                    Poland
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center">
          <p className="text-gray-300">
            Need immediate assistance? Scan the QR code above to call us
            directly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
