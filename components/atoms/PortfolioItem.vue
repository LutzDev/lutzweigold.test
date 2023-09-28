<template>
  <NuxtLink
    :to="localePath(String(props.item?.link.to))"
    :title="`${$t('general.phrases.openProject')} ${props.item?.title} `"
  >
    <AtomsGrid
      :cols="10"
      class="cursor-pointer items-center"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <AtomsFlex class="col-span-8 row-start-1 items-baseline xs:col-span-5" x-gap="sm">
        <AtomsBodyText html-tag="span">0{{ props.position }}</AtomsBodyText>
        <AtomsTitleText size="md">{{ props.item.title }}</AtomsTitleText>
      </AtomsFlex>
      <AtomsFlex
        class="col-span-full col-start-1 row-start-2 xs:col-span-3 xs:col-start-6 xs:row-start-1"
        x-gap="sm"
        wrap
        y-gap="sm"
      >
        <AtomsTag v-for="(tag, key) in props.item?.tags" :key="key" :entry="tag" :color="0"></AtomsTag>
      </AtomsFlex>
      <AtomsButton class="col-span-2 col-start-9 justify-self-end" :event="isHover" :to="item.link.to" size="md" />
    </AtomsGrid>
  </NuxtLink>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { PortfolioItem } from '@Types';
const localePath = useLocalePath();
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
