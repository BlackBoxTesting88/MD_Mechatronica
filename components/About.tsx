'use client';

import { CheckCircle, Award, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About MD Mechatronica
            </span>
            <h2 className="heading-lg mt-4 mb-6">
              Leading Provider of <span className="text-primary">Industrial Machine</span> Services
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              MD Mechatronica, founded by Michał Dudek, is a trusted partner for companies 
              across Europe requiring professional maintenance, installation, and repair services 
              for complex industrial machinery.
            </p>
            {/* Additional Services */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary/10">
              <div className="space-y-3">
                {[
                  'We are able to repair also other machines',
                  'Programming',
                  'Modifications of existing lines',
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                'Certified technicians with 15+ years experience',
                'Specialized in Müller Martini, Kolbus & Hörauf',
                '24/7 emergency support across Europe',
                'Comprehensive warranty on all services',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-block">
              Work With Us
            </a>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-primary to-primary-dark rounded-xl overflow-hidden">
                  <img
                    src="/images/muller-martini-diamant-mc-30.webp"
                    alt="Industrial machinery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl overflow-hidden">
                  <img
                    src="/images/futuristic-machinery-in-production-line.webp"
                    alt="Futuristic production line"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-gradient-to-br from-primary-dark to-primary rounded-xl overflow-hidden">
                  <img
                    src="/images/thorium-APO0TCVHBv0-unsplash.jpg"
                    alt="Technical service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 bg-gradient-to-br from-secondary-dark to-secondary rounded-xl overflow-hidden">
                  <img
                    src="/images/shamin-kmrzmn-XJJ5oAZmnlI-unsplash.jpg"
                    alt="Installation work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border-4 border-secondary">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-dark">ISO</h4>
                  <p className="text-sm text-gray-600">Certified</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
