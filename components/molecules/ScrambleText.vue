<template>
  <div ref="wrapper">
    <div v-for="(item, key) in props.rows" :key="key">
      <AtomsScrambleTextItem v-if="props.title" :title="props.title" :delay="key" @timeline="handleEmit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ScrambleTextItem } from '@Types';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
const wrapper = ref<HTMLDivElement | null>(null);

const tl = shallowRef<gsap.core.Timeline>();
let ctx: gsap.Context;

const handleEmit = (value: ScrambleTextItem) => {
  tl.value?.add(value.tl, value.delay);
};

onBeforeMount(() => {
  tl.value = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1, smoothChildTiming: true });
});
onMounted(() => {
  ctx = gsap.context(() => {
    // TODO: Scrolltrigger not working on skill page
    ScrollTrigger.create({
      trigger: wrapper.value,
      toggleActions: 'play pause resume pause',
      animation: tl.value?.seek(gsap.utils.random(1, 3)),
      markers: false,
    });
  });
});

onUnmounted(() => {
  ctx.revert();
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  rows: {
    type: Number,
    default: 1,
    required: false,
  },
});
</script>
