<template>
  <NuxtLink
    class="col-span-full flex items-center justify-between py-sm"
    :to="props.to"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <AtomsBodyText html-tag="span" :theme="props.theme">{{ props.name }}</AtomsBodyText>
    <AtomsButton :event="hover" size="sm" :to="to" :theme="props.theme" />
  </NuxtLink>
</template>

<script setup lang="ts">
import { PropType } from 'vue/dist/vue';
import { Theme } from '@Types';

const hover = ref<boolean>(false);

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  theme: {
    type: String as PropType<Theme>,
    default: 'light',
    required: false,
  },
});
</script>
