<template>
  <div ref="scope" class="relative h-30 overflow-hidden sm:h-40 md:h-50 lg:h-60 xl:h-70 2xl:h-75 3xl:h-80">
    <div ref="target" class="absolute bottom-0 h-[calc(100%+100px)] w-full">
      <nuxt-picture
        fit="cover"
        format="webp"
        densities="x1 x2"
        :src="props.image?.src!"
        :alt="$t(props.image?.alt!)"
        :img-attrs="{
          class: 'object-cover h-full w-full',
        }"
        @load="ScrollTrigger.refresh()"
      />
    </div>
    <div v-if="$slots.default" class="absolute left-0 top-0 h-full w-full bg-black/25">
      <AtomsWrapper class="h-full">
        <AtomsFlex class="h-full">
          <div class="self-end">
            <slot />
          </div>
        </AtomsFlex>
      </AtomsWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue/dist/vue';
import { Image } from '@Types';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const scope = ref<HTMLDivElement | null>(null);
const target = ref<HTMLDivElement | null>(null);
let ctx: gsap.Context;
let tl: gsap.core.Timeline;

const props = defineProps({
  image: {
    type: Object as PropType<Image>,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
});

onMounted(() => {
  ctx = gsap.context(() => {
    tl = gsap.timeline({
      data: { name: 'PROJECTVISUAL' },
      defaults: { ease: 'none' },
    });
    tl.to(target.value, {
      y: '100px',
    });

    ScrollTrigger.create({
      trigger: scope.value,
      scrub: true,
      animation: tl,
      refreshPriority: props.priority,
      markers: false,

      onRefresh: console.log('Prallax refreshed', props.priority),
    });
  }, scope.value!);
});

onUnmounted(() => {
  ctx.revert();
});
</script>
