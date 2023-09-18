<template>
  <AtomsBodyText
    :class="`p-x-xs inline-block rounded-full border-2 ${
      props.theme === 'light' ? 'border-black text-black' : 'border-white text-white'
    }`"
    ><slot />
  </AtomsBodyText>
</template>

<script setup lang="ts">
import { PropType } from 'vue/dist/vue';
import { Theme } from '@Types';

const props = defineProps({
  theme: {
    type: String as PropType<Theme>,
    default: 'light',
    required: false,
  },
});
</script>
