<template>
  <aside class="grid-row-1 fixed left-0 right-0 top-0 z-10 grid h-[100dvh] w-full grid-cols-12 lg:grid-rows-2">
    <AtomsWrapper
      class="pointer-events-auto col-span-full col-start-1 flex justify-between self-start lg:col-span-2 lg:block lg:space-y-4"
    >
      <AtomsBodyText @click="console.log('Logo')">crafted by lutz.</AtomsBodyText>
      <div>
        <AtomsSmallText>+49 152 26269766</AtomsSmallText>
        <AtomsSmallText>info@lutzweigold.de</AtomsSmallText>
      </div>
    </AtomsWrapper>
    <AtomsWrapper class="col-span-full col-start-1 row-start-2 self-end lg:col-span-2">
      <div
        class="flex flex-row-reverse divide-x-2 divide-x-reverse divide-white border-2 border-white lg:block lg:divide-x-0 lg:divide-y-2"
      >
        <div
          class="pointer-events-auto flex w-1/2 cursor-pointer justify-between px-2 py-1 text-white lg:w-full"
          @click="toggleModal"
        >
          <AtomsBodyText html-tag="span">Menu</AtomsBodyText>
          <AtomsBodyText html-tag="span">[<span ref="text"></span>]</AtomsBodyText>
        </div>
        <div class="flex w-1/2 justify-between px-2 py-1 text-white lg:w-full">
          <AtomsBodyText html-tag="span">Language</AtomsBodyText>
          <AtomsBodyText html-tag="span">[DE]</AtomsBodyText>
        </div>
      </div>
    </AtomsWrapper>
  </aside>
</template>

<script lang="ts" setup>
const { $gsap: gsap } = useNuxtApp();
const route = useRoute();
const modalStore = useModalStore();
const text = ref();
const { toggleModal } = modalStore;
let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    watch(
      () => route.name,
      (newValue) => {
        gsap.to(text.value, {
          duration: 1,
          scrambleText: {
            text: `${newValue !== 'index' ? String(newValue) : 'about'}`,
            chars: '/$#',
            tweenLength: true,
          },
        });
      },
      { immediate: true }
    );
  });
});

onUnmounted(() => {
  ctx.revert();
});
</script>
