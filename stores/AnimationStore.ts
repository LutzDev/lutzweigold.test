import { gsap } from 'gsap';
export const useAnimationStore = defineStore('animation', () => {
  const master = shallowRef(
    gsap.timeline({
      paused: true,
      smoothChildTiming: true,
    })
  );

  const navigationMaster = shallowRef(
    gsap.timeline({
      paused: true,
      smoothChildTiming: true,
    })
  );

  return {
    master: { value: master, skipSerialize: true },
    navigationMaster: { value: navigationMaster, skipSerialize: true },
  };
});
