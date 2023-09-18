<template>
  <AtomsWrapper is-full-screen html-tag="section" y-padding="lg">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsTwoComponentsRow data-speed="clamp(1.15)" data-lag="clamp(0.25)">
          <template #leftCol>
            <NuxtLink
              to="/work"
              class="col-span-full row-start-1 flex cursor-pointer items-center gap-sm self-end justify-self-start lg:col-span-4 lg:col-start-1"
              @mouseenter="isHover = true"
              @mouseleave="isHover = false"
            >
              <AtomsButton size="sm" to="/work" class="-scale-x-100" :event="isHover" />
              <AtomsBodyText> Back to project list </AtomsBodyText>
            </NuxtLink>
          </template>
          <template #rightCol>
            <AtomsHeadline html-tag="h1" class="col-span-full"> An E-commerce shop for good. </AtomsHeadline>
          </template>
        </OrganismsTwoComponentsRow>
        <OrganismsOneComponentsRow>
          <AtomsParallaxImage
            :has-overlay="true"
            class="col-span-full"
            :image="{ src: '/images/bg-test.webp', alt: 'adasd' }"
          >
            <AtomsTag theme="dark"> E-Commerce </AtomsTag>
          </AtomsParallaxImage>
        </OrganismsOneComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
</template>

<script setup lang="ts">
const isHover = ref<boolean>(false);
</script>
