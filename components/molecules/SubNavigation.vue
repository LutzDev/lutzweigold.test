<template>
  <AtomsWrapper html-tag="nav">
    <ul ref="scope" class="sm:flex sm:flex-wrap sm:gap-x-10 xl:justify-end">
      <AtomsLangSwitchItem v-for="(item, key) in locales" :key="key" :prefix="key + 1" :lang="item.code"
        >{{ item.name }}
      </AtomsLangSwitchItem>
    </ul>
  </AtomsWrapper>
</template>

<script lang="ts" setup>
const { $gsap: gsap, $Power2: Power2 } = useNuxtApp();
const animationStore = useAnimationStore();
const { locales } = useI18n();

const scope = ref();
let tlReveal: gsap.core.Timeline;
let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    tlReveal = gsap.timeline({
      data: { name: 'SUBNAVIGATION' },
      defaults: { ease: Power2.easeOut, duration: 0.8 },
    });

    tlReveal.to('.navItem', {
      y: 0,
      stagger: 0.1,
    });

    animationStore.navigationMaster.value.add(tlReveal, '<80%');
  }, scope.value!);
});

onUnmounted(() => {
  ctx.revert();
});
</script>
