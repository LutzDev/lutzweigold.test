<template>
  <div ref="scope">
    <AtomsWrapper is-full-screen html-tag="section" y-padding="lg">
      <template #default="{ isFullScreen }">
        <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
          <OrganismsOneComponentsRow>
            <AtomsHeadline html-tag="h1" class="col-span-full lg:col-span-8">
              {{ $t('pages.about.content.visual.headline') }}
            </AtomsHeadline>
          </OrganismsOneComponentsRow>
          <OrganismsTwoComponentsRow>
            <template #leftCol>
              <div
                ref="imgWrapper"
                :style="{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }"
                class="z-10 col-span-3 col-start-2 row-start-1 hidden overflow-hidden md:col-span-full md:col-start-1 lg:block"
              >
                <nuxt-picture
                  fit="cover"
                  src="/images/general/lutzweigold_hiking.webp"
                  :alt="$t('pages.about.content.visual.image.business.alt')"
                  :img-attrs="{
                    class: 'img scale-125 object-cover w-full h-30 sm:h-35 lg:h-40 xl:h-45 2xl:h-55 3xl:h-70 4xl:h-80',
                  }"
                />
              </div>
              <div class="col-span-3 col-start-2 row-start-1 overflow-hidden md:col-span-full md:col-start-1">
                <nuxt-picture
                  fit="cover"
                  :alt="$t('pages.about.content.visual.image.hobby.alt')"
                  src="/images/general/lutzweigold_portrait.webp"
                  :img-attrs="{
                    class: 'img scale-125 object-cover w-full h-30 sm:h-35 lg:h-40 xl:h-45 2xl:h-55 3xl:h-70 4xl:h-80',
                  }"
                />
              </div>
            </template>
            <template #rightCol>
              <div class="col-span-full col-start-1 space-y-md self-end lg:col-span-4 lg:col-start-2">
                <AtomsBodyText html-tag="p">{{ $t('pages.about.content.visual.description.role') }} </AtomsBodyText>
                <AtomsBodyText html-tag="p">{{ $t('pages.about.content.visual.description.hobby') }} </AtomsBodyText>
              </div>
            </template>
          </OrganismsTwoComponentsRow>
        </AtomsFlex>
      </template>
    </AtomsWrapper>
  </div>
  <AtomsWrapper is-full-screen html-tag="section" y-padding="xl" class="bg-white">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="clamp(1.15)">
            {{ $t('pages.about.content.experience.headline') }}</AtomsHeadline
          >
        </OrganismsOneComponentsRow>
        <OrganismsOneComponentsRow y-gap="none">
          <MoleculesExperience :items="test" />
        </OrganismsOneComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
</template>

<script lang="ts" setup>
import { Experience } from '@Types';
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const imgWrapper = ref<HTMLDivElement | null>(null);
const scope = ref();
let tl: gsap.core.Timeline;
let mm: gsap.MatchMedia;
let ctx: gsap.Context;

const test: Experience = {
  year: 20,
  TEST: true,
  entries: [
    {
      year: 23,
      items: [
        {
          additionalYear: 'pages.about.content.experience.items.selfEmployment.additionalYear',
          title: 'pages.about.content.experience.items.selfEmployment.title',
          description: 'pages.about.content.experience.items.selfEmployment.description',
          tags: [{ name: 'general.tags.work', color: 1 }],
        },
      ],
    },
    {
      year: 22,
      items: [
        {
          additionalYear: 'pages.about.content.experience.items.master.additionalYear',
          title: 'pages.about.content.experience.items.master.title',
          description: 'pages.about.content.experience.items.master.description',
          link: {
            to: 'pages.about.content.experience.items.master.link.to',
            title: 'pages.about.content.experience.items.master.link.title',
          },
          tags: [{ name: 'general.tags.education', color: 2 }],
        },
        {
          additionalYear: 'pages.about.content.experience.items.teaching.additionalYear',
          title: 'pages.about.content.experience.items.teaching.title',
          description: 'pages.about.content.experience.items.teaching.description',
          link: {
            to: 'pages.about.content.experience.items.teaching.link.to',
            title: 'pages.about.content.experience.items.teaching.link.title',
          },
          tags: [{ name: 'general.tags.work', color: 1 }],
        },
      ],
    },
    {
      year: 21,
      items: [
        {
          additionalYear: 'pages.about.content.experience.items.bachelor.additionalYear',
          title: 'pages.about.content.experience.items.bachelor.title',
          description: 'pages.about.content.experience.items.bachelor.description',
          link: {
            to: 'pages.about.content.experience.items.bachelor.link.to',
            title: 'pages.about.content.experience.items.bachelor.link.title',
          },
          tags: [{ name: 'general.tags.education', color: 2 }],
        },
        {
          additionalYear: 'pages.about.content.experience.items.ibc.additionalYear',
          title: 'pages.about.content.experience.items.ibc.title',
          description: 'pages.about.content.experience.items.ibc.description',
          link: {
            to: 'pages.about.content.experience.items.ibc.link.to',
            title: 'pages.about.content.experience.items.ibc.link.title',
          },
          tags: [{ name: 'general.tags.work', color: 1 }],
        },
        {
          additionalYear: 'pages.about.content.experience.items.hiwi.additionalYear',
          title: 'pages.about.content.experience.items.hiwi.title',
          description: 'pages.about.content.experience.items.hiwi.description',
          tags: [{ name: 'general.tags.work', color: 1 }],
        },
      ],
    },
    {
      year: 19,
      items: [
        {
          additionalYear: 'pages.about.content.experience.items.webbrand.additionalYear',
          title: 'pages.about.content.experience.items.webbrand.title',
          description: 'pages.about.content.experience.items.webbrand.description',
          link: {
            to: 'pages.about.content.experience.items.webbrand.link.to',
            title: 'pages.about.content.experience.items.webbrand.link.title',
          },
          tags: [{ name: 'general.tags.work', color: 1 }],
        },
      ],
    },
    {
      year: 17,
      items: [
        {
          year: 17,
          additionalYear: 'pages.about.content.experience.items.abi.additionalYear',
          title: 'pages.about.content.experience.items.abi.title',
          description: 'pages.about.content.experience.items.abi.description',
          tags: [{ name: 'general.tags.education', color: 2 }],
        },
      ],
    },
    {
      year: 16,
      items: [
        {
          additionalYear: 'pages.about.content.experience.items.reizwerk.additionalYear',
          title: 'pages.about.content.experience.items.reizwerk.title',
          description: 'pages.about.content.experience.items.reizwerk.description',
          link: {
            to: 'pages.about.content.experience.items.reizwerk.link.to',
            title: 'pages.about.content.experience.items.reizwerk.link.title',
          },
          tags: [{ name: 'general.tags.work', color: 1 }],
        },
      ],
    },
  ],
};

onMounted(() => {
  ctx = gsap.context(() => {
    mm = gsap.matchMedia();
    tl = gsap.timeline({ data: { name: 'IMAGE' } });

    mm.add('(min-width: 1024px)', () => {
      ScrollTrigger.create({
        trigger: scope.value,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        snap: 1,
        scrub: 1,
        refreshPriority: 1,
        invalidateOnRefresh: true,

        animation: tl,
      });
    });

    tl.to(
      imgWrapper.value,
      {
        clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
      },
      0
    );

    tl.to(
      '.img',
      {
        y: -25,
      },
      0
    );
  }, scope.value);
});

onUnmounted(() => {
  ctx.revert();
  ctx.kill();
});
</script>
<script setup lang="ts"></script>
