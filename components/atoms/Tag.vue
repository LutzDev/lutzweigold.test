<template>
  <AtomsSmallText
    html-tag="span"
    :class="`tag p-x-xs ${
      props.color === 1
        ? 'bg-primary-100 text-primary-800'
        : props.color === 2
        ? 'bg-secondary-100 text-secondary-700'
        : props.color === 0
        ? props.theme === 'light'
          ? 'border-2 border-black text-black'
          : 'border-2 border-white text-white'
        : ''
    }`"
  >
    {{ $t(props.entry) }}
  </AtomsSmallText>
</template>

<script setup lang="ts">
import { PropType } from 'vue/dist/vue';
import { Theme } from '@Types';

const props = defineProps({
  entry: {
    type: String,
    required: true,
  },
  color: {
    type: Number as PropType<0 | 1 | 2>,
    default: 0,
    required: false,
  },
  theme: {
    type: String as PropType<Theme>,
    default: 'light',
    required: false,
  },
});
</script>

<!--
${
props.theme === 'light' && props.color === 0 ? 'border-black text-black' : 'border-white text-white'
}-->
