<template>
  <OrganismsProjectVisual
    headline="projects.smaract.content.visual.headline"
    tag="pages.work.content.filter.tags.website"
    :image="{
      src: '/images/projects/smaract/lutzweigold_smaract_preview.webp',
      alt: 'projects.smaract.content.visual.image.alt',
    }"
  />
  <AtomsWrapper html-tag="section" y-padding="xl">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="0.95">
            {{ $t('projects.smaract.content.techStack.headline') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <MoleculesList :list="list" theme="light" class="self-end" width="half" />
          </template>
          <template #rightCol>
            <AtomsBodyText class="self-top col-span-full lg:col-span-4 lg:col-start-2" data-speed="1.05">
              {{ $t('projects.smaract.content.techStack.description') }}
            </AtomsBodyText>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <OrganismsOneProjectImage
    :image="{
      src: '/images/projects/smaract/lutzweigold_smaract_mobile.webp',
      alt: 'projects.smaract.content.teaser.image.alt',
    }"
  />
</template>

<script setup lang="ts">
import { ListItem } from '@Types';

const list: Array<ListItem> = [
  {
    title: 'projects.smaract.content.techStack.list.technology',
    entries: ['TypeScript', 'SCSS'],
  },
  {
    title: 'projects.smaract.content.techStack.list.preview.name',
    entries: [
      {
        name: 'smaract.com',
        to: 'https://www.smaract.com/en/',
        title: 'projects.smaract.content.techStack.list.preview.title',
      },
    ],
  },
];
</script>
