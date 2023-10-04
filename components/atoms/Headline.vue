<template>
  <component
    :is="props.htmlTag"
    ref="headline"
    class="opacity-0"
    :class="` ${
      props.htmlTag === 'h1'
        ? 'first-headline'
        : props.htmlTag === 'h2'
        ? 'second-headline '
        : props.htmlTag === 'h3'
        ? 'third-headline'
        : 'fourth-headline'
    } ${props.theme === 'light' ? 'text-black' : 'text-white'}`"
    ><slot />
  </component>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { HeadlineTag, Theme } from '@Types';
const { $gsap: gsap, $Power4: Power4, $SplitText: SplitText, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
const modalStore = useModalStore();
const { isModalOpen } = storeToRefs(modalStore);

let tl: gsap.core.Timeline;
let ctx: gsap.Context;
const headline = ref<HTMLElement | null>(null);

onMounted(() => {
  ctx = gsap.context(() => {
    tl = gsap.timeline({
      defaults: { ease: Power4.easeInOut, duration: 1.5 },
    });

    const text = new SplitText(headline.value, {
      types: 'lines, words',
      linesClass: 'overflow-hidden',
      wordsClass: 'translate-y-full',
    });

    tl.to(text.words, {
      y: '0',
      stagger: 0.05,
    });

    tl.to(
      headline.value,
      {
        opacity: 1,
      },
      '<'
    );

    watch(
      () => isModalOpen.value,
      (newValue) => {
        if (newValue) {
          tl.play();
        } else {
          tl.reverse();
        }
      },
      { immediate: true }
    );
  });
});

onUnmounted(() => {
  ctx.revert();
});

const props = defineProps({
  htmlTag: {
    type: String as PropType<HeadlineTag>,
    required: true,
    default: 'h1',
  },
  theme: {
    type: String as PropType<Theme>,
    default: 'light',
    required: false,
  },
});
</script>
