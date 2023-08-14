<template>
  <div id="smooth-wrapper" class="grid min-h-screen grid-cols-12">
    <OrganismsHeader class="fixed -z-10" />
    <OrganismsAside class="pointer-events-none fixed left-0 right-0 top-0 z-10" />
    <div id="smooth-content" class="pointer-events-none col-span-full col-start-1 xl:col-span-10 xl:col-start-3">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { $ScrollSmoother: ScrollSmoother } = useNuxtApp();
onMounted(() => {
  ScrollSmoother.create({
    smooth: 2, // how long (in seconds) it takes to "catch up" to native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.5, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });
});
</script>
