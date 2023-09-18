<template>
  <AtomsWrapper theme="dark" is-full-screen html-tag="section" y-padding="lg" class="flex min-h-screen flex-col">
    <template #default="{ isFullScreen, theme }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" :theme="theme">
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

definePageMeta({
  layout: 'footerless',
});

const list: Array<ListItem> = [
  {
    title: 'Contact details',
    entries: [
      { name: 'info@lutzweigold.de', to: 'mailto:info@lutzweigold.de', title: 'Its the title of the link' },
      { name: 'info@lutzweigold.de', to: 'mailto:info@lutzweigold.de', title: 'Its the title of the link' },
    ],
  },
  {
    title: 'Socials',
    entries: [
      { name: 'GitHub', to: 'mailto:info@lutzweigold.de', title: 'Its the title of the link' },
      { name: 'LinkedIn', to: 'mailto:info@lutzweigold.de', title: 'Its the title of the link' },
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
