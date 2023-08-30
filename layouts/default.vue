<template>
  <main :class="`translate-x pointer-events-auto bg-gray-100 ${open ? 'translate-x-[99%]' : ''}`">
    <slot />
  </main>
  <footer class="pointer-events-auto bg-yellow-600">
    <MoleculesFooter />
  </footer>
</template>

<script lang="ts" setup>
const open = ref<boolean>(false);
</script>
