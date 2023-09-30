<template>
  <div class="h-[100dvh] h-screen bg-gray-600"><h1>Dark Pattern SITE</h1></div>
  <div class="h-[100dvh] h-screen bg-gray-200">Second section</div>
  <div class="h-[100dvh] h-screen bg-gray-600">Third section</div>
  <div class="h-[100dvh] h-screen bg-gray-200">Fourgh section</div>
</template>
<!--
<template>
  <OrganismsProjectVisual
    headline="projects.darkPattern.content.visual.headline"
    tag="pages.work.content.filter.tags.application"
    :image="{
      src: '/images/projects/darkpattern/lutzweigold_darkpattern_preview.webp',
      alt: 'projects.darkpattern.content.visual.image.alt',
    }"
  />
  <AtomsWrapper html-tag="section" y-padding="xl">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="0.95">
            {{ $t('projects.darkPattern.content.techStack.headline') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <MoleculesList :list="list" theme="light" class="self-end" width="half" />
          </template>
          <template #rightCol>
            <AtomsBodyText class="self-top col-span-full lg:col-span-4 lg:col-start-2" data-speed="1.05">
              {{ $t('projects.darkPattern.content.techStack.description') }}
            </AtomsBodyText>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
</template>

<script setup lang="ts">
import { ListItem } from '@Types';

const list: Array<ListItem> = [
  {
    title: 'projects.darkPattern.content.techStack.list.technology',
    entries: ['TypeScript', 'SCSS', 'Express', 'Firebase'],
  },
  {
    title: 'projects.darkPattern.content.techStack.list.preview.name',
    entries: [
      {
        name: 'Dark Pattern Detection',
        to: 'https://www.darkpattern-stuttgart.de/',
        title: 'projects.darkPattern.content.techStack.list.preview.title',
      },
    ],
  },
];
</script>
-->
<script setup lang="ts"></script>
