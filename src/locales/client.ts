import { createI18nClient } from "next-international/client";

export const { useI18n, useScopedI18n, I18nProviderClient, useCurrentLocale } =
  createI18nClient({
    en: () => import("@/dictionaries/en"),
    ar: () => import("@/dictionaries/ar"),
  });
