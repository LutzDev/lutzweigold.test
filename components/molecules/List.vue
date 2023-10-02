<template>
  <div ref="scope" class="col-span-full">
    <div
      v-if="props.title"
      :class="`p-y-1 w-full whitespace-nowrap border-t-2 text-4xl ${
        props.theme === 'light' ? 'border-black' : 'border-white'
      }`"
    >
      <AtomsMarquee :title="props.title.name" :reverse="props.title.reverse" :theme="props.theme" />
    </div>
    <AtomsGrid
      v-for="(item, key) in props.list"
      :key="key"
      :cols="props.width === 'full' ? 10 : 5"
      :rows="item.entries.length"
      y-gap="none"
      :class="`border-t-2 ${props.theme === 'light' ? 'border-black' : 'border-white'}`"
    >
      <AtomsBodyText
        html-tag="span"
        :class="`${
          props.width === 'full' ? 'col-span-4 row-span-full xs:col-span-5 md:col-span-6' : 'col-span-2'
        } py-sm`"
        :theme="props.theme"
        >{{ $t(item.title) }}
      </AtomsBodyText>
      <div
        v-for="(entry, index) in item.entries"
        :key="index"
        :class="`${
          props.width === 'full'
            ? 'col-span-6 col-start-5 xs:col-span-5 xs:col-start-6 md:col-span-4 md:col-start-7'
            : 'col-span-3 col-start-3'
        }`"
      >
        <AtomsListLinkItem
          v-if="typeof entry === 'object'"
          :name="entry.name"
          :to="entry.to"
          :title="entry.title"
          :theme="props.theme"
        />
        <AtomsBodyText v-else html-tag="div" class="py-sm" :theme="props.theme">{{ entry }}</AtomsBodyText>
        <div
          v-if="index < item.entries.length - 1"
          :class="`line col-span-full h-[2px] origin-left scale-x-0 ${
            props.theme === 'light' ? 'bg-black' : 'bg-white'
          }`"
        ></div>
      </div>
    </AtomsGrid>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ListItem, ListTitle, Theme } from '@Types';

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
    type: String as PropType<Theme>,
    default: 'light',
    required: false,
  },
});

onMounted(() => {
  ctx = gsap.context(() => {
    const lines: HTMLElement[] = gsap.utils.toArray('.line');

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
