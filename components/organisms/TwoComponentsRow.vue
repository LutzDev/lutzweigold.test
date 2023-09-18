<template>
  <AtomsGrid class="w-full" :cols="10" :theme="props.theme">
    <AtomsGrid :cols="5" class="col-span-full w-full md:col-span-5">
      <slot :theme="props.theme" name="leftCol" />
    </AtomsGrid>
    <AtomsGrid :cols="5" class="col-span-full w-full md:col-span-5">
      <slot :theme="props.theme" name="rightCol" />
    </AtomsGrid>
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
    default: 'light',
    required: false,
  },
});
</script>
