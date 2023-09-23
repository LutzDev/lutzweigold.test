<template>
  <component :is="props.htmlTag" :class="`text-display ${props.theme === 'light' ? 'text-black' : 'text-white'}`">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { TextTag } from '@Types';

const props = defineProps({
  htmlTag: {
    type: String as PropType<TextTag>,
    required: false,
    default: 'span',
  },
  theme: {
    type: String as PropType<Theme>,
    default: 'light',
    required: false,
  },
});
</script>
p
