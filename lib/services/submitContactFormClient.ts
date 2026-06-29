import type { ContactFormValues } from '@/lib/schemas/contactFormSchema';

type SubmitContactFormOptions = {
  serviceLabel: string;
  phoneNotProvided: string;
  errors: {
    notConfigured: string;
    sendFailed: string;
    generic: string;
  };
};

type SubmitContactFormResult =
  | { success: true }
  | { success: false; error: string };

export async function submitContactFormClient(
  data: ContactFormValues,
  options: SubmitContactFormOptions
): Promise<SubmitContactFormResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      success: false,
      error: options.errors.notConfigured,
    };
  }

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
        phone: data.phone || options.phoneNotProvided,
        service: options.serviceLabel,
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
        error: result.message ?? options.errors.sendFailed,
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: options.errors.generic,
    };
  }
}
