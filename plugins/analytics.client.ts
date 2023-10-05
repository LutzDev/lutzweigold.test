export default defineNuxtPlugin(() => {
  // example: initialization based on enabled cookies
  const cookieControl = useCookieControl();
  const { grantConsent } = useGtag();

  if (cookieControl.cookiesEnabledIds.value?.includes('google-analytics')) {
    grantConsent(); // placeholder for your custom initialization
  }
});
