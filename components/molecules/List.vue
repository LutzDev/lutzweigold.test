<template>
  <div ref="scope" class="col-span-full">
    <div
      v-if="props.title"
      :class="`p-y-1 w-full whitespace-nowrap border-t-2 text-4xl ${
        props.theme === 'bright' ? 'border-black' : 'border-white'
      }`"
    >
      <AtomsMarquee :title="props.title.name" :reverse="props.title.reverse" />
    </div>
    <AtomsGrid v-for="(item, key) in props.list" :key="key" :cols="10" y-gap="none" class="border-t-2 border-black">
      <AtomsBodyText html-tag="span" class="col-span-5 py-sm md:col-span-6">{{ item.title }}</AtomsBodyText>
      <div
        v-for="(entry, index) in item.entries"
        :key="index"
        class="col-span-5 col-start-6 md:col-span-4 md:col-start-7"
      >
        <AtomsListLinkItem v-if="typeof entry === 'object'" :name="entry.name" :to="entry.to" />
        <AtomsBodyText v-else html-tag="div" class="py-sm">{{ entry }}</AtomsBodyText>
        <div
          v-if="index < item.entries.length - 1"
          class="test col-span-full h-[2px] origin-left scale-x-0 bg-black"
        ></div>
      </div>
    </AtomsGrid>
  </div>
</template>

<script setup lang="ts">
import { ListItem, ListTitle } from '@Types';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const scope = ref<HTMLDivElement>();

let ctx: gsap.Context;
let trigger: ScrollTrigger[];

const props = defineProps({
  title: {
    type: Object as PropType<ListTitle>,
    required: false,
  },
  width: {
    type: String,
    default: 'full',
    false: true,
  },
  list: {
    type: Array<ListItem>,
    required: true,
  },
  theme: {
    type: String,
    default: 'bright',
    required: false,
  },
});

onMounted(() => {
  ctx = gsap.context(() => {
    const lines: HTMLElement[] = gsap.utils.toArray('.test');

    trigger = ScrollTrigger.batch(lines, {
      start: 'top bottom',
      end: 'bottom bottom',
      onEnter: (batch) => gsap.to(batch, { scaleX: 1, duration: 0.5, overwrite: true }),
    });
  }, scope.value);
});

onUnmounted(() => {
  ctx.revert();
  trigger.map((el) => el.refresh());
});
</script>
