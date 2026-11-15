export const PRODUCTION_SITE_URL = "https://md-mechatronica.com";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;

  if (url) {
    return url.replace(/\/$/, "");
  }

  return PRODUCTION_SITE_URL;
}

export const SITE_NAME = "MD Mechatronica";

export const SITE_EMAIL = "office@md-mechatronica.com";

export const OG_IMAGE_PATH = "/headerBlackLogo.png";
