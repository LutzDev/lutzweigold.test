<template>
  <OrganismsProjectVisual
    headline="projects.portfolio.content.visual.headline"
    tag="pages.work.content.filter.tags.website"
    :image="{
      src: '/images/projects/portfolio/lutzweigold_portfolio_skill.webp',
      alt: 'projects.portfolio.content.visual.image.alt',
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
            <AtomsParallaxImage
              class="col-span-full"
              :image="{
                src: '/images/projects/portfolio/lutzweigold_portfolio_preview.webp',
                alt: 'projects.portfolio.content.teaser.image.alt',
              }"
              :priority="100"
            />
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
    title: 'projects.portfolio.content.techStack.list.technology',
    entries: ['Nuxt / Vue', 'TypeScript', 'ThreeJS', 'Gsap', 'UnoCss', 'Tailwind'],
  },
  {
    title: 'projects.portfolio.content.techStack.list.preview.name',
    entries: [
      {
        name: 'projects.portfolio.content.techStack.list.preview.value',
        to: 'projects.portfolio.content.techStack.list.preview.to',
        title: 'projects.portfolio.content.techStack.list.preview.title',
      },
    ],
  },
];
</script>
