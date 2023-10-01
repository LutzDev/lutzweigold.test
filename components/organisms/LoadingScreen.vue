<template>
  <div ref="scope" class="fixed left-0 top-0 z-50 w-full overflow-hidden bg-black">
    <AtomsWrapper ref="wrapper" class="h-screen text-white opacity-0">
      <AtomsFlex class="h-full items-center justify-center">
        <div class="text-body text-center">
          <div ref="firstRow">Website is building</div>
          <div ref="secondRow">Website is building</div>
          <div ref="thirdRow">Website is building</div>
        </div>
      </AtomsFlex>
    </AtomsWrapper>
  </div>
</template>

<script setup lang="ts">
import Wrapper from '~/components/atoms/Wrapper.vue';

const { $gsap: gsap, $Power4: Power4, $SplitText: SplitText } = useNuxtApp();
const appStore = useAppStore();
const { toggleLoading } = appStore;

let master: gsap.core.Timeline;
let firstTl: gsap.core.Timeline;
let secondTl: gsap.core.Timeline;
let thirdTl: gsap.core.Timeline;
let ctx: gsap.Context;
const scope = ref<HTMLDivElement | null>(null);
const wrapper = ref<InstanceType<typeof Wrapper> | null>(null);
const firstRow = ref<HTMLDivElement | null>(null);
const secondRow = ref<HTMLDivElement | null>(null);
const thirdRow = ref<HTMLDivElement | null>(null);

onMounted(() => {
  ctx = gsap.context(() => {
    master = gsap.timeline({
      paused: true,
      onComplete: () => toggleLoading(),
    });
    firstTl = gsap.timeline({ repeat: 1 });
    secondTl = gsap.timeline({ repeat: 1 });
    thirdTl = gsap.timeline({ repeat: 1 });

    const firstText = new SplitText(firstRow.value, { types: 'chars', charsClass: 'opacity-0' });
    const secondText = new SplitText(secondRow.value, { types: 'chars', charsClass: 'opacity-0' });
    const thirdText = new SplitText(thirdRow.value, { types: 'chars', charsClass: 'opacity-0' });

    master.set(wrapper.value.target, {
      opacity: '1',
    });
    firstTl.set(firstText.chars, {
      opacity: '1',
      stagger: 0.04,
    });
    firstTl.set(
      firstText.chars,
      {
        opacity: '0',
        stagger: 0.04,
      },
      '+=0.2'
    );

    secondTl.set(secondText.chars, {
      opacity: '1',
      stagger: 0.04,
    });
    secondTl.set(
      secondText.chars,
      {
        opacity: '0',
        stagger: 0.04,
      },
      '+=0.2'
    );

    thirdTl.set(thirdText.chars, {
      opacity: '1',
      stagger: 0.04,
    });
    thirdTl.set(
      thirdText.chars,
      {
        opacity: '0',
        stagger: 0.04,
      },
      '+=0.2'
    );

    master.add(firstTl, '<0.4');
    master.add(secondTl, '<0.2');
    master.add(thirdTl, '<0.2');
    master.to(
      secondRow.value,
      {
        duration: 1,
        scrambleText: {
          text: 'lutzweigold.',
          chars: 'lutzweigold.',
          tweenLength: true,
        },
      },
      '-=1.2'
    );
    master.to(
      secondRow.value,
      {
        duration: 1,
        scrambleText: {
          text: 'enthusiastic developer.',
          chars: 'enthusiastic developer.',
          tweenLength: true,
          newClass: 'text-center',
        },
      },
      '+=0.4'
    );

    master.to(scope.value, {
      x: '100%',
      duration: 1.5,
      ease: Power4.easeInOut,
    });
    master.to(
      wrapper.value.target,
      {
        x: '-80%',
        duration: 1.5,
        ease: Power4.easeInOut,
      },
      '<'
    );
    master.play();
  });
});

onUnmounted(() => {
  ctx.revert();
});
</script>
