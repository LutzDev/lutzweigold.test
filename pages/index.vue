<template>
  <AtomsWrapper is-full-screen html-tag="section" y-padding="lg">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h1" class="col-span-full lg:col-span-8" data-speed="clamp(1.20)">
            {{ $t('pages.about.content.visual.headline') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <div
              class="col-span-full row-start-1 overflow-hidden xs:col-span-3 xs:col-start-2 md:col-span-full md:col-start-1"
            >
              <nuxt-picture
                fit="cover"
                format="webp"
                densities="x1 x2"
                width="1800"
                height="1440"
                :alt="$t('pages.about.content.visual.image.hobby.alt')"
                src="/images/general/lutzweigold_portrait.webp"
                :img-attrs="{
                  class: 'img object-cover w-full h-40 sm:h-50 lg:h-60 xl:h-70 2xl:h-80 3xl:h-90 4xl:h-100',
                }"
              />
            </div>
          </template>
          <template #rightCol>
            <div
              class="col-span-full col-start-1 space-y-md self-center lg:col-span-4 lg:col-start-2"
              data-speed="1.10"
            >
              <AtomsBodyText html-tag="p">{{ $t('pages.about.content.visual.description.role') }} </AtomsBodyText>
              <AtomsBodyText html-tag="p">{{ $t('pages.about.content.visual.description.hobby') }} </AtomsBodyText>
            </div>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <AtomsWrapper is-full-screen html-tag="section" y-padding="xl" class="bg-white">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="1.20">
            {{ $t('pages.about.content.experience.headline') }}</AtomsHeadline
          >
        </OrganismsOneComponentsRow>
        <OrganismsOneComponentsRow y-gap="none">
          <MoleculesExperience :items="experience" />
        </OrganismsOneComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
</template>

<script lang="ts" setup>
import { Experience } from '@Types';
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const experience: Experience = {
  year: 20,
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
</script>
