<template>
  <div class="h-[100dvh] h-screen bg-gray-600"><h1>DIDEM SITE</h1></div>
  <div class="h-[100dvh] h-screen bg-gray-200">Second section</div>
  <div class="h-[100dvh] h-screen bg-gray-600">Third section</div>
  <div class="h-[100dvh] h-screen bg-gray-200">Fourgh section</div>
</template>
<!--
<template>
  <OrganismsProjectVisual
    headline="projects.didem.content.visual.headline"
    tag="pages.work.content.filter.tags.application"
    :image="{
      src: '/images/projects/didem/lutzweigold_didem_preview.webp',
      alt: 'projects.didem.content.visual.image.alt',
    }"
  />
  <AtomsWrapper html-tag="section" y-padding="xl" class="bg-white">
    <OrganismsOneComponentsRow>
      <AtomsBodyText class="col-span-full lg:col-span-4 lg:col-start-6" data-speed="1.15">
        {{ $t('projects.didem.content.introduction') }}
      </AtomsBodyText>
    </OrganismsOneComponentsRow>
  </AtomsWrapper>
  <AtomsWrapper html-tag="section" y-padding="xl">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="0.95">
            {{ $t('projects.didem.content.interface.headline') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <MoleculesList :list="interfaceList" theme="light" class="self-end" width="half" />
          </template>
          <template #rightCol>
            <AtomsBodyText class="self-top col-span-full lg:col-span-4 lg:col-start-2" data-speed="1.05">
              {{ $t('projects.didem.content.interface.description') }}
            </AtomsBodyText>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <AtomsWrapper html-tag="section" y-padding="xl" class="bg-white">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="0.95">
            {{ $t('projects.didem.content.parser.headline') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <MoleculesList :list="parserList" theme="light" class="self-end" width="half" />
          </template>
          <template #rightCol>
            <AtomsBodyText class="self-top col-span-full lg:col-span-4 lg:col-start-2" data-speed="1.05">
              {{ $t('projects.didem.content.parser.description') }}
            </AtomsBodyText>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <OrganismsOneProjectImage
    :image="{
      src: '/images/projects/didem/lutzweigold_didem_architecture.webp',
      alt: 'projects.didem.content.architecture.image.alt',
    }"
  />
  <AtomsWrapper html-tag="section" y-padding="xl">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="0.95">
            {{ $t('projects.didem.content.dialogManager.headline') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <MoleculesList :list="dialogManagerList" theme="light" class="self-end" width="half" />
          </template>
          <template #rightCol>
            <AtomsBodyText class="self-top col-span-full lg:col-span-4 lg:col-start-2" data-speed="1.05">
              {{ $t('projects.didem.content.dialogManager.description') }}
            </AtomsBodyText>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
  <AtomsWrapper html-tag="section" y-padding="xl" class="bg-white">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h2" class="col-span-full lg:col-span-6" data-speed="0.95">
            {{ $t('projects.didem.content.mobileApplication.headline') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsTwoComponentsRow>
          <template #leftCol>
            <MoleculesList :list="mobileApplicationList" theme="light" class="self-end" width="half" />
          </template>
          <template #rightCol>
            <AtomsBodyText class="self-top col-span-full lg:col-span-4 lg:col-start-2" data-speed="1.05">
              {{ $t('projects.didem.content.mobileApplication.description') }}
            </AtomsBodyText>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
</template>

<script setup lang="ts">
import { ListItem } from '@Types';

const interfaceList: Array<ListItem> = [
  {
    title: 'projects.didem.content.interface.list.technology',
    entries: ['Vue', 'Fastify', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'projects.didem.content.interface.list.preview.name',
    entries: [
      {
        name: 'User interface',
        to: 'https://github.com/LutzDev/admin-frontend',
        title: 'projects.didem.content.interface.list.preview.frontend.title',
      },
      {
        name: 'REST-Api',
        to: 'https://github.com/LutzDev/admin-backend',
        title: 'projects.didem.content.interface.list.preview.backend.title',
      },
    ],
  },
];

const parserList: Array<ListItem> = [
  {
    title: 'projects.didem.content.parser.list.technology',
    entries: ['Ktor', 'Kotlin', 'Jolt', 'MongoDB'],
  },
  {
    title: 'projects.didem.content.parser.list.preview.name',
    entries: [
      {
        name: 'Transformation service',
        to: 'https://github.com/LutzDev/transformation-service',
        title: 'projects.didem.content.parser.list.preview.title',
      },
    ],
  },
];

const dialogManagerList: Array<ListItem> = [
  {
    title: 'projects.didem.content.dialogManager.list.technology',
    entries: ['Ktor', 'Kotlin', 'Jolt', 'MongoDB'],
  },
  {
    title: 'projects.didem.content.dialogManager.list.preview.name',
    entries: [
      {
        name: 'Dialog manager',
        to: 'https://github.com/LutzDev/transformation-service',
        title: 'projects.didem.content.dialogManager.list.preview.title',
      },
    ],
  },
];

const mobileApplicationList: Array<ListItem> = [
  {
    title: 'projects.didem.content.mobileApplication.list.technology',
    entries: ['Flutter', 'Dart'],
  },
  {
    title: 'projects.didem.content.mobileApplication.list.preview.name',
    entries: [
      {
        name: 'Mobile app',
        to: 'https://github.com/LutzDev/transformation-service',
        title: 'projects.didem.content.mobileApplication.list.preview.title',
      },
    ],
  },
];

// TODO: Link zu Dialogmanager
// TODO: Link zu Mobile application
</script>
-->
<script setup lang="ts"></script>
