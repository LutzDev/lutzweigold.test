export const useModalStore = defineStore('modal', () => {
  const isModalOpen = ref<Boolean>(true);

  const toggleModal = (): void => {
    isModalOpen.value = !isModalOpen.value;
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
  };
});
