<template>
  <OrganismsProjectVisual />
  <AtomsWrapper is-full-screen html-tag="section" y-padding="lg">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-5">
            I'm a creative developer based in germany
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <!--            <AtomsBodyText class="col-span-3 self-end"
              >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer.
            </AtomsBodyText> -->
            <MoleculesList :list="list" theme="light" class="self-end" width="half" />
          </template>
          <template #rightCol>
            <AtomsParallaxImage class="col-span-full" :image="{ src: '/images/bg-test.webp', alt: 'adasd' }" />
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <OrganismsTwoProjectImages
    :left-image="{ src: '/images/bg-test.webp', alt: 'adasd' }"
    :right-image="{ src: '/images/bg-test.webp', alt: 'adasd' }"
  />
  <OrganismsOneProjectImage :image="{ src: '/images/bg-test.webp', alt: 'adasd' }" />
</template>

<script setup lang="ts">
import { ListItem } from '@Types';

const list: Array<ListItem> = [
  {
    title: 'Contact details',
    entries: [
      { name: 'info@lutzweigold.de', to: 'mailto:info@lutzweigold.de', title: 'Its the title of the link' },
      { name: 'info@lutzweigold.de', to: 'mailto:info@lutzweigold.de', title: 'Its the title of the link' },
    ],
  },
  {
    title: '© lutz weigold',
    entries: [
      { name: 'Privacy', to: '/', title: 'Its the title of the link' },
      { name: 'Imprint', to: '/', title: 'Its the title of the link' },
    ],
  },
];
</script>
