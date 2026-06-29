import { ArrowRight, Play } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import BackgroundSlideShow from './sub-components/backgroundSlideShow';
import { HERO_SLIDES } from './heroSlides';

export default async function Hero() {
  const t = await getTranslations('Hero');

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
              {t('badge')}
            </span>
          </div>

          <h1 className="heading-xl text-white mb-6">
            {t('title')}{' '}
            <span className="text-secondary">{t('titleHighlight')}</span>{' '}
            {t('titleSuffix')}
          </h1>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {t('description')}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center space-x-2"
              aria-label={t('ctaPrimaryAria')}
            >
              <span>{t('ctaPrimary')}</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-dark inline-flex items-center space-x-2"
              aria-label={t('ctaSecondaryAria')}
            >
              <Play className="w-5 h-5" aria-hidden="true" />
              <span>{t('ctaSecondary')}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
            <div>
              <p className="text-4xl font-bold text-white mb-2">15+</p>
              <p className="text-gray-400 text-sm">{t('statYears')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-gray-400 text-sm">{t('statProjects')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">100%</p>
              <p className="text-gray-400 text-sm">{t('statSatisfaction')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
