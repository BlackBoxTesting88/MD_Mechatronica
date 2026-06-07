import { z } from 'zod';

export const serviceValues = [
  'machine-service',
  'installation',
  'replacement-parts',
  'emergency-support',
  'preventive-maintenance',
  'other',
] as const;

export const serviceOptions = [
  { value: 'machine-service', label: 'Machine Service & Repair' },
  { value: 'installation', label: 'Installation & Dismantling' },
  { value: 'replacement-parts', label: 'Replacement Parts' },
  { value: 'emergency-support', label: 'Emergency Support' },
  { value: 'preventive-maintenance', label: 'Preventive Maintenance' },
  { value: 'other', label: 'Other' },
] as const satisfies readonly { value: (typeof serviceValues)[number]; label: string }[];

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || /^[+]?[\d\s()-]{7,20}$/.test(value),
      'Please enter a valid phone number'
    ),
  service: z.enum(serviceValues, {
    message: 'Please select a service type',
  }),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
