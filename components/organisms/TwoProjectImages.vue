<template>
  <AtomsWrapper ref="scope" html-tag="section" y-padding="xl" class="bg-white">
    <template #default>
      <OrganismsTwoComponentsRow>
        <template #leftCol>
          <div ref="left" class="col-span-full overflow-hidden lg:-translate-y-[5%]">
            <nuxt-picture
              fit="cover"
              format="webp"
              densities="x1 x2"
              :src="props.leftImage?.src!"
              :alt="props.leftImage?.alt!"
              :img-attrs="{
                class: 'object-cover',
              }"
            />
          </div>
        </template>
        <template #rightCol>
          <div ref="right" class="col-span-full overflow-hidden lg:translate-y-[5%]">
            <nuxt-picture
              fit="cover"
              format="webp"
              densities="x1 x2"
              :src="props.rightImage?.src!"
              :alt="props.rightImage?.alt!"
              :img-attrs="{
                class: 'object-cover',
              }"
            />
          </div>
        </template>
      </OrganismsTwoComponentsRow>
    </template>
  </AtomsWrapper>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Wrapper from '~/components/atoms/Wrapper.vue';
import { Image } from '@Types';

const { $gsap: gsap, $Power0: Power0, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

let tl: gsap.core.Timeline;
const scope = ref<InstanceType<typeof Wrapper> | null>(null);
const left = ref<HTMLDivElement | null>(null);
const right = ref<HTMLDivElement | null>(null);
let mm: gsap.MatchMedia;
let ctx: gsap.Context;

const props = defineProps({
  leftImage: {
    type: Object as PropType<Image>,
    required: true,
  },
  rightImage: {
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
    mm = gsap.matchMedia();
    tl = gsap.timeline({
      data: { name: 'TWOPROJECTIMAGES' },
      paused: true,
      defaults: { ease: Power0.easeNone },
    });

    tl.to(
      left.value,
      {
        y: '5%',
        duration: 5,
      },
      0
    );

    tl.to(
      right.value,
      {
        y: '-5%',
        duration: 5,
      },
      0
    );

    mm.add('(min-width: 768px)', () => {
      ScrollTrigger.create({
        trigger: scope.value.target,
        scrub: true,
        animation: tl,
        refreshPriority: props.priority,
        markers: false,
      });
    });
  }, scope.value.target);
});

onUnmounted(() => {
  ctx.revert();
});
</script>
