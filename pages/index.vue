<template>
  <div ref="wrapper">
    <AtomsFullScreenWrapper html-tag="section">
      <OrganismsOneComponentsRow>
        <AtomsHeadlineText html-tag="h1" class="col-span-8"
          >I'm a creative software developer from germany
        </AtomsHeadlineText>
      </OrganismsOneComponentsRow>
      <OrganismsTwoComponentsRow>
        <template #leftCol>
          <div
            class="col-span-full col-start-1 row-span-1 row-start-1 overflow-hidden xs:col-span-3 xs:col-start-2 md:col-span-full md:col-start-1 lg:col-span-4 lg:col-start-2"
          >
            <div ref="firstImg" class="scale-105">
              <nuxt-picture
                fit="cover"
                src="/images/portrait-1.jpg"
                :img-attrs="{
                  class: 'img object-cover w-full h-60',
                }"
              />
            </div>
          </div>
          <div
            ref="secondImg"
            class="col-span-full col-start-1 row-span-1 row-start-1 overflow-hidden xs:col-span-3 xs:col-start-2 md:col-span-full md:col-start-1 lg:col-span-4 lg:col-start-2"
            :style="{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }"
          >
            <nuxt-picture
              fit="cover"
              src="/images/portrait-1.jpg"
              :img-attrs="{
                class: 'img object-cover w-full h-60',
              }"
            />
          </div>
        </template>
        <template #rightCol>
          <AtomsBodyText
            html-tag="p"
            class="col-span-4 col-start-2 self-end xs:col-span-3 xs:col-start-2 md:col-span-full lg:col-span-3 lg:col-start-3 lg:justify-self-end"
            >The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown
            fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
          </AtomsBodyText>
        </template>
      </OrganismsTwoComponentsRow>
    </AtomsFullScreenWrapper>
  </div>

  <AtomsWrapper class="h-screen bg-purple-500" html-tag="section" @click="console.log('Section 1')">
    Section 2
  </AtomsWrapper>
  <AtomsWrapper class="h-screen bg-purple-500" html-tag="section" @click="console.log('Section 1')">
    Section 3
  </AtomsWrapper>
</template>

<script lang="ts" setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const firstImg = ref<HTMLDivElement | null>(null);
const secondImg = ref<HTMLDivElement | null>(null);
const wrapper = ref();
onMounted(() => {
  const tl = gsap.timeline();

  tl.to(
    secondImg.value,
    {
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
    },
    0
  );

  tl.to(
    firstImg.value,
    {
      y: 20,
    },
    0
  );

  ScrollTrigger.create({
    trigger: wrapper.value,
    start: 'top top',
    end: 'bottom top',
    markers: true,
    pin: true,
    scrub: true,
    animation: tl,
    onToggle: (self) => console.log('toggled, isActive:', self.isActive),
    onUpdate: (self) => {
      console.log('progress:', self.progress.toFixed(3), 'direction:', self.direction, 'velocity', self.getVelocity());
    },
  });
});
</script>
