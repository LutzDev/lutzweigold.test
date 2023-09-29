<template>
  <div class="relative overflow-x-hidden">
    <!--  <OrganismsLoadingScreen v-if="false" />-->
    <div id="smooth-wrapper" class="grid min-h-screen grid-cols-12">
      <OrganismsHeader class="fixed -z-10 bg-red-600" />
      <OrganismsAside class="pointer-events-none fixed left-0 right-0 top-0 z-10" />
      <div id="smooth-content" class="pointer-events-none col-span-full col-start-1 lg:col-span-10 lg:col-start-3">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
    <!--  <div class="fixed -z-10">
    <MoleculesLiquidBackground />
  </div>-->
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
    smooth: 0.8,
    effects: false,
    smoothTouch: false,
  });
});

watch(
  () => route.name,
  () => {
    // console.log(smoother.effects());
    // TODO: fix smoother.effects -> Conflict with scrolltrigger in footer
    smoother.effects().forEach((effect) => effect.kill());
    smoother.effects('[data-lag], [data-speed]');
    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.refresh();
  }
);
</script>
