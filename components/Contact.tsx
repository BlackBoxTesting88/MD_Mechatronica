'use client';

import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background with Gradient */}
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="heading-lg mt-4 mb-6 text-white">
            Ready to Start Your <span className="text-secondary">Project?</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Contact us today and let's discuss how we can help with your machinery needs.
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
              transition={{ duration: 0.6 }}
            >
              {/* QR Code Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Call QR Code</h3>
              
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
                  <p className="text-secondary font-bold text-center">
                    📱 +48 666 211 626
                  </p>
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
              transition={{ duration: 0.6 }}
            >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    >
                      <option className="bg-dark text-white">Machine Service & Repair</option>
                      <option className="bg-dark text-white">Installation & Dismantling</option>
                      <option className="bg-dark text-white">Replacement Parts</option>
                      <option className="bg-dark text-white">Emergency Support</option>
                      <option className="bg-dark text-white">Preventive Maintenance</option>
                      <option className="bg-dark text-white">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or machinery needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-gray-400 text-xs text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>
          </motion.div>
          </div>

          {/* Bottom Row - Contact Information (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-lg border border-secondary/30 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Phone */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-all duration-300">
                    <Phone className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Call Us Directly</p>
                  <a
                    href="tel:+48666211626"
                    className="text-white text-xl font-bold hover:text-secondary transition-colors"
                  >
                    +48 666 211 626
                  </a>
                  <p className="text-gray-400 text-xs mt-2">Available 24/7 for emergencies</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                    <Mail className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Send Email</p>
                  <a
                    href="mailto:office@md-mechatronica.com"
                    className="text-white text-lg font-bold hover:text-primary transition-colors break-all"
                  >
                    office@md-mechatronica.com
                  </a>
                  <p className="text-gray-400 text-xs mt-2">We'll respond within 24 hours</p>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-all duration-300">
                    <MapPin className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Visit Our Office</p>
                  <p className="text-white font-bold text-lg">
                    Ul. Przedwiośnia 23<br />
                    05-500 Piaseczno<br />
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
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-gray-300">
            <span>Need immediate assistance?</span>
            <a href="tel:+48666211626" className="text-secondary font-bold hover:underline inline-flex items-center">
              Call us now
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
