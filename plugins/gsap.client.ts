import { gsap, Power0, Power4 } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(SplitText, ScrambleTextPlugin, ScrollTrigger, ScrollSmoother);
  }

  return {
    provide: {
      gsap,
      Power0,
      Power4,
      ScrollSmoother,
      ScrollTrigger,
      SplitText,
      ScrambleTextPlugin,
    },
  };
});
