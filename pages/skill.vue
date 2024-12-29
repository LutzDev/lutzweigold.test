<template>
  <div class="bg-primary">
    <OrganismsSvgVisual />
    <AtomsWrapper html-tag="section" y-padding="xl" class="bg-primary">
      <template #default>
        <OrganismsOneComponentsRow y-gap="none">
          <MoleculesList
            :list="backendList"
            :title="{ name: 'pages.skill.content.technologies.backend', reverse: true }"
          />
        </OrganismsOneComponentsRow>
      </template>
    </AtomsWrapper>
    <AtomsWrapper html-tag="section" y-padding="xl" class="bg-white">
      <template #default>
        <OrganismsOneComponentsRow y-gap="none">
          <MoleculesList :list="frontendList" :title="{ name: 'pages.skill.content.technologies.frontend' }" />
        </OrganismsOneComponentsRow>
      </template>
    </AtomsWrapper>
  </div>
</template>

<script setup lang="ts">
import { ListItem } from '@Types';

const backendList: Array<ListItem> = [
  {
    title: 'pages.skill.content.technologies.languages',
    entries: ['Java & Kotlin', 'TypeScript', 'Python', 'PHP', 'Swift'],
  },
  {
    title: 'pages.skill.content.technologies.frameworks',
    entries: ['Spring Boot', 'Node', 'Ktor', 'Fastify', 'Jest', 'Directus'],
  },
  {
    title: 'pages.skill.content.technologies.tools',
    entries: ['MongoDB', 'PostgreSQL', 'Docker', 'Git'],
  },
];

const frontendList: Array<ListItem> = [
  {
    title: 'pages.skill.content.technologies.languages',
    entries: ['TypeScript', 'CSS & SCSS'],
  },
  {
    title: 'pages.skill.content.technologies.frameworks',
    entries: ['Vue', 'Nuxt', 'Tailwind', 'UnoCss', 'Gsap', 'Three'],
  },
  {
    title: 'pages.skill.content.technologies.prototyping',
    entries: ['Figma', 'Sketch'],
  },
  {
    title: 'pages.skill.content.technologies.learning',
    entries: ['Angular'],
  },
];
</script>
