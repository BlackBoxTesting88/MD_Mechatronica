'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HERO_SLIDES } from '@/components/heroSlides';

type BackgroundSlideShowProps = {
  slides?: readonly string[];
};

export default function BackgroundSlideShow({
  slides = HERO_SLIDES,
}: BackgroundSlideShowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="absolute inset-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentIndex]}
            alt=""
            fill
            className="object-cover brightness-50"
            sizes="100vw"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
