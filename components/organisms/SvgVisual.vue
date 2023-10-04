<template>
  <div ref="scope" class="bg-white">
    <AtomsWrapper is-full-screen html-tag="section" y-padding="lg">
      <template #default="{ isFullScreen }">
        <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
          <OrganismsOneComponentsRow>
            <AtomsHeadline html-tag="h1" class="col-span-full lg:col-span-8">
              {{ $t('pages.skill.content.visual.headline') }}
            </AtomsHeadline>
          </OrganismsOneComponentsRow>
          <OrganismsOneComponentsRow y-gap="none">
            <template #default>
              <div
                ref="leftCircle"
                class="relative col-span-4 col-start-1 row-start-1 -translate-y-[100px] self-end overflow-visible rounded-full opacity-0 lg:-z-20"
              >
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden py-0.5">
                  <div class="serviceText p-y-1 translate-y-full text-center">
                    <AtomsTitleText size="sm"
                      >{{ $t('pages.skill.content.visual.circles.strategy.title') }}
                    </AtomsTitleText>
                    <AtomsBodyText v-if="viewport.isGreaterOrEquals('tablet')">
                      {{ $t('pages.skill.content.visual.circles.strategy.description') }}
                    </AtomsBodyText>
                  </div>
                </div>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="drawStroke" cx="50%" cy="50%" r="49%" stroke="black" stroke-width="1" fill="none" />
                </svg>
              </div>
              <div
                ref="middleCircle"
                class="relative col-span-4 col-start-4 row-start-1 -translate-y-[100px] self-end overflow-visible rounded-full opacity-0"
              >
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden py-0.5">
                  <div class="serviceText p-y-1 translate-y-full text-center">
                    <AtomsTitleText size="sm"
                      >{{ $t('pages.skill.content.visual.circles.development.title') }}
                    </AtomsTitleText>
                    <AtomsBodyText v-if="viewport.isGreaterOrEquals('tablet')">
                      {{ $t('pages.skill.content.visual.circles.development.description') }}
                    </AtomsBodyText>
                  </div>
                </div>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="drawStroke" cx="50%" cy="50%" r="49%" stroke="black" stroke-width="1" fill="none" />
                </svg>
              </div>
              <div
                ref="rightCircle"
                class="relative col-span-4 col-start-7 row-start-1 -translate-y-[100px] self-end overflow-visible rounded-full opacity-0 lg:-z-20"
              >
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden py-0.5">
                  <div class="serviceText p-y-1 translate-y-full text-center">
                    <AtomsTitleText size="sm"
                      >{{ $t('pages.skill.content.visual.circles.maintenance.title') }}
                    </AtomsTitleText>
                    <AtomsBodyText v-if="viewport.isGreaterOrEquals('tablet')">
                      {{ $t('pages.skill.content.visual.circles.maintenance.description') }}
                    </AtomsBodyText>
                  </div>
                </div>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="drawStroke" cx="50%" cy="50%" r="49%" stroke="black" stroke-width="1" fill="none" />
                </svg>
              </div>
            </template>
          </OrganismsOneComponentsRow>
        </AtomsFlex>
        <div
          ref="background"
          class="absolute left-0 top-0 -z-10 hidden h-full w-full overflow-hidden bg-primary lg:block"
          :style="{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }"
        >
          <AtomsWrapper class="h-full w-full" y-padding="lg">
            <AtomsGrid :cols="10" class="h-full w-full items-end">
              <div
                ref="backendCircle"
                class="relative col-span-4 col-start-1 row-start-1 -translate-y-[100px] self-end overflow-visible rounded-full opacity-0 mix-blend-multiply"
              >
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden py-0.5">
                  <div class="serviceText p-y-1 translate-y-full text-center">
                    <AtomsTitleText size="sm"
                      >{{ $t('pages.skill.content.visual.circles.backend.title') }}
                    </AtomsTitleText>
                    <AtomsBodyText>
                      {{ $t('pages.skill.content.visual.circles.backend.description') }}
                    </AtomsBodyText>
                  </div>
                </div>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="49%"
                    stroke-dasharray="2 2"
                    stroke="black"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </div>
              <div
                ref="frontendCircle"
                class="relative col-span-4 col-start-7 row-start-1 -translate-y-[100px] self-end overflow-visible rounded-full opacity-0 mix-blend-multiply"
              >
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden py-0.5">
                  <div class="serviceText p-y-1 translate-y-full text-center">
                    <AtomsTitleText size="sm"
                      >{{ $t('pages.skill.content.visual.circles.frontend.title') }}
                    </AtomsTitleText>
                    <AtomsBodyText>
                      {{ $t('pages.skill.content.visual.circles.frontend.description') }}
                    </AtomsBodyText>
                  </div>
                </div>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="49%"
                    stroke-dasharray="2 2"
                    stroke="black"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </div>
            </AtomsGrid>
          </AtomsWrapper>
        </div>
      </template>
    </AtomsWrapper>
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap, $Power4: Power4, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
const viewport = useViewport();

let ctx: gsap.Context;
let mm: gsap.MatchMedia;
let tlReveal: gsap.core.Timeline;
let tlScroll: gsap.core.Timeline;
const modalStore = useModalStore();
const { isModalOpen } = storeToRefs(modalStore);
const background = ref<HTMLDivElement | null>(null);
const backendCircle = ref<HTMLDivElement | null>(null);
const frontendCircle = ref<HTMLDivElement | null>(null);
const leftCircle = ref<HTMLDivElement | null>(null);
const middleCircle = ref<HTMLDivElement | null>(null);
const rightCircle = ref<HTMLDivElement | null>(null);
const scope = ref(null);

onMounted(() => {
  ctx = gsap.context(() => {
    mm = gsap.matchMedia();
    tlScroll = gsap.timeline({});

    mm.add('(min-width: 1024px)', () => {
      tlScroll.to(
        background.value,
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        },
        '0'
      );

      ScrollTrigger.create({
        trigger: scope.value,
        snap: 1,
        pin: true,
        scrub: 0.2,
        markers: false,

        animation: tlScroll,
      });
    });

    tlReveal = gsap.timeline({
      data: { name: 'SVG-VISUAL' },
      defaults: { ease: Power4.easeInOut, duration: 1 },
    });

    gsap.utils.toArray([backendCircle.value, frontendCircle.value]).forEach((entry) => {
      if (entry instanceof HTMLDivElement) {
        gsap.to(gsap.utils.selector(entry)('svg'), {
          rotation: 360,
          repeat: -1,
          duration: 25,
          ease: 'none',
        });
      }
    });

    tlReveal.to('.serviceText', { duration: 2, y: 0, stagger: 0.2, ease: Power4.easeInOut, overwrite: true }, 0);
    tlReveal.to(
      [leftCircle.value, backendCircle.value, middleCircle.value, rightCircle.value, frontendCircle.value],
      {
        y: 0,
        opacity: 100,
        stagger: 0.1,
      },
      '0+=0.5'
    );
    tlReveal.from('.drawStroke', { stagger: 0.25, drawSVG: 0, ease: Power4.easeInOut }, '0+=0.5');
    // animationStore.master.value.add(tlReveal, '0-=0.25');

    watch(
      () => isModalOpen.value,
      (newValue) => {
        if (newValue) {
          tlReveal.play();
        } else {
          tlReveal.reverse();
        }
      },
      { immediate: true }
    );
  }, scope.value!);
});

onUnmounted(() => {
  ctx.revert();
});
</script>
