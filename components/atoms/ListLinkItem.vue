<template>
  <NuxtLink
    class="col-span-full flex items-center justify-between py-sm"
    :to="props.to"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <AtomsBodyText html-tag="span">{{ props.name }}</AtomsBodyText>
    <AtomsButton :event="hover" size="sm" :to="to" />
  </NuxtLink>
</template>

<script setup lang="ts">
const hover = ref<boolean>(false);

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: 'bright',
    required: false,
  },
});
</script>
