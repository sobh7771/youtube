"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProviderClient, useCurrentLocale } from "@/locales/client";
import { Locale } from "../../../../i18n.config";
import en from "@/dictionaries/en";

const queryClient = new QueryClient({ defaultOptions: { queries: {} } });

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const locale = useCurrentLocale();
  return (
    <I18nProviderClient locale={locale as Locale} fallbackLocale={en}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </I18nProviderClient>
  );
};

export default Providers;
