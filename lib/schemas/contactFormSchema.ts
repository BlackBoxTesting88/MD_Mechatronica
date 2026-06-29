import { z } from 'zod';

export const serviceValues = [
  'machine-service',
  'installation',
  'replacement-parts',
  'emergency-support',
  'preventive-maintenance',
  'other',
] as const;

export type ServiceValue = (typeof serviceValues)[number];

export type ContactFormValidationMessages = {
  nameMin: string;
  nameMax: string;
  emailRequired: string;
  emailInvalid: string;
  phoneInvalid: string;
  serviceRequired: string;
  messageMin: string;
  messageMax: string;
};

export function createContactFormSchema(messages: ContactFormValidationMessages) {
  return z.object({
    name: z
      .string()
      .trim()
      .min(2, messages.nameMin)
      .max(100, messages.nameMax),
    email: z
      .string()
      .trim()
      .min(1, messages.emailRequired)
      .email(messages.emailInvalid),
    phone: z
      .string()
      .trim()
      .optional()
      .refine(
        (value) => !value || /^[+]?[\d\s()-]{7,20}$/.test(value),
        messages.phoneInvalid
      ),
    service: z.enum(serviceValues, {
      message: messages.serviceRequired,
    }),
    message: z
      .string()
      .trim()
      .min(10, messages.messageMin)
      .max(2000, messages.messageMax),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>;
