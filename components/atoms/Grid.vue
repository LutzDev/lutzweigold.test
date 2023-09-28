<template>
  <component
    :is="props.htmlTag"
    ref="target"
    :class="`grid grid-cols-${props.cols} grid-rows-${props.rows} ${
      props.yGap === 'sm' ? 'gapy-sm' : props.yGap === 'md' ? 'gapy-md' : props.yGap === 'lg' ? 'gapy-lg' : 'gap-y-0'
    } ${
      props.xGap === 'sm' ? 'gapx-sm' : props.xGap === 'md' ? 'gapx-md' : props.xGap === 'lg' ? 'gapx-lg' : 'gap-x-0'
    } ${props.isFullScreen ? 'flex-1' : ''}`"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { WrapperTag, Grid, Variant } from '@Types';

const target = ref<HTMLDivElement | null>(null);

defineExpose({
  target,
});

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
  yGap: {
    type: String as PropType<Variant>,
    required: false,
    default: 'md',
  },
  xGap: {
    type: String as PropType<Variant>,
    required: false,
    default: 'md',
  },
  isFullScreen: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
