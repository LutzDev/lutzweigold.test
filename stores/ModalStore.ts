import { ScrollSmoother } from 'gsap/ScrollSmoother';

export const useModalStore = defineStore('modal', () => {
  const isModalOpen = ref<Boolean>(true);
  const smoother = ref<ScrollSmoother>();

  const toggleModal = (): void => {
    isModalOpen.value = !isModalOpen.value;
    if (isModalOpen.value) {
      smoother.value?.paused(false);
    }
  };

  const openModal = (): void => {
    isModalOpen.value = true;
  };

  const closeModal = (): void => {
    isModalOpen.value = false;
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
    smoother,
  };
});
