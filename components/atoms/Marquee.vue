<template>
  <div class="overflow-hidden">
    <div class="wrapper relative flex text-6xl">
      <div ref="target" class="box flex">
        <AtomsTitleText html-tag="span" size="md" class="self-center px-4" :theme="props.theme">{{
          $t(props.title)
        }}</AtomsTitleText>
        <AtomsTitleText html-tag="span" size="md" class="self-center px-4" :theme="props.theme">—</AtomsTitleText>
        <AtomsTitleText html-tag="span" size="md" class="self-center px-4" :theme="props.theme">{{
          $t(props.title)
        }}</AtomsTitleText>
        <AtomsTitleText html-tag="span" size="md" class="self-center px-4" :theme="props.theme">—</AtomsTitleText>
        <AtomsTitleText html-tag="span" size="md" class="self-center px-4" :theme="props.theme">{{
          $t(props.title)
        }}</AtomsTitleText
        ><AtomsTitleText html-tag="span" size="md" class="self-center px-4" :theme="props.theme">—</AtomsTitleText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue/dist/vue';
import { Theme } from '@Types';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const target = ref<HTMLDivElement | null>(null);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String as PropType<Theme>,
    default: 'light',
    required: false,
  },
});

onMounted(() => {
  const ctx = gsap.context(() => {});
  ctx.add(() => {
    let direction = 1;

    const tl = marquee(target.value!, { duration: 30 }, props.reverse || false);
    ScrollTrigger.create({
      refreshPriority: 1,
      invalidateOnRefresh: true,

      onUpdate(self) {
        if (self.direction !== direction) {
          direction *= -1;
          gsap.to([tl], { timeScale: direction, overwrite: true });
        }
      },
      markers: false,
    });
  });
});

function marquee(targets: HTMLDivElement | HTMLDivElement[], vars: any, reverse: boolean): gsap.core.Timeline {
  vars = vars || {};
  vars.ease || (vars.ease = 'none');
  const tl: gsap.core.Timeline = gsap.timeline({
    repeat: -1,
    onReverseComplete() {
      this.totalTime(this.rawTime() + this.duration() * 10);
    },
  });
  const elements: Element[] = gsap.utils.toArray(targets);
  const clones: Element[] = elements.map((el: Element) => {
    const clone: Element = el.cloneNode(true) as Element;
    if (el.parentNode) {
      el.parentNode.appendChild(clone);
    }
    return clone;
  });
  const positionClones = (): void =>
    elements.forEach((el: Element, i: number) => {
      if (el instanceof HTMLElement) {
        gsap.set(clones[i], {
          position: 'absolute',
          overwrite: false,
          top: el.offsetTop,
          left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
        });
      }
    });
  positionClones();
  elements.forEach((el: Element, i: number) => tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0));
  window.addEventListener('resize', () => {
    const time: number = tl.totalTime();
    tl.totalTime(0);
    positionClones();
    tl.totalTime(time);
  });
  return tl;
}
</script>
