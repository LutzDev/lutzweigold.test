<template>
  <div class="">
    <!--  <OrganismsLoadingScreen v-if="false" />-->
    <!--    <div class="pb-safe fixed bottom-0 z-20 h-10 w-full bg-green-500">Test</div>-->
    <!--    <AtomsWrapper class="bg-red-black/0 fixed left-0 top-0 z-20 w-full text-white mix-blend-difference lg:hidden"
      >asdasd</AtomsWrapper
    >-->
    <MoleculesMobileMenu />
    <div id="smooth-wrapper" class="grid !min-h-[100svh] min-h-screen grid-cols-12">
      <OrganismsAside class="hidden lg:block" />
      <MoleculesLazyLiquidBackground class="-z-10 col-span-full row-start-1" />
      <div id="smooth-content" class="pointer-events-none col-span-full row-start-1 lg:col-span-10 lg:col-start-3">
        <div class="overflow-x-hidden">
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </div>
      </div>
      <OrganismsHeader class="-z-10 col-span-full row-span-full row-start-1 lg:col-span-10 lg:col-start-3" />
    </div>
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
    /*    smoother.effects().forEach((effect) => effect.kill());
    smoother.effects('[data-lag], [data-speed]');
    ScrollTrigger.clearScrollMemory();*/
    smoother.refresh();
    ScrollTrigger.refresh();
  }
);
</script>
