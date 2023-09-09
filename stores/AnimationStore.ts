import { gsap } from 'gsap';
export const useAnimationStore = defineStore('animation', () => {
  const master = shallowRef(
    gsap.timeline({
      paused: true,
      smoothChildTiming: true,
      onStart: () => console.log('start'),
      onComplete: () => test(),
      // onReverseComplete: () => test(),
    })
    /* .add('start', 0) */
  );

  const test = () => {
    console.log('-------------------------');
    console.log(master.value.getChildren(false));
    console.log('-------------------------');
  };

  return {
    master: { value: master, skipSerialize: true },
  };
});
