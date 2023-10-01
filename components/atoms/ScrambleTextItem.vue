<template>
  <div ref="target" class="text-body text-secondary-300">
    {{ props.title }}
  </div>
</template>

<script setup lang="ts">
import { ScrambleTextItem } from '@Types';

const { $gsap: gsap, $Power4: Power4, $SplitText: SplitText } = useNuxtApp();
const target = ref<HTMLDivElement | null>(null);

let tl: gsap.core.Timeline;
let ctx: gsap.Context;
let shuffleCharArray: Array<any>;

const emit = defineEmits<{
  (e: 'timeline', value: ScrambleTextItem): void;
}>();

onMounted(() => {
  ctx = gsap.context(() => {
    const text = new SplitText(target.value, { types: 'chars', charsClass: 'opacity-0' });
    shuffleCharArray = useShuffle(Array.from(text.chars));
    tl = gsap.timeline({
      repeatDelay: 1,
      defaults: { ease: Power4.easeInOut, duration: 1 },
    });

    tl.set(text.chars, {
      opacity: '1',
      stagger: 0.05,
    });
    tl.set(
      shuffleCharArray,
      {
        opacity: '0',
        stagger: 0.05,
      },
      '+=0.5'
    );
    tl.set(
      text.chars,
      {
        opacity: '1',
        stagger: 0.05,
      },
      '-=0'
    );
    tl.set(text.chars, {
      opacity: '0',
      stagger: 0.05,
    });
  });
  emit('timeline', { tl, delay: Number(props.delay) / 4 });
});

onUnmounted(() => {
  ctx.revert();
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  delay: {
    type: Number,
    default: 0,
    required: false,
  },
});
</script>
