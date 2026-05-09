'use client';

import { ArrowRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Hero Background Slideshow
function HeroBackgroundSlideshow() {
  const images = [
    '/images/mechanical-engineering-project.webp',
    '/images/futuristic-machinery-in-production-line.webp',
    '/images/thorium-APO0TCVHBv0-unsplash.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 sekundi

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${images[currentIndex]}')`,
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/75 to-dark/60 z-10" />
        <HeroBackgroundSlideshow />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 py-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
            <div className="inline-block mb-4">
              <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                Professional Machine Service Since 2010
              </span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              Expert Installation &{' '}
              <span className="text-secondary">Maintenance</span> of Industrial Machinery
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Specialized in Müller Martini, Kolbus, and Hörauf printing machines. 
              We provide comprehensive installation, repair, and maintenance services 
              across Europe with over 15 years of experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-dark inline-flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Our Services</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">15+</h3>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
                <p className="text-gray-400 text-sm">Projects Done</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
