<template>
  <OrganismsLoadingScreen v-if="false" />
  <div id="smooth-wrapper" class="grid min-h-screen grid-cols-12">
    <OrganismsHeader class="fixed -z-10" />
    <OrganismsAside class="pointer-events-none fixed left-0 right-0 top-0 z-10" />
    <div id="smooth-content" class="pointer-events-none col-span-full col-start-1 lg:col-span-10 lg:col-start-3">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
  <div class="fixed -z-10">
    <MoleculesLiquidBackground />
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { $ScrollSmoother: ScrollSmoother, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
const appStore = useAppStore();
const { isAppLoading } = storeToRefs(appStore);

let smoother: ScrollSmoother;

onMounted(() => {
  smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: 0.5,
  });
});

watch(
  () => route.name,
  () => {
    // TODO: fix smoother.effects -> Conflict with scrolltrigger in footer
    ScrollTrigger.refresh();
    smoother.effects().forEach((effect) => effect.kill());
    smoother.effects('[data-lag], [data-speed]');
  }
);
</script>
