<template>
  <AtomsWrapper html-tag="nav">
    <ul ref="scope" class="sm:flex sm:flex-wrap sm:gap-x-10 xl:justify-end">
      <AtomsNavigationItem v-for="(item, key) in navItems" :key="key" :prefix="key + 1" :to="item.to"
        >{{ item.entry }}
      </AtomsNavigationItem>
    </ul>
  </AtomsWrapper>
</template>

<script lang="ts" setup>
const { $gsap: gsap, $Power4: Power4 } = useNuxtApp();
const animationStore = useAnimationStore();

const scope = ref();
let tlReveal: gsap.core.Timeline;
let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    tlReveal = gsap.timeline({
      data: { name: 'SUBNAVIGATION' },
      defaults: { ease: Power4.easeInOut, duration: 3 },
    });

    tlReveal.to('.navItem', {
      y: 0,
      stagger: 0.15,
    });

    animationStore.master.value.add(tlReveal, '0-=0.5');
  }, scope.value!);
});

onUnmounted(() => {
  ctx.revert();
});

const navItems = [
  {
    entry: 'German',
    to: '/',
  },
  {
    entry: 'English',
    to: '/work',
  },
];
</script>
