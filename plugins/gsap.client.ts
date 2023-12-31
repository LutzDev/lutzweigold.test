import { gsap, Power0, Power1, Power2, Power4 } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(SplitText, ScrambleTextPlugin, ScrollTrigger, ScrollSmoother, DrawSVGPlugin, ScrollToPlugin);
  }

  return {
    provide: {
      gsap,
      Power0,
      Power1,
      Power2,
      Power4,
      ScrollSmoother,
      ScrollTrigger,
      SplitText,
      ScrambleTextPlugin,
      DrawSVGPlugin,
      ScrollToPlugin,
    },
  };
});
