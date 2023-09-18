<template>
  <component
    :is="props.htmlTag"
    ref="target"
    :class="`${
      props.xPadding === 'sm'
        ? 'p-x-sm'
        : props.xPadding === 'md'
        ? 'p-x-md'
        : props.xPadding === 'lg'
        ? 'p-x-lg'
        : props.xPadding === 'xl'
        ? 'p-x-xl'
        : ''
    } ${
      props.yPadding === 'sm'
        ? 'p-y-sm'
        : props.yPadding === 'md'
        ? 'p-y-md'
        : props.yPadding === 'lg'
        ? 'p-y-lg'
        : props.yPadding === 'xl'
        ? 'p-y-xl'
        : ''
    } ${isFullScreen ? 'full-screen' : ''}`"
  >
    <slot :is-full-screen="props.isFullScreen" :theme="props.theme" />
  </component>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { WrapperTag, Variant } from '@Types';

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
  theme: {
    type: String,
    default: 'light',
    required: false,
  },
});
</script>
