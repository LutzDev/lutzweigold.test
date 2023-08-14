<template>
  <component
    :is="props.htmlTag"
    :class="`grid grid-cols-${props.cols} grid-rows-${props.rows} ${noYGap ? '' : 'gap-y'} ${noXGap ? '' : 'gap-x'}`"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { WrapperTag, Grid } from '@Types';

const props = defineProps({
  htmlTag: {
    type: String as PropType<WrapperTag>,
    required: false,
    default: 'div',
  },
  cols: {
    type: [Number, String] as PropType<Grid>,
    default: 'none',
    required: false,
  },
  rows: {
    type: [Number, String] as PropType<Grid>,
    default: 'none',
    required: false,
  },
  noXGap: {
    type: Boolean,
    default: false,
    required: false,
  },
  noYGap: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>
