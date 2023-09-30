<template>
  <AtomsWrapper v-if="viewport.isGreaterOrEquals('tablet')" html-tag="section" y-padding="xl" data-speed="clamp(0.8)">
    <template #default>
      <AtomsGrid :cols="10" :rows="3">
        <div class="col-span-8 row-span-1 row-start-1 md:col-span-4 md:col-start-1">
          <MoleculesScrambleText class="text-white" title="Always looking for new projects" :rows="4" />
        </div>
        <div
          class="col-span-8 col-start-3 row-span-2 row-start-2 self-end justify-self-end md:col-span-4 md:col-start-2"
        >
          <MoleculesScrambleText class="text-white" title="Designing. Coding. Maintaining ..." :rows="6" />
        </div>
        <div class="row-span-2 row-start-1 hidden self-center md:col-span-4 md:col-start-7 md:block">
          <MoleculesScrambleText class="text-white" title="Get in touch" :rows="2" />
        </div>
      </AtomsGrid>
    </template>
  </AtomsWrapper>
  <AtomsWrapper theme="dark" html-tag="section" y-padding="lg">
    <template #default="{ isFullScreen, theme }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-8" :theme="theme" data-speed="clamp(1.15)">
            {{ $t('general.footer.headline') }}
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
const viewport = useViewport();

const list: Array<ListItem> = [
  {
    title: 'general.footer.contact',
    entries: [
      {
        name: 'general.personal.email.name',
        to: 'general.personal.email.to',
        title: 'general.personal.email.title',
      },
      {
        name: 'general.personal.phone.name',
        to: 'general.personal.phone.to',
        title: 'general.personal.phone.title',
      },
    ],
  },
  {
    title: 'general.footer.copyright',
    entries: [
      { name: 'pages.privacy.name', to: 'pages.privacy.to', title: 'pages.privacy.title' },
      { name: 'pages.imprint.name', to: 'pages.imprint.to', title: 'pages.imprint.title' },
    ],
  },
];
</script>
