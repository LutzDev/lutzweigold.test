<template>
  <AtomsGrid :cols="6" y-gap="sm" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <div :class="`${props.item?.link ? 'col-span-5 xs:col-span-4' : 'col-span-full'} row-start-1`">
      <div class="mb-1 flex gap-sm">
        <AtomsTag
          v-for="(entry, key) in props.item?.tags"
          :key="key"
          :color="entry.color"
          :entry="entry.name"
          class="md:opacity-25"
        />
      </div>
      <AtomsHeadline html-tag="h4"> {{ $t(props.item.title) }}</AtomsHeadline>
      <AtomsSmallText class="mb-0.5 block font-medium tracking-wide text-gray-500" html-tag="span">{{
        $t(props.item.additionalYear)
      }}</AtomsSmallText>
      <ul class="list-outside list-square pl-2">
        <AtomsBodyText
          v-for="(entry, key) in $tm(<string>props.item?.description!)"
          :key="key"
          html-tag="li"
          class="col-span-1 xs:col-span-2"
          >{{ $rt(entry) }}</AtomsBodyText
        >
      </ul>
    </div>
    <AtomsButton
      v-if="props.item?.link"
      class="col-span-1 row-start-1 self-start justify-self-end xs:col-span-2 xs:self-end"
      :event="isHover"
      :to="$t(props.item?.link?.to!)"
    />
  </AtomsGrid>
</template>

<script setup lang="ts">
import { PropType } from 'vue/dist/vue';
import { ExperienceItem } from '@Types';
const isHover = ref<boolean>(false);

const props = defineProps({
  item: {
    type: Object as PropType<ExperienceItem>,
    required: true,
  },
});
</script>
