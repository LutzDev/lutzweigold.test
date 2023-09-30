<template>
  <!--  <OrganismsLoadingScreen v-if="false" />-->
  <!--    <div class="pb-safe fixed bottom-0 z-20 h-10 w-full bg-green-500">Test</div>-->
  <!--    <AtomsWrapper class="bg-red-black/0 fixed left-0 top-0 z-20 w-full text-white mix-blend-difference lg:hidden"
    >asdasd</AtomsWrapper
  >-->
  <MoleculesMobileMenu @click="console.log('mobile')" />
  <div
    id="smooth-wrapper"
    class="pointer-events-none grid !min-h-[100svh] min-h-screen touch-none grid-cols-12"
    @click="console.log('smooth-wrapper')"
  >
    <OrganismsAside class="hidden lg:block" @click="console.log('aside')" />
    <MoleculesLazyLiquidBackground class="-z-10 col-span-full row-start-1" @click="console.log('header')" />
    <div
      id="smooth-content"
      class="pointer-events-none z-20 col-span-full row-start-1 touch-none lg:col-span-10 lg:col-start-3"
      @click="console.log('smooth-content')"
    >
      <div class="pointer-events-none touch-none overflow-x-hidden">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
    <OrganismsHeader
      class="col-span-full row-span-full row-start-1 lg:col-span-10 lg:col-start-3"
      @click="console.log('header')"
    />
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { $ScrollSmoother: ScrollSmoother, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
const appStore = useAppStore();
const { isAppLoading } = storeToRefs(appStore);
const modalStore = useModalStore();
const { smoother } = storeToRefs(modalStore);

onMounted(() => {
  smoother.value = ScrollSmoother.create({
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
    // smoother.refresh();
    ScrollTrigger.refresh();
  }
);
</script>
