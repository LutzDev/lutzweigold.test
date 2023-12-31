<template>
  <div ref="scope" class="relative h-30 bg-black xs:h-40 sm:h-50 md:h-60 lg:h-70 xl:h-80 2xl:h-90 3xl:h-95 4xl:h-100">
    <div
      class="absolute left-1/2 top-1/2 w-full origin-center -translate-x-1/2 -translate-y-1/2 md:-translate-y-[calc(50%+200px)]"
    >
      <div ref="target">
        <AtomsGrid :cols="1" y-gap="sm" class="origin-center rotate-12 scale-150">
          <div
            v-for="(item, key) in props.items"
            :key="key"
            :class="`${key % 2 === 0 ? 'translate-x-[50px]' : '-translate-x-[50px]'} row col-span-full`"
            :data-direction="key % 2 === 0 ? 'backward' : 'forward'"
          >
            <AtomsGrid :cols="3" :rows="1" x-gap="sm">
              <div class="col-span-1 h-10 xs:h-15 sm:h-20 md:h-25 lg:h-30 xl:h-35 2xl:h-40 3xl:h-45 4xl:h-50">
                <nuxt-picture
                  fit="cover"
                  format="webp"
                  width="1800"
                  height="1285"
                  densities="x1 x2"
                  :src="`images/${item.left.src}`"
                  :alt="$t(item.left.alt)"
                  :img-attrs="{
                    class: 'pointer-events-none touch-none object-cover h-full w-full',
                  }"
                />
              </div>
              <div class="col-span-1 h-10 xs:h-15 sm:h-20 md:h-25 lg:h-30 xl:h-35 2xl:h-40 3xl:h-45 4xl:h-50">
                <nuxt-picture
                  fit="cover"
                  format="webp"
                  width="1800"
                  height="1285"
                  densities="x1 x2"
                  :src="`images/${item.center.src}`"
                  :alt="$t(item.center.alt)"
                  :img-attrs="{
                    class: 'pointer-events-none touch-none object-cover h-full w-full',
                  }"
                />
              </div>
              <div class="col-span-1 h-10 xs:h-15 sm:h-20 md:h-25 lg:h-30 xl:h-35 2xl:h-40 3xl:h-45 4xl:h-50">
                <nuxt-picture
                  fit="cover"
                  format="webp"
                  width="1800"
                  height="1285"
                  densities="x1 x2"
                  :src="`images/${item.right.src}`"
                  :alt="$t(item.right.alt)"
                  :img-attrs="{
                    class: 'pointer-events-none touch-none object-cover h-full w-full',
                  }"
                />
              </div>
            </AtomsGrid>
          </div>
        </AtomsGrid>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ProjectSliderItem } from '@Types';
const { $gsap: gsap, $Power0: Power0 } = useNuxtApp();

const scope = ref();
const target = ref();
let mm: gsap.MatchMedia;
let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    mm = gsap.matchMedia();

    gsap.utils.toArray('.row').forEach((value) => {
      const row: HTMLElement = value as HTMLElement;

      mm.add(
        {
          isTablet: '(min-width: 768px)',
          isDesktop: '(min-width: 1024px)',
          isDisplay: '(min-width: 1920px)',
        },
        (context) => {
          const { isTablet, isDesktop, isDisplay } = context.conditions as gsap.Conditions;
          gsap.to(row, {
            x: () =>
              row.getAttribute('data-direction') === 'forward'
                ? `${isTablet ? '50' : isDesktop ? '75' : isDisplay ? '100' : 0}`
                : `${isTablet ? '-50' : isDesktop ? '-75' : isDisplay ? '-100' : 0}`,
            duration: 0.15,
            ease: Power0.easeNone,
            scrollTrigger: {
              trigger: scope.value,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }
      );
    });
    mm.add(
      {
        isTablet: '(min-width: 768px)',
      },
      () => {
        gsap.to(target.value, {
          y: 400,
          ease: Power0.easeInOut,
          scrollTrigger: {
            trigger: scope.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      }
    );
  }, scope.value);
});

onUnmounted(() => {
  ctx.revert();
});

const props = defineProps({
  items: {
    type: Array as PropType<Array<ProjectSliderItem>>,
    required: true,
  },
});
</script>
