<template>
  <AtomsWrapper html-tag="nav">
    <ul ref="scope" class="sm:flex sm:flex-wrap sm:gap-x-10 xl:justify-end">
      <AtomsNavigationItem
        v-for="(item, key) in navItems"
        :key="key"
        :prefix="key + 1"
        :to="item.to"
        :name="item.name"
        :title="item.title"
      />
    </ul>
  </AtomsWrapper>
</template>

<script lang="ts" setup>
const { $gsap: gsap, $Power2: Power2 } = useNuxtApp();
const animationStore = useAnimationStore();

const scope = ref();
let tlReveal: gsap.core.Timeline;
let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    tlReveal = gsap.timeline({
      data: { name: 'NAVIGATION' },
      defaults: { ease: Power2.easeOut, duration: 0.8 },
    });

    tlReveal.to('.navItem', {
      y: 0,
      stagger: 0.1,
    });

    animationStore.navigationMaster.value.add(tlReveal.reverse(0));
  }, scope.value!);
});

onUnmounted(() => {
  ctx.revert();
});

const navItems = [
  {
    name: 'pages.about.name',
    title: 'pages.about.title',
    to: 'index',
  },
  {
    name: 'pages.work.name',
    title: 'pages.work.title',
    to: 'work',
  },
  {
    name: 'pages.skill.name',
    title: 'pages.skill.title',
    to: 'skill',
  },
  {
    name: 'pages.contact.name',
    title: 'pages.contact.title',
    to: 'contact',
  },
];
</script>
