<template>
  <AtomsTitleText
    size="xs"
    html-tag="span"
    :class="`p-x-xs ${
      props.color === 1
        ? 'bg-primary-50 text-primary-800'
        : props.color === 2
        ? 'bg-secondary-50 text-secondary-600'
        : props.color === 0
        ? props.theme === 'light'
          ? 'border-black text-black'
          : 'border-white text-white'
        : ''
    }`"
    ><slot />
  </AtomsTitleText>
</template>

<script setup lang="ts">
import { PropType } from 'vue/dist/vue';
import { Theme } from '@Types';

const props = defineProps({
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
