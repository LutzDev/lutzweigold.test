<template>
  <AtomsWrapper :html-tag="props.htmlTag" class="flex min-h-screen flex-wrap content-between" variant="md">
    <slot />
  </AtomsWrapper>
</template>

<script lang="ts" setup>
import { PropType } from 'vue/dist/vue';
import { Variant, WrapperTag } from '@Types';

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
