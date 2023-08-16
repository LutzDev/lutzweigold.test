<template>
  <component
    :is="props.htmlTag"
    :class="`col-span-full md:col-span-6 lg:col-span-8 ${
      props.htmlTag === 'h1'
        ? 'first-headline'
        : props.htmlTag === 'h2'
        ? 'second-headline'
        : props.htmlTag === 'h3'
        ? 'third-headline'
        : 'fourth-headline'
    }`"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { HeadlineTag } from '@Types';

const props = defineProps({
  htmlTag: {
    type: String as PropType<HeadlineTag>,
    required: true,
    default: 'h1',
  },
});
</script>
