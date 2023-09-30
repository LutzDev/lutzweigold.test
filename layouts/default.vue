<template>
  <main ref="main" class="`translate-x pointer-events-auto overflow-hidden bg-gray-100">
    <div ref="mainContent">
      <slot />
    </div>
  </main>
  <footer ref="footer" class="pointer-events-auto overflow-hidden bg-black">
    <div ref="footerContent">
      <MoleculesFooter />
    </div>
  </footer>
</template>

<script lang="ts" setup>
const { $gsap: gsap, $Power4: Power4 } = useNuxtApp();
const modalStore = useModalStore();
const { isModalOpen, smoother } = storeToRefs(modalStore);
const animationStore = useAnimationStore();

let tl: gsap.core.Timeline;
let ctx: gsap.Context;
const main = ref(null);
const footer = ref(null);
const mainContent = ref(null);
const footerContent = ref(null);

onMounted(() => {
  ctx = gsap.context(() => {
    tl = gsap.timeline({
      onStart: () => {
        smoother.value?.paused(true);
      },
      onReverseComplete: () => {
        smoother.value?.paused(false);
      },
      data: { name: 'DEFAULT' },
      defaults: { ease: Power4.easeInOut, duration: 2 },
    });
    tl.to(
      [main.value, footer.value],
      {
        x: '100%',
      },
      0
    );
    tl.to(
      [mainContent.value, footerContent.value],
      {
        x: '-50%',
      },
      0
    );
    animationStore.master.value.add(tl, 0);
  });

  watch(
    () => isModalOpen.value,
    (state) => {
      if (!state) {
        animationStore.master.value.play();
      } else {
        animationStore.master.value.reverse();
      }
    },
    { immediate: true }
  );
});

onUnmounted(() => {
  ctx.revert();
  ctx.kill();
});
</script>
