<template>
  <component
    :is="props.htmlTag"
    :class="`flex ${wrap ? 'flex-wrap' : ''} ${
      props.yGap === 'sm' ? 'gapy-sm' : props.yGap === 'md' ? 'gapy-md' : props.yGap === 'lg' ? 'gapy-lg' : 'gap-y-0'
    } ${
      props.xGap === 'sm' ? 'gapx-sm' : props.xGap === 'md' ? 'gapx-md' : props.xGap === 'lg' ? 'gapx-lg' : 'gap-x-0'
    } ${props.isFullScreen ? 'flex-1 content-between' : ''}`"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { WrapperTag, Variant } from '@Types';

const props = defineProps({
  htmlTag: {
    type: String as PropType<WrapperTag>,
    required: false,
    default: 'div',
  },
  wrap: {
    type: Boolean,
    default: false,
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
