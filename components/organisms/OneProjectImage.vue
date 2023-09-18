<template>
  <AtomsWrapper html-tag="section" y-padding="xl" class="bg-gray-200">
    <template #default>
      <OrganismsOneComponentsRow>
        <template #default>
          <AtomsParallaxImage
            class="col-span-full md:col-span-8 md:col-start-2"
            :image="{ src: props.image?.src!, alt: props.image?.alt! }"
          />
        </template>
      </OrganismsOneComponentsRow>
    </template>
  </AtomsWrapper>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Image } from '@Types';

const props = defineProps({
  image: {
    type: Object as PropType<Image>,
    required: true,
  },
});
</script>
