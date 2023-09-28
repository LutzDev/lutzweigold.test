<template>
  <AtomsWrapper is-full-screen html-tag="section" y-padding="lg">
    <template #default="{ isFullScreen }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="sm">
        <OrganismsTwoComponentsRow data-speed="clamp(1.15)" data-lag="clamp(0.25)">
          <template #leftCol>
            <NuxtLink
              :to="localePath('work')"
              :title="$t('general.phrases.closeProject')"
              class="col-span-full row-start-1 flex cursor-pointer items-center gap-sm self-end justify-self-start lg:col-span-4 lg:col-start-1"
              @mouseenter="isHover = true"
              @mouseleave="isHover = false"
            >
              <AtomsButton size="sm" :to="localePath('work')" class="-scale-x-100" :event="isHover" />
              <AtomsBodyText> {{ $t('projects.general.back') }} </AtomsBodyText>
            </NuxtLink>
          </template>
          <template #rightCol>
            <AtomsHeadline html-tag="h1" class="col-span-full"> {{ $t(props.headline) }} </AtomsHeadline>
          </template>
        </OrganismsTwoComponentsRow>
        <OrganismsOneComponentsRow>
          <AtomsParallaxImage
            class="col-span-full"
            :priority="10"
            :image="{ src: props.image?.src!, alt: props.image?.alt! }"
          >
            <AtomsTag theme="dark" :color="0" :entry="props.tag!" />
          </AtomsParallaxImage>
        </OrganismsOneComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Image } from '@Types';

const isHover = ref<boolean>(false);
const localePath = useLocalePath();

const props = defineProps({
  headline: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  image: {
    type: Object as PropType<Image>,
    required: true,
  },
});
</script>
