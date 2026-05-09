'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Building2, Users, Award, Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';

function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString();
      }
    });
    return () => unsubscribe();
  }, [rounded]);

  return <span ref={ref}>{from}</span>;
}

const stats = [
  {
    icon: Building2,
    number: 500,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Successfully delivered',
  },
  {
    icon: Users,
    number: 200,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Across Europe',
  },
  {
    icon: Award,
    number: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'In the industry',
  },
  {
    icon: Globe,
    number: 10,
    suffix: '+',
    label: 'Countries Served',
    description: 'International reach',
  },
];

export default function Stats() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-2xl">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-5xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                <Counter to={stat.number} duration={2.5} />
                <span>{stat.suffix}</span>
              </h3>
              <p className="text-xl font-semibold text-gray-800 mb-1">
                {stat.label}
              </p>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
