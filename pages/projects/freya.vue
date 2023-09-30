<template>
  <OrganismsProjectVisual
    headline="projects.freya.content.visual.headline"
    tag="pages.work.content.filter.tags.website"
    :image="{
      src: '/images/projects/freya/lutzweigold_freya_preview.webp',
      alt: 'projects.freya.content.visual.image.alt',
    }"
  />
  <AtomsWrapper html-tag="section" y-padding="xl">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="0.95">
            {{ $t('projects.freya.content.techStack.headline') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <MoleculesList :list="list" theme="light" class="self-end" width="half" />
          </template>
          <template #rightCol>
            <AtomsBodyText class="self-top col-span-full lg:col-span-4 lg:col-start-2" data-speed="1.05">
              {{ $t('projects.freya.content.techStack.description') }}
            </AtomsBodyText>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <OrganismsOneProjectImage
    :image="{
      src: '/images/projects/freya/lutzweigold_freya_courses.webp',
      alt: 'projects.freya.content.teaser.image.alt',
    }"
  />
</template>

<script setup lang="ts">
import { ListItem } from '@Types';

const list: Array<ListItem> = [
  {
    title: 'projects.freya.content.techStack.list.technology',
    entries: ['Symphony Framework', 'Twig', 'TypeScript', 'SCSS'],
  },
  {
    title: 'projects.freya.content.techStack.list.contributor.name',
    entries: [
      {
        name: 'Philipp Oeschger',
        to: 'https://philipp-oeschger.de/',
        title: 'projects.freya.content.techStack.list.contributor.title',
      },
    ],
  },
  {
    title: 'projects.freya.content.techStack.list.preview.name',
    entries: [
      {
        name: 'freya-stuttgart.de',
        to: 'https://www.freya-stuttgart.de/',
        title: 'projects.freya.content.techStack.list.preview.title',
      },
    ],
  },
];
</script>
