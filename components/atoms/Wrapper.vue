<template>
  <component
    :is="props.htmlTag"
    :class="`${
      props.xPadding === 'sm' ? 'p-x-sm' : props.xPadding === 'md' ? 'p-x-md' : props.xPadding === 'lg' ? 'p-x-lg' : ''
    } ${
      props.yPadding === 'sm' ? 'p-y-sm' : props.yPadding === 'md' ? 'p-y-md' : props.yPadding === 'lg' ? 'p-y-lg' : ''
    } ${isFullScreen ? 'full-screen' : ''}`"
  >
    <slot :is-full-screen="props.isFullScreen" />
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
  xPadding: {
    type: String as PropType<Variant>,
    required: false,
    default: 'md',
  },
  yPadding: {
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
