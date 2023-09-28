<template>
  <AtomsGrid ref="wrapper" :cols="8" y-gap="none">
    <AtomsTitleText size="lg" class="col-span-full mb-md inline-block xs:col-span-2 xs:mb-0">
      <span class="inline-block md:hidden">{{ props.year }}</span
      >{{ props.item.year }}
    </AtomsTitleText>
    <template v-for="(entry, key) in props.item.items" :key="key">
      <NuxtLink
        v-if="entry.link"
        target="_blank"
        :title="$t(entry.link.title)"
        :to="$t(entry.link.to)"
        class="col-span-full w-full self-end xs:col-span-6 xs:col-start-3"
      >
        <AtomsExperienceItem :item="entry" />
      </NuxtLink>
      <AtomsExperienceItem v-else :item="entry" class="col-span-full w-full self-end xs:col-span-6 xs:col-start-3" />
      <div
        v-if="key !== props.item.items.length - 1"
        class="col-span-full my-2 h-[2px] w-full bg-black/10 xs:col-span-6 xs:col-start-3"
      ></div>
    </template>
  </AtomsGrid>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ExperienceItem } from '@Types';

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
