<template>
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
              class="col-span-3 col-start-2 overflow-hidden md:col-span-full md:col-start-1 lg:col-span-4 lg:col-start-2"
            >
              <nuxt-picture
                fit="cover"
                src="/images/portrait-2.jpg"
                :img-attrs="{
                  class: 'img object-cover w-full h-30 xs:h-40 sm:h-50 lg:h-55 xl:h-60 2xl:h-75 3xl:h-90 4xl:h-100',
                }"
              />
            </div>
          </template>
          <template #rightCol>
            <AtomsBodyText html-tag="p" class="col-span-full col-start-1 self-end lg:col-span-3 lg:col-start-3"
              >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer..</AtomsBodyText
            >
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <AtomsWrapper class="h-screen bg-purple-500" html-tag="section" @click="console.log('Section 1')">
    Section 2
  </AtomsWrapper>
  <AtomsWrapper class="h-screen bg-purple-500" html-tag="section" @click="console.log('Section 1')">
    Section 3
  </AtomsWrapper>
</template>

<script lang="ts" setup>
/* const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const firstImg = ref<HTMLDivElement | null>(null);
const secondImg = ref<HTMLDivElement | null>(null);
const imgWrapper = ref<HTMLDivElement | null>(null);
const wrapper = ref();
onMounted(() => {
  const tl = gsap.timeline();

  tl.to(
    imgWrapper.value,
    {
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
    0
  );

  tl.to(
    firstImg.value,
    {
      y: 25,
    },
    0
  );

  tl.from(
    secondImg.value,
    {
      y: 25,
    },
    0
  );

  ScrollTrigger.create({
    trigger: wrapper.value,
    start: 'top top',
    end: 'bottom top',
    pin: true,
    scrub: true,
    animation: tl,
  });
}); */
</script>
