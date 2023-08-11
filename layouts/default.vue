<template>
  <main :class="`translate-x pointer-events-auto bg-red-500 ${open ? 'translate-x-[99%]' : ''}`" @click="open = !open">
    <slot />
  </main>
  <footer class="bg-yellow-600">Footer</footer>
</template>

<script lang="ts" setup>
const open = ref<boolean>(false);
</script>
