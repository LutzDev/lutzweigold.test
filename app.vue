<template>
  <!--  <OrganismsLoadingScreen v-if="false" />-->
  <!--    <div class="pb-safe fixed bottom-0 z-20 h-10 w-full bg-green-500">Test</div>-->
  <!--    <AtomsWrapper class="bg-red-black/0 fixed left-0 top-0 z-20 w-full text-white mix-blend-difference lg:hidden"
    >asdasd</AtomsWrapper
  >-->
  <MoleculesStickyHeader v-if="viewport.isLessThan('desktop')" />
  <MoleculesMobileMenu v-if="viewport.isLessThan('desktop')" />
  <div id="smooth-wrapper" class="pointer-events-none grid !min-h-[100svh] min-h-screen grid-cols-12">
    <OrganismsAside v-if="viewport.isGreaterOrEquals('desktop')" />
    <MoleculesLazyLiquidBackground class="pointer-events-none -z-10 col-span-full row-start-1 touch-none" />
    <div id="smooth-content" class="z-20 col-span-full row-start-1 lg:col-span-10 lg:col-start-3">
      <div class="overflow-x-hidden">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
    <OrganismsHeader class="col-span-full row-span-full row-start-1 lg:col-span-10 lg:col-start-3" />
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { $gsap: gsap, $ScrollSmoother: ScrollSmoother, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
// const appStore = useAppStore();
// const { isAppLoading } = storeToRefs(appStore);
const modalStore = useModalStore();
const { smoother } = storeToRefs(modalStore);
let mm: gsap.MatchMedia;
let ctx: gsap.Context;
const viewport = useViewport();

onMounted(() => {
  useHead({
    bodyAttrs: {
      class: 'overscroll-none',
    },
  });
  ctx = gsap.context(() => {
    mm = gsap.matchMedia();
    mm.add('(min-width: 640px)', () => {
      if (ScrollTrigger.isTouch === 0) {
        smoother.value = ScrollSmoother.create({
          smooth: 0.8,
          ignoreMobileResize: true,
          effects: true,
        });
      }
    });
  });
});

onUnmounted(() => {
  ctx.revert();
});

watch(
  () => route.name,
  () => {
    smoother.value?.effects().forEach((effect) => effect.kill());
    smoother.value?.effects('[data-lag], [data-speed]');
    smoother.value?.scrollTo(0, true);
  }
);
</script>
