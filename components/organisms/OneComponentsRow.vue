<template>
  <AtomsGrid
    :class="`w-full`"
    :cols="props.cols"
    :rows="props.rows"
    :y-gap="props.yGap"
    :x-gap="props.xGap"
    :theme="props.theme"
  >
    <slot :theme="props.theme" />
  </AtomsGrid>
</template>

<script lang="ts" setup>
import { PropType } from 'vue/dist/vue';
import { Grid, Variant } from '@Types';

const props = defineProps({
  fullScreen: {
    type: Boolean,
    default: false,
    required: false,
  },
  cols: {
    type: [Number, String] as PropType<Grid>,
    default: '10',
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
  theme: {
    type: String,
    default: 'bright',
    required: false,
  },
});
</script>
