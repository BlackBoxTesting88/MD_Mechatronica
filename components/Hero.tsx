import { ArrowRight, Play } from 'lucide-react';
import BackgroundSlideShow from './sub-components/backgroundSlideShow';
import { HERO_SLIDES } from './heroSlides';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/75 to-dark/60 z-10" />
        <BackgroundSlideShow slides={HERO_SLIDES} />
      </div>

      <div className="container-custom relative z-20 py-32">
        <div className="hero-enter">
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
            <a
              href="#services"
              className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-dark inline-flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Our Services</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
            <div>
              <p className="text-4xl font-bold text-white mb-2">15+</p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-gray-400 text-sm">Projects Done</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">100%</p>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
