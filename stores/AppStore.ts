export const useAppStore = defineStore('app', () => {
  const isAppLoading = ref<Boolean>(true);

  const toggleLoading = (): void => {
    isAppLoading.value = !isAppLoading.value;
  };

  return {
    isAppLoading,
    toggleLoading,
  };
});
