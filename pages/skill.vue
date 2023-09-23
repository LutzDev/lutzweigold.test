<template>
  <OrganismsSvgVisual />
  <AtomsWrapper html-tag="section" y-padding="xl" class="bg-primary">
    <template #default>
      <OrganismsOneComponentsRow y-gap="none">
        <MoleculesList :list="list" :title="{ name: 'Backend Development', reverse: true }" />
      </OrganismsOneComponentsRow>
    </template>
  </AtomsWrapper>
  <AtomsWrapper html-tag="section" y-padding="xl">
    <template #default>
      <OrganismsOneComponentsRow y-gap="none">
        <MoleculesList :list="list" :title="{ name: 'Frontend Development' }" />
      </OrganismsOneComponentsRow>
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
      { name: 'Imprint', to: '/', title: 'Its the title of the link' },
      { name: 'info@lutzweigold.de', to: 'mailto:info@lutzweigold.de', title: 'Its the title of the link' },
    ],
  },
];
</script>
