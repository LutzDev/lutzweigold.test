<template>
  <OrganismsProjectVisual
    headline="projects.xtrym.content.visual.headline"
    tag="pages.work.content.filter.tags.shop"
    :image="{
      src: '/images/projects/xtrym/lutzweigold_xtrym_preview.webp',
      alt: 'projects.xtrym.content.visual.image.alt',
    }"
  />
  <AtomsWrapper html-tag="section" y-padding="xl">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="0.95">
            {{ $t('projects.xtrym.content.techStack.headline') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <MoleculesList :list="list" theme="light" class="self-end" width="half" />
          </template>
          <template #rightCol>
            <AtomsBodyText class="self-top col-span-full self-center lg:col-span-4 lg:col-start-2" data-speed="1.05">
              {{ $t('projects.xtrym.content.techStack.description') }}
            </AtomsBodyText>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <OrganismsOneProjectImage
    :image="{
      src: '/images/projects/xtrym/lutzweigold_xtrym_shop.webp',
      alt: 'projects.xtrym.content.teaser.image.alt',
    }"
  />
</template>

<script setup lang="ts">
import { ListItem } from '@Types';

const list: Array<ListItem> = [
  {
    title: 'projects.xtrym.content.techStack.list.technology',
    entries: ['Symphony Framework', 'Smarty Template Engine', 'TypeScript', 'SCSS'],
  },
  {
    title: 'projects.xtrym.content.techStack.list.preview.name',
    entries: [
      {
        name: 'projects.xtrym.content.techStack.list.preview.value',
        to: 'projects.xtrym.content.techStack.list.preview.to',
        title: 'projects.xtrym.content.techStack.list.preview.title',
      },
    ],
  },
];
</script>
