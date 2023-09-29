<template>
  <div class="relative overflow-x-hidden">
    <!--  <OrganismsLoadingScreen v-if="false" />-->
    <!--    <div class="pb-safe fixed bottom-0 z-20 h-10 w-full bg-green-500">Test</div>-->
    <AtomsWrapper class="bg-red-black/0 fixed left-0 top-0 z-20 w-full text-white mix-blend-difference lg:hidden"
      >asdasd</AtomsWrapper
    >
    <AtomsWrapper
      class="bg-red-black/0 pb-safe fixed bottom-0 left-0 z-20 w-full text-white mix-blend-difference lg:hidden"
      >asdasd</AtomsWrapper
    >
    <div id="smooth-wrapper" class="grid min-h-screen grid-cols-12">
      <OrganismsAside class="hidden lg:block" />
      <div id="smooth-content" class="pointer-events-none col-span-full row-start-1 lg:col-span-10 lg:col-start-3">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
      <OrganismsHeader class="-z-10 col-span-full row-start-1 h-screen lg:col-span-10 lg:col-start-3" />
    </div>
    <!--  <div class="fixed -z-10">
    <MoleculesLiquidBackground />
  </div>-->
  </div>
</template>
<script lang="ts" setup>
import Header from '~/components/organisms/Header.vue';

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
    ScrollTrigger.refresh();
  }
);
</script>
