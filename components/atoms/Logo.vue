<template>
  <NuxtLink to="mailto:info@lutzweigold.de">
    <AtomsBodyText html-tag="div" class="inline-flex gap-0.5 whitespace-nowrap">
      <div ref="prefix" class="overflow-hidden">crafted by</div>
      <div class="inline-flex gap-0">
        lutz
        <div ref="lastName" class="w-0 overflow-hidden">weigold</div>
        .
      </div>
    </AtomsBodyText>
  </NuxtLink>
</template>

<script setup lang="ts">
const { $gsap: gsap, $Power4: Power4 } = useNuxtApp();
const modalStore = useModalStore();
const { isModalOpen } = storeToRefs(modalStore);

const prefix = ref<HTMLSpanElement | null>(null);
const lastName = ref<HTMLSpanElement | null>(null);

let ctx: gsap.Context;
let tl: gsap.core.Timeline;
onMounted(() => {
  ctx = gsap.context(() => {
    tl = gsap.timeline({
      paused: true,
    });

    tl.to(lastName.value, {
      width: 'auto',
      duration: 1.5,
      ease: Power4.easeInOut,
    });
    tl.to(
      prefix.value,
      {
        width: 0,
        duration: 1.5,
        ease: Power4.easeInOut,
      },
      '<0.25'
    );

    watch(
      () => isModalOpen.value,
      (newValue) => {
        if (newValue) {
          tl.reverse();
        } else {
          tl.play();
        }
      },
      { immediate: true }
    );
  });
});

onUnmounted(() => {
  ctx.revert();
});
</script>
