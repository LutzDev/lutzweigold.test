<template>
  <div ref="wrapper" class="relative col-span-2 row-span-6 row-start-1 hidden md:block">
    <div ref="text" class="text-title flex justify-end">
      <AtomsTitleText ref="el" class="inline-block translate-x-2 xl:translate-x-4 2xl:translate-x-8 4xl:translate-x-10">
        20
      </AtomsTitleText>
    </div>
  </div>
  <div
    v-for="(item, key) in props.items?.entries"
    :key="key"
    class="section col-span-full col-start-1 md:col-span-8 md:col-start-3"
  >
    <NuxtLink v-if="item.to" :to="item.to">
      <AtomsExperienceItem :year="items.year" :item="item" />
    </NuxtLink>
    <AtomsExperienceItem v-else :year="items.year" :item="item" />
    <div
      class="line col-span-full col-start-3 my-2 h-[2px] w-full origin-left scale-x-0 bg-black opacity-10 md:col-span-8"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Experience } from '@Types';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
const el = ref(null);
const { height } = useElementSize(el);

const wrapper = ref<HTMLDivElement | null>(null);
const text = ref<HTMLDivElement | null>(null);

let ctx: gsap.Context;
let trigger: ScrollTrigger[];

const props = defineProps({
  items: {
    type: Object as PropType<Experience>,
    required: true,
  },
});

onMounted(() => {
  ctx = gsap.context(() => {
    const mm: gsap.MatchMedia = gsap.matchMedia();
    const sections: HTMLElement[] = gsap.utils.toArray('.section');

    mm.add('(min-width: 640px)', () => {
      ScrollTrigger.create({
        trigger: wrapper.value,
        start: 'top 70%',
        endTrigger: sections[sections.length - 1],
        end: 'top 70%',
        markers: false,
        pin: text.value,
        pinSpacing: false,
      });
    });

    trigger = ScrollTrigger.batch(sections, {
      start: () => `top 70%+=${height.value / 2}px`,
      end: () => `bottom 70%+=${height.value / 2}px`,
      onEnter: (batch) => {
        gsap.to(gsap.utils.selector(batch)('.line'), { scaleX: 1, autoAlpha: 1, duration: 0.5, overwrite: true });
      },
      onLeave: (batch) => {
        gsap.to(gsap.utils.selector(batch)('.line'), { scaleX: 1, autoAlpha: 0.1, duration: 0.5, overwrite: true });
      },
      onEnterBack: (batch) => {
        gsap.to(gsap.utils.selector(batch)('.line'), { scaleX: 1, autoAlpha: 1, duration: 0.5, overwrite: true });
      },
      onLeaveBack: (batch) => {
        gsap.to(gsap.utils.selector(batch)('.line'), { scaleX: 1, autoAlpha: 0.1, duration: 0.5, overwrite: true });
      },
    });
  });
});

watch(height, () => {
  trigger.map((el) => el.refresh());
});

onUnmounted(() => {
  ctx.revert();
});
</script>
