<template>
  <NuxtLink :title="$t(props.title!)" :to="$t(props.to!)">{{ $t(props.name!) }}</NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>
