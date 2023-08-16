<template>
  <AtomsGrid :class="`w-full`" :cols="10" :theme="props.theme">
    <slot :theme="props.theme" />
  </AtomsGrid>
</template>

<script lang="ts" setup>
const props = defineProps({
  fullScreen: {
    type: Boolean,
    default: false,
    required: false,
  },
  theme: {
    type: String,
    default: 'bright',
    required: false,
  },
});
</script>
