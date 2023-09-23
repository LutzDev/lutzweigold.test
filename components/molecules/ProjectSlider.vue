<template>
  <div ref="scope" class="relative h-30 bg-black xs:h-40 sm:h-50 md:h-60 lg:h-70 xl:h-80 2xl:h-90 3xl:h-95 4xl:h-100">
    <div class="absolute left-1/2 top-1/2 w-full origin-center -translate-x-1/2 -translate-y-[calc(50%+200px)]">
      <div ref="target">
        <AtomsGrid :cols="1" y-gap="sm" class="origin-center rotate-12 scale-150">
          <div
            v-for="(index, key) in props.items"
            :key="key"
            :class="`${key % 2 === 0 ? 'translate-x-[50px]' : '-translate-x-[50px]'} row col-span-full`"
            :data-direction="key % 2 === 0 ? 'backward' : 'forward'"
          >
            <AtomsGrid :cols="3" :rows="1" x-gap="sm">
              <div class="col-span-1 h-10 xs:h-15 sm:h-20 md:h-25 lg:h-30 xl:h-35 2xl:h-40 3xl:h-45 4xl:h-50">
                <nuxt-picture
                  fit="cover"
                  src="/images/portrait-2.jpg"
                  :img-attrs="{
                    class: 'pointer-events-none object-cover h-full w-full',
                  }"
                />
              </div>
              <div class="col-span-1 h-10 xs:h-15 sm:h-20 md:h-25 lg:h-30 xl:h-35 2xl:h-40 3xl:h-45 4xl:h-50">
                <nuxt-picture
                  fit="cover"
                  src="/images/portrait-2.jpg"
                  :img-attrs="{
                    class: 'pointer-events-none object-cover h-full w-full',
                  }"
                />
              </div>
              <div class="col-span-1 h-10 xs:h-15 sm:h-20 md:h-25 lg:h-30 xl:h-35 2xl:h-40 3xl:h-45 4xl:h-50">
                <nuxt-picture
                  fit="cover"
                  src="/images/portrait-2.jpg"
                  :img-attrs="{
                    class: 'pointer-events-none object-cover h-full w-full',
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
          isMobile: '(max-width: 639px)',
          isTablet: '(min-width: 640px)',
          isDesktop: '(min-width: 1024px)',
          isDisplay: '(min-width: 1920px)',
        },
        (context) => {
          const { isMobile, isTablet, isDesktop, isDisplay } = context.conditions as gsap.Conditions;
          gsap.to(row, {
            x: () =>
              row.getAttribute('data-direction') === 'forward'
                ? `${isMobile ? '25' : isTablet ? '50' : isDesktop ? '75' : isDisplay ? '100' : '125'}`
                : `${isMobile ? '-25' : isTablet ? '-50' : isDesktop ? '-75' : isDisplay ? '-100' : '-125'}`,
            duration: 0.15,
            ease: Power0.easeNone,
            scrollTrigger: {
              refreshPriority: 1,
              invalidateOnRefresh: true,

              trigger: scope.value,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      );
    });
    gsap.to(target.value, {
      y: 400,
      ease: Power0.easeInOut,
      scrollTrigger: {
        refreshPriority: 1,
        invalidateOnRefresh: true,

        trigger: scope.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, scope.value);
});

onUnmounted(() => {
  ctx.revert();
  ctx.kill();
});

const props = defineProps({
  items: {
    type: Array as PropType<Array<ProjectSliderItem>>,
    required: true,
  },
});
</script>
