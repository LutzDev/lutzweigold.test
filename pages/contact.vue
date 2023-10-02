<template>
  <AtomsWrapper theme="dark" is-full-screen html-tag="section" y-padding="lg" class="flex min-h-screen flex-col">
    <template #default="{ isFullScreen, theme }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h1" class="col-span-full lg:col-span-8" :theme="theme">
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
    title: 'general.footer.socials',
    entries: [
      {
        name: 'general.personal.linkedin.name',
        to: 'general.personal.linkedin.to',
        title: 'general.personal.linkedin.title',
      },
      {
        name: 'general.personal.github.name',
        to: 'general.personal.github.to',
        title: 'general.personal.github.title',
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
