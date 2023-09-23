<template>
  <AtomsWrapper
    theme="dark"
    is-full-screen
    html-tag="section"
    y-padding="lg"
    class="flex min-h-screen flex-col bg-black"
  >
    <template #default="{ isFullScreen, theme }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsTwoComponentsRow y-gap="none">
          <template #leftCol>
            <AtomsHeadline html-tag="h1" class="col-span-full lg:col-span-8" :theme="theme">
              <span class="block">Oops —</span>, {{ error.message }}
            </AtomsHeadline>
          </template>
          <template #rightCol>
            <div class="col-span-full self-center text-center">
              <AtomsDisplayText theme="dark" html-tag="div" class="mb-xl">
                <span ref="code" class="inline-blockblock">000</span><span class="text-primary">.</span>
              </AtomsDisplayText>
              <div
                class="inline-block cursor-pointer border-2 border-white px-4 py-1 text-white lg:self-start"
                @click="handleError"
              >
                <AtomsBodyText theme="dark" html-tag="span">Go to home</AtomsBodyText>
              </div>
            </div>
          </template>
        </OrganismsTwoComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();
const error = useError();

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
        text: `${error.value.statusCode}`,
        chars: '1234567890_-.',
        tweenLength: true,
      },
      duration: 1,
    });
  });
});
</script>
