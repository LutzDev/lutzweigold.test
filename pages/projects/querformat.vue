<template>
  <OrganismsProjectVisual
    headline="projects.querformat.content.visual.headline"
    tag="pages.work.content.filter.tags.website"
    :image="{
      src: '/images/projects/querformat/lutzweigold_querformat_preview.webp',
      alt: 'projects.querformat.content.visual.image.alt',
    }"
  />
  <AtomsWrapper html-tag="section" y-padding="xl">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="0.95">
            {{ $t('projects.querformat.content.techStack.headline') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <MoleculesList :list="list" theme="light" class="self-end" width="half" />
          </template>
          <template #rightCol>
            <AtomsBodyText class="self-top col-span-full self-center lg:col-span-4 lg:col-start-2" data-speed="1.05">
              {{ $t('projects.querformat.content.techStack.description') }}
            </AtomsBodyText>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <OrganismsOneProjectImage
    :image="{
      src: '/images/projects/querformat/lutzweigold_querformat_gallary.webp',
      alt: 'projects.querformat.content.teaser.image.alt',
    }"
  />
</template>

<script setup lang="ts">
import { ListItem } from '@Types';

const list: Array<ListItem> = [
  {
    title: 'projects.querformat.content.techStack.list.technology',
    entries: ['Symphony Framework', 'Twig', 'TypeScript', 'SCSS'],
  },
  {
    title: 'projects.querformat.content.techStack.list.preview.name',
    entries: [
      {
        name: 'projects.querformat.content.techStack.list.preview.value',
        to: 'projects.querformat.content.techStack.list.preview.to',
        title: 'projects.querformat.content.techStack.list.preview.title',
      },
    ],
  },
];
</script>
