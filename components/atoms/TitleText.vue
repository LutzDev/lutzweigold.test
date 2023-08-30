<template>
  <component
    :is="props.htmlTag"
    :class="`${
      props.size === 'sm'
        ? 'text-title-sm font-normal'
        : props.size === 'md'
        ? 'text-title-md font-light'
        : props.size === 'lg'
        ? 'text-title-lg font-light'
        : ''
    } `"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { TextTag, Variant } from '@Types';

const props = defineProps({
  htmlTag: {
    type: String as PropType<TextTag>,
    required: false,
    default: 'span',
  },

  size: {
    type: String as PropType<Variant>,
    required: false,
    default: 'md',
  },
});
</script>
p
