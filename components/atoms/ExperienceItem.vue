<template>
  <AtomsGrid :cols="8" y-gap="sm" class="w-full" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <div class="col-span-6 flex items-baseline gap-2 md:col-span-2">
      <AtomsTitleText size="lg" class="inline-block"
        ><span class="md:hidden">{{ $t(props.year) }}</span
        >{{ props.item.year }}</AtomsTitleText
      >
      <div class="mb-1 flex gap-sm md:hidden">
        <AtomsTag v-for="(entry, key) in props.item?.tags" :key="key" :color="entry.color"> {{ entry.name }} </AtomsTag>
      </div>
    </div>
    <div class="col-span-full self-end pb-2 sm:col-span-6 md:col-span-4">
      <div class="mb-1 hidden gap-sm md:flex">
        <AtomsTag v-for="(entry, key) in props.item?.tags" :key="key" :color="entry.color"> {{ entry.name }} </AtomsTag>
      </div>
      <div class="mb-1">
        <AtomsHeadline html-tag="h4"> {{ $t(props.item.title) }}</AtomsHeadline>
        <AtomsSmallText class="mb-0.5 inline-block font-medium tracking-wide text-gray-500 md:block" html-tag="span">{{
          $t(props.item.additionalYear)
        }}</AtomsSmallText>
      </div>
      <ul class="list-inside list-square">
        <AtomsBodyText
          v-for="(entry, key) in $tm(<string>props.item?.description!)"
          :key="key"
          html-tag="li"
          class="col-span-2"
          >{{ $rt(entry) }}</AtomsBodyText
        >
      </ul>
    </div>

    <AtomsButton
      v-if="props.item?.link"
      class="col-span-2 col-start-7 row-start-1 self-end justify-self-end sm:row-start-2 md:row-start-1"
      :event="isHover"
      :to="$t(props.item?.link?.to!)"
    />
  </AtomsGrid>
</template>

<script setup lang="ts">
import { PropType } from 'vue/dist/vue';
import { ExperienceItem } from '@Types';
const isHover = ref<boolean>(false);

const emit = defineEmits<{
  (e: 'external', id: boolean | undefined): void;
}>();

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
