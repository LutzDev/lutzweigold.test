<template>
  <AtomsWrapper is-full-screen html-tag="section" y-padding="lg">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline
            html-tag="h1"
            class="col-span-full lg:col-span-8"
            data-speed="clamp(1.15)"
            data-lag="clamp(0.25)"
          >
            I'm a creative developer based in germany
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsOneComponentsRow y-gap="none">
          <template #default>
            <MoleculesPortfolio />
          </template>
        </OrganismsOneComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <AtomsWrapper html-tag="section" y-padding="none" x-padding="none" class="overflow-hidden">
    <template #default>
      <MoleculesProjectSlider :items="sliderItems" />
    </template>
  </AtomsWrapper>
</template>

<script setup lang="ts">
// TODO: Rename OneComponentsRow to One ComponentRow (singular)

const sliderItems = [
  {
    left: 'portrait-2.jpg',
    middle: 'portrait-2.jpg',
    right: 'portrait-2.jpg',
  },
  {
    left: 'portrait-2.jpg',
    middle: 'portrait-2.jpg',
    right: 'portrait-2.jpg',
  },
  {
    left: 'portrait-2.jpg',
    middle: 'portrait-2.jpg',
    right: 'portrait-2.jpg',
  },
  {
    left: 'portrait-2.jpg',
    middle: 'portrait-2.jpg',
    right: 'portrait-2.jpg',
  },
  {
    left: 'portrait-2.jpg',
    middle: 'portrait-2.jpg',
    right: 'portrait-2.jpg',
  },
];
</script>
