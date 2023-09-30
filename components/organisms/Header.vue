<template>
  <header class="w-full bg-red-600">
    <div class="sticky top-0 grid h-screen">
      <MoleculesNavigation
        class="col-span-full row-start-1 flex items-center lg:col-span-10 lg:col-start-3 lg:justify-end"
      />
      <MoleculesSubNavigation
        class="col-span-full row-start-1 flex items-center lg:col-span-10 lg:col-start-3 lg:justify-end"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
const navigationStore = useNavigationStore();
const animationStore = useAnimationStore();
const { navigationState } = navigationStore;

watch(
  () => navigationState.lang,
  (newValue) => {
    if (newValue) {
      animationStore.navigationMaster.value.play();
    } else {
      animationStore.navigationMaster.value.reverse();
    }
  },
  { immediate: true }
);
</script>
