<template>
  <AtomsWrapper
    theme="dark"
    is-full-screen
    html-tag="section"
    y-padding="lg"
    class="flex min-h-screen flex-col bg-black"
  >
    <template #default="{ theme }">
      <AtomsFlex wrap y-gap="lg" class="flex-1 content-start md:content-between">
        <OrganismsOneComponentsRow y-gap="none">
          <template #default>
            <AtomsHeadline html-tag="h1" class="col-span-full md:col-span-8" :theme="theme">
              <span class="block">Oops, it seems that you got lost on the page.</span>
            </AtomsHeadline>
          </template>
        </OrganismsOneComponentsRow>
        <OrganismsOneComponentsRow y-gap="none">
          <template #default>
            <AtomsDisplayText theme="dark" html-tag="div" class="col-span-full text-center md:text-right">
              <span ref="code">000</span>
              <span class="text-primary">.</span>
            </AtomsDisplayText>
          </template>
        </OrganismsOneComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();

definePageMeta({
  layout: 'footerless',
});

let ctx: gsap.Context;
const code = ref<HTMLSpanElement | null>(null);

const handleError = () => {
  clearError({
    redirect: '/',
  });
};

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.to(code.value, {
      scrambleText: {
        text: `404`,
        chars: '1234567890_-.',
        tweenLength: true,
      },
      duration: 2,
    });
  });
});

onUnmounted(() => {
  ctx.revert();
});
</script>
