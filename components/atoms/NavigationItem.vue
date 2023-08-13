<template>
  <li class="flex items-baseline gap-2">
    <AtomsBodyText html-tag="span">0{{ props.prefix }}</AtomsBodyText>
    <NuxtLink :to="props.to">
      <AtomsDisplayText class="pointer-events-auto cursor-pointer" html-tag="span">
        <slot />
      </AtomsDisplayText>
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  prefix: {
    type: Number,
    required: true,
  },
});
</script>
