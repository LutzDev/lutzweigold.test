import { NavigationState } from '@Types';

export const useNavigationStore = defineStore('navigation', () => {
  const navigationState = reactive<NavigationState>({ menu: true, lang: false });

  const toggleNavigation = (): void => {
    navigationState.menu = !navigationState.menu;
    navigationState.lang = !navigationState.lang;
  };

  const openMenu = (): void => {
    navigationState.menu = true;
    navigationState.lang = false;
  };

  const openLang = (): void => {
    navigationState.menu = false;
    navigationState.lang = true;
  };

  return {
    navigationState,
    toggleNavigation,
    openMenu,
    openLang,
  };
});
