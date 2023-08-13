<template>
  <component :is="props.htmlTag" class="text-body">
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
    default: 'p',
  },
});
</script>
