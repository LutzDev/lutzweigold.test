<template>
  <NuxtLink :to="props.item?.to">
    <AtomsGrid
      :cols="10"
      class="cursor-pointer items-center"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <AtomsFlex class="col-span-5 items-baseline" x-gap="sm">
        <AtomsBodyText html-tag="span">0{{ props.position }}</AtomsBodyText>
        <AtomsTitleText size="md">{{ props.item.title }}</AtomsTitleText>
      </AtomsFlex>
      <AtomsFlex class="col-span-3 col-start-6" x-gap="sm" wrap y-gap="sm">
        <AtomsTag v-for="(tag, key) in props.item?.tags" :key="key">{{ tag }}</AtomsTag>
      </AtomsFlex>
      <AtomsButton class="col-span-2 col-start-9 justify-self-end" :event="isHover" :to="item.to" size="md" />
    </AtomsGrid>
  </NuxtLink>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { PortfolioItem } from '@Types';

const isHover = ref<boolean>(false);

const props = defineProps({
  item: {
    type: Object as PropType<PortfolioItem>,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
});
</script>
