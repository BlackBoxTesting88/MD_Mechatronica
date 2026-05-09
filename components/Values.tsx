'use client';

import { Heart, Zap, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Heart,
    number: '01',
    title: 'Honesty',
    description: 'Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.',
  },
  {
    icon: Zap,
    number: '02',
    title: 'Passion',
    description: 'Success is when we can achieve results in the things we are passionate about and feel as though we are making a difference.',
  },
  {
    icon: Shield,
    number: '03',
    title: 'Quality Work',
    description: 'We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support and accessibility.',
  },
  {
    icon: Users,
    number: '04',
    title: 'Dedication',
    description: 'Our dedicated team works tirelessly to ensure every project meets the highest standards of excellence and customer satisfaction.',
  },
];

export default function Values() {
  return (
    <section className="section-padding bg-gradient-to-br from-dark via-dark-light to-dark">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Core Values
          </span>
          <h2 className="heading-lg mt-4 mb-6 text-white">
            What Drives Us <span className="text-secondary">Forward</span>
          </h2>
          <p className="text-gray-300 text-lg">
            At MD Mechatronica, we rely on honesty, discipline and hard work. Our success is 
            attributed to upholding a simple set of core values.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-secondary/50">
                {/* Number */}
                <div className="text-6xl font-bold text-white/10 mb-4 group-hover:text-secondary/20 transition-colors">
                  {value.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
