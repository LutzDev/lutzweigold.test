<template>
  <div class="h-screen bg-gray-600"><h1>Pleta SITE</h1></div>
  <div class="h-screen bg-gray-200">Second section</div>
  <div class="h-screen bg-gray-600">Third section</div>
  <div class="h-screen bg-gray-200">Fourgh section</div>
</template>
<!--
<template>
  <OrganismsProjectVisual
    headline="projects.pleta.content.visual.headline"
    tag="pages.work.content.filter.tags.shop"
    :image="{
      src: '/images/projects/pleta/lutzweigold_pleta_preview.webp',
      alt: 'projects.pleta.content.visual.image.alt',
    }"
  />
  <AtomsWrapper html-tag="section" y-padding="xl">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="0.95">
            {{ $t('projects.pleta.content.techStack.headline') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <MoleculesList :list="list" theme="light" class="self-end" width="half" />
          </template>
          <template #rightCol>
            <AtomsBodyText class="self-top col-span-full lg:col-span-4 lg:col-start-2" data-speed="1.05">
              {{ $t('projects.pleta.content.techStack.description') }}
            </AtomsBodyText>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <OrganismsOneProjectImage
    :image="{
      src: '/images/projects/pleta/lutzweigold_pleta_home.webp',
      alt: 'projects.pleta.content.teaser.image.alt',
    }"
  />
</template>

<script setup lang="ts">
import { ListItem } from '@Types';

const list: Array<ListItem> = [
  {
    title: 'projects.pleta.content.techStack.list.technology',
    entries: ['Shopware 6', 'Symphony Framework', 'Twig', 'TypeScript', 'SCSS'],
  },
  {
    title: 'projects.pleta.content.techStack.list.preview.name',
    entries: [
      {
        name: 'pleta.de',
        to: 'https://pleta.de/',
        title: 'projects.pleta.content.techStack.list.preview.title',
      },
    ],
  },
];
</script>
-->
<script setup lang="ts"></script>
