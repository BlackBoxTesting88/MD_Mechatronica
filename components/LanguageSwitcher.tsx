'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const languages = [
  { locale: 'en' as const, flag: '/flags/UnitedKingdom.png' },
  { locale: 'de' as const, flag: '/flags/Germany.png' },
  { locale: 'pl' as const, flag: '/flags/Poland.png' },
];

type LanguageSwitcherProps = {
  isScrolled?: boolean;
  compact?: boolean;
};

export default function LanguageSwitcher({
  isScrolled = false,
  compact = false,
}: LanguageSwitcherProps) {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const activeIndex = languages.findIndex((lang) => lang.locale === locale);
  const safeIndex = activeIndex >= 0 ? activeIndex : 0;

  const handleSwitch = (nextLocale: (typeof routing.locales)[number]) => {
    if (nextLocale !== locale) {
      router.replace(pathname, { locale: nextLocale });
    }
  };

  return (
    <div
      className={`relative grid grid-cols-3 rounded-full p-1 ${
        isScrolled || compact
          ? 'bg-gray-100/90 border border-gray-200/80'
          : 'bg-white/15 border border-white/25 backdrop-blur-sm'
      }`}
      role="group"
      aria-label="Language switcher"
    >
      <motion.div
        className={`absolute top-1 bottom-1 rounded-full shadow-sm ${
          isScrolled || compact ? 'bg-white' : 'bg-white/90'
        }`}
        initial={false}
        animate={{ x: `${safeIndex * 100}%` }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{ width: 'calc((100% - 0.5rem) / 3)', left: '0.25rem' }}
      />

      {languages.map((lang) => {
        const isActive = lang.locale === locale;

        return (
          <button
            key={lang.locale}
            type="button"
            onClick={() => handleSwitch(lang.locale)}
            aria-pressed={isActive}
            aria-label={t(lang.locale)}
            className={`relative z-10 flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${
              isActive
                ? isScrolled || compact
                  ? 'text-primary'
                  : 'text-primary'
                : isScrolled || compact
                  ? 'text-gray-500 hover:text-gray-700'
                  : 'text-white/80 hover:text-white'
            }`}
          >
            <Image
              src={lang.flag}
              alt=""
              width={18}
              height={18}
              className="h-4 w-4 rounded-full object-cover"
              aria-hidden
            />
            <span className={compact ? 'hidden sm:inline' : 'hidden md:inline'}>
              {t(lang.locale)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
