<template>
  <component
    :is="props.htmlTag"
    :class="` ${
      props.htmlTag === 'h1'
        ? 'first-headline'
        : props.htmlTag === 'h2'
        ? 'second-headline '
        : props.htmlTag === 'h3'
        ? 'third-headline'
        : 'fourth-headline'
    } ${props.theme === 'light' ? 'text-black' : 'text-white'}`"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { HeadlineTag, Theme } from '@Types';

// TODO: col-span-full md:col-span-6 lg:col-span-8

const props = defineProps({
  htmlTag: {
    type: String as PropType<HeadlineTag>,
    required: true,
    default: 'h1',
  },
  theme: {
    type: String as PropType<Theme>,
    default: 'light',
    required: false,
  },
});
</script>
