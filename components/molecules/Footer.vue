<template>
  <AtomsWrapper html-tag="section" y-padding="xl" data-speed="clamp(0.8)">
    <template #default>
      <AtomsGrid :cols="10" :rows="3">
        <div class="col-span-8 row-span-1 row-start-1 md:col-span-4 md:col-start-1">
          <MoleculesScrambleText class="text-white" title="In collaboration with Baillat Studio" :rows="4" />
        </div>
        <div
          class="col-span-8 col-start-3 row-span-2 row-start-2 self-end justify-self-end md:col-span-4 md:col-start-2"
        >
          <MoleculesScrambleText class="text-white" title="In collaboration with Baillat Studio" :rows="6" />
        </div>
        <div class="row-span-2 row-start-1 hidden self-center md:col-span-4 md:col-start-7 md:block">
          <MoleculesScrambleText class="text-white" title="In collaboration with Baillat Studio" :rows="2" />
        </div>
      </AtomsGrid>
    </template>
  </AtomsWrapper>
  <AtomsWrapper theme="dark" html-tag="section" y-padding="lg">
    <template #default="{ isFullScreen, theme }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" :theme="theme" data-speed="clamp(1.15)">
            I'm a creative developer based in germany
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsOneComponentsRow y-gap="none">
          <MoleculesList :list="list" :theme="theme" />
        </OrganismsOneComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
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
