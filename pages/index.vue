<template>
  <div ref="scope">
    <AtomsWrapper is-full-screen html-tag="section" y-padding="lg">
      <template #default="{ isFullScreen }">
        <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
          <OrganismsOneComponentsRow>
            <AtomsHeadline html-tag="h1" class="col-span-full lg:col-span-6">
              I'm a creative developer based in germany
            </AtomsHeadline>
          </OrganismsOneComponentsRow>
          <OrganismsTwoComponentsRow>
            <template #leftCol>
              <div
                ref="imgWrapper"
                :style="{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }"
                class="z-10 col-span-3 col-start-2 row-start-1 overflow-hidden md:col-span-full md:col-start-1 lg:col-span-4 lg:col-start-2"
              >
                <nuxt-picture
                  fit="cover"
                  src="/images/portrait-2.jpg"
                  :img-attrs="{
                    class:
                      'img scale-125 object-cover w-full h-30 xs:h-40 sm:h-45 lg:h-50 xl:h-60 2xl:h-75 3xl:h-90 4xl:h-100',
                  }"
                />
              </div>
              <div
                class="col-span-3 col-start-2 row-start-1 overflow-hidden md:col-span-full md:col-start-1 lg:col-span-4 lg:col-start-2"
              >
                <nuxt-picture
                  fit="cover"
                  src="/images/portrait-1.jpg"
                  :img-attrs="{
                    class:
                      'img scale-125 object-cover w-full h-30 xs:h-40 sm:h-45 lg:h-50 xl:h-60 2xl:h-75 3xl:h-90 4xl:h-100',
                  }"
                />
              </div>
            </template>
            <template #rightCol>
              <AtomsBodyText
                html-tag="p"
                class="col-span-full col-start-1 self-end lg:col-span-4 lg:col-start-2 xl:col-span-3 xl:col-start-3"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer.
              </AtomsBodyText>
            </template>
          </OrganismsTwoComponentsRow>
        </AtomsFlex>
      </template>
    </AtomsWrapper>
  </div>
  <AtomsWrapper is-full-screen html-tag="section" y-padding="lg">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6"> 6+ years of experience</AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsOneComponentsRow y-gap="none">
          <MoleculesExperience :items="items" />
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
let ctx: gsap.Context;

const items: Experience = {
  year: 20,
  entries: [
    {
      year: 16,
      additionalYear: 20,
      title: 'Self employee',
      description: ['hallo', 'asdasd', 'sdsd'],
      to: '/about',
    },
    {
      year: 17,
      additionalYear: 23,
      title: 'Self employee!!',
      description: 'asdasdasdasdasd asd asd ',
      to: '/about',
    },
    {
      year: 18,
      additionalYear: 14,
      title: 'Self employee',
      description: ['asdasd', 'asdasd', 'asdasd'],
      to: '/lutz',
    },
    {
      year: 19,
      additionalYear: 16,
      title: 'Self employee',
      description: ['hallo', 'asdasd', 'sdsd'],
      to: '/ka',
    },
    {
      year: 20,
      additionalYear: 23,
      title: 'Self employee!!',
      description: 'asdasdasdasdasd asd asd ',
    },
    {
      year: 16,
      additionalYear: 'today',
      title: 'Self employee',
      description: ['asdasd', 'asdasd', 'asdasd'],
      to: 'https://test.de',
    },
  ],
};

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline();

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

    ScrollTrigger.create({
      trigger: scope.value,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      snap: 1,
      scrub: 1,
      refreshPriority: 1,
      animation: tl,
    });
  }, scope.value);
});
</script>
