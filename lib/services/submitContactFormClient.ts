import {
  serviceOptions,
  type ContactFormValues,
} from '@/lib/schemas/contactFormSchema';

type SubmitContactFormResult =
  | { success: true }
  | { success: false; error: string };

export async function submitContactFormClient(
  data: ContactFormValues
): Promise<SubmitContactFormResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      success: false,
      error: 'Contact form is not configured yet. Please try again later.',
    };
  }

  const serviceLabel =
    serviceOptions.find((option) => option.value === data.service)?.label ?? data.service;

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: data.name,
        email: data.email,
        phone: data.phone || 'Not provided',
        service: serviceLabel,
        message: data.message,
        subject: `New inquiry from ${data.name}`,
        from_name: 'MD Mechatronica Website',
        botcheck: '',
      }),
    });

    const result = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !result.success) {
      return {
        success: false,
        error: result.message ?? 'Failed to send message. Please try again.',
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: 'Something went wrong. Please try again later.',
    };
  }
}
