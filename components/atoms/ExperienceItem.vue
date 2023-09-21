<template>
  <AtomsGrid :cols="8" y-gap="sm" class="w-full" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <div class="col-span-6 flex items-baseline gap-2 md:col-span-2">
      <AtomsTitleText size="lg" class="inline-block"
        ><span class="md:hidden">{{ props.year }}</span
        >{{ props.item.year }}</AtomsTitleText
      >
      <AtomsSmallText
        class="inline-block font-medium uppercase tracking-wide text-gray-500 md:hidden"
        html-tag="span"
        >{{ props.item.additionalYear }}</AtomsSmallText
      >
    </div>
    <div class="col-span-full self-end sm:col-span-6 md:col-span-4">
      <AtomsSmallText
        class="mb-1 inline-block hidden font-medium uppercase tracking-wide text-gray-500 md:block"
        html-tag="span"
        >{{ props.item.additionalYear }}</AtomsSmallText
      >
      <AtomsHeadline html-tag="h4" class="mb-0"> {{ props.item.title }}</AtomsHeadline>
      <AtomsGrid v-if="Array.isArray(props.item?.description)" :cols="4" y-gap="none">
        <AtomsBodyText v-for="(entry, key) in props.item?.description" :key="key" class="col-span-2"
          >- {{ entry }}</AtomsBodyText
        >
      </AtomsGrid>
      <AtomsBodyText v-else class="col-span-full">{{ props.item.description }}</AtomsBodyText>
    </div>

    <AtomsButton
      v-if="props.item?.to"
      class="col-span-2 col-start-7 row-start-1 self-end justify-self-end sm:row-start-2 md:row-start-1"
      :event="isHover"
      :to="props.item.to"
    />
  </AtomsGrid>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import { PropType } from 'vue/dist/vue';
import { ExperienceItem } from '@Types';

const breakpoints = useBreakpoints(breakpointsTailwind);

const isHover = ref<boolean>(false);

const props = defineProps({
  year: {
    type: Number,
    required: true,
  },
  item: {
    type: Object as PropType<ExperienceItem>,
    required: true,
  },
});
</script>
