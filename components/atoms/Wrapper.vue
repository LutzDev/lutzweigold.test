<template>
  <component
    :is="props.htmlTag"
    :class="`${props.variant === 'sm' ? 'p-x-sm p-y-sm' : props.variant === 'md' ? 'p-x-md p-y-md' : 'p-x-lg p-y-lg'}`"
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
  variant: {
    type: String as PropType<Variant>,
    required: false,
    default: 'md',
  },
});
</script>
