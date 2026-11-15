'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import FormInput from '@/components/ui/FormInput';
import FormSelect from '@/components/ui/FormSelect';
import { submitContactFormClient } from '@/lib/services/submitContactFormClient';
import {
  createContactFormSchema,
  serviceValues,
  type ContactFormValues,
} from '@/lib/schemas/contactFormSchema';

export default function ContactForm() {
  const t = useTranslations('Contact');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const schema = useMemo(
    () =>
      createContactFormSchema({
        nameMin: t('validation.nameMin'),
        nameMax: t('validation.nameMax'),
        emailRequired: t('validation.emailRequired'),
        emailInvalid: t('validation.emailInvalid'),
        phoneInvalid: t('validation.phoneInvalid'),
        serviceRequired: t('validation.serviceRequired'),
        messageMin: t('validation.messageMin'),
        messageMax: t('validation.messageMax'),
      }),
    [t]
  );

  const serviceOptions = useMemo(
    () =>
      serviceValues.map((value) => ({
        value,
        label: t(`services.${value}`),
      })),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: 'machine-service',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);
    setSubmitSuccess(false);

    const result = await submitContactFormClient(data, {
      serviceLabel: t(`services.${data.service}`),
      phoneNotProvided: t('phoneNotProvided'),
      errors: {
        notConfigured: t('errors.notConfigured'),
        sendFailed: t('errors.sendFailed'),
        generic: t('errors.generic'),
      },
    });

    if (result.success) {
      setSubmitSuccess(true);
      reset();
      return;
    }

    setSubmitError(result.error);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full flex flex-col">
      <h3 className="text-2xl font-bold text-white mb-6">{t('formTitle')}</h3>

      {submitSuccess ? (
        <div className="flex flex-1 flex-col items-center justify-center text-center py-8">
          <CheckCircle2 className="w-16 h-16 text-secondary mb-4" />
          <p className="text-xl font-semibold text-white mb-2">
            {t('formSuccessTitle')}
          </p>
          <p className="text-gray-300 mb-6">{t('formSuccessMessage')}</p>
          <button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className="text-secondary hover:text-secondary-dark font-semibold transition-colors"
          >
            {t('formSendAnother')}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div className="grid md:grid-cols-2 gap-5">
            <FormInput
              id="name"
              label={t('formNameLabel')}
              placeholder={t('formNamePlaceholder')}
              autoComplete="name"
              error={errors.name?.message}
              {...register('name')}
            />
            <FormInput
              id="email"
              type="email"
              label={t('formEmailLabel')}
              placeholder={t('formEmailPlaceholder')}
              autoComplete="email"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <FormInput
              id="phone"
              type="tel"
              label={t('formPhoneLabel')}
              placeholder={t('formPhonePlaceholder')}
              autoComplete="tel"
              error={errors.phone?.message}
              {...register('phone')}
            />
            <FormSelect
              id="service"
              label={t('formServiceLabel')}
              options={serviceOptions}
              error={errors.service?.message}
              {...register('service')}
            />
          </div>

          <FormInput
            id="message"
            multiline
            rows={5}
            label={t('formMessageLabel')}
            placeholder={t('formMessagePlaceholder')}
            error={errors.message?.message}
            {...register('message')}
          />

          {submitError && (
            <p className="text-sm text-red-400 text-center" role="alert">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{t('formSubmitting')}</span>
              </>
            ) : (
              <>
                <span>{t('formSubmit')}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-gray-400 text-xs text-center">{t('formPrivacy')}</p>
        </form>
      )}
    </div>
  );
}
