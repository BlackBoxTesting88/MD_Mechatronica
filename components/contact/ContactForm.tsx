'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import FormInput from '@/components/ui/FormInput';
import FormSelect from '@/components/ui/FormSelect';
import { submitContactFormClient } from '@/lib/services/submitContactFormClient';
import {
  contactFormSchema,
  serviceOptions,
  type ContactFormValues,
} from '@/lib/schemas/contactFormSchema';

export default function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
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

    const result = await submitContactFormClient(data);

    if (result.success) {
      setSubmitSuccess(true);
      reset();
      return;
    }

    setSubmitError(result.error);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full flex flex-col">
      <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

      {submitSuccess ? (
        <div className="flex flex-1 flex-col items-center justify-center text-center py-8">
          <CheckCircle2 className="w-16 h-16 text-secondary mb-4" />
          <p className="text-xl font-semibold text-white mb-2">Message sent successfully!</p>
          <p className="text-gray-300 mb-6">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className="text-secondary hover:text-secondary-dark font-semibold transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div className="grid md:grid-cols-2 gap-5">
            <FormInput
              id="name"
              label="Full Name *"
              placeholder="John Doe"
              autoComplete="name"
              error={errors.name?.message}
              {...register('name')}
            />
            <FormInput
              id="email"
              type="email"
              label="Email Address *"
              placeholder="john@example.com"
              autoComplete="email"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <FormInput
              id="phone"
              type="tel"
              label="Phone Number"
              placeholder="+48 123 456 789"
              autoComplete="tel"
              error={errors.phone?.message}
              {...register('phone')}
            />
            <FormSelect
              id="service"
              label="Service Type"
              options={serviceOptions}
              error={errors.service?.message}
              {...register('service')}
            />
          </div>

          <FormInput
            id="message"
            multiline
            rows={5}
            label="Your Message *"
            placeholder="Tell us about your project or machinery needs..."
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
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-gray-400 text-xs text-center">
            We respect your privacy. Your information will never be shared.
          </p>
        </form>
      )}
    </div>
  );
}
