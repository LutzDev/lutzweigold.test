<template>
  <AtomsGrid ref="wrapper" :cols="8" y-gap="none">
    <AtomsTitleText
      size="lg"
      :class="`col-span-full mb-md inline-block xs:mb-0 ${isTouch === 0 ? 'xs:col-span-2' : 'xs:col-span-3'} `"
    >
      <span :class="`${isTouch === 0 ? 'md:hidden' : ''} inline-block`">{{ props.prefix }}</span
      >{{ props.item.year }}
    </AtomsTitleText>
    <template v-for="(entry, key) in props.item?.items" :key="key">
      <NuxtLink
        v-if="entry.link"
        target="_blank"
        :title="$t(entry.link.title)"
        :to="$t(entry.link.to)"
        :class="`col-span-full w-full self-end ${
          isTouch === 0 ? 'xs:col-span-6 xs:col-start-3' : 'xs:col-span-5 xs:col-start-4'
        }`"
      >
        <AtomsExperienceItem :item="entry" />
      </NuxtLink>
      <AtomsExperienceItem
        v-else
        :item="entry"
        :class="`col-span-full w-full self-end ${
          isTouch === 0 ? 'xs:col-span-6 xs:col-start-3' : 'xs:col-span-5 xs:col-start-4'
        }`"
      />
      <div
        v-if="key !== props.item.items.length - 1"
        class="col-span-full my-2 h-[2px] w-full bg-black/10 xs:col-span-6 xs:col-start-3"
      ></div>
    </template>
  </AtomsGrid>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ExperienceContainer } from '@Types';
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

let ctx: gsap.Context;
const isTouch = ref<number | null>(null);
onMounted(() => {
  ctx = gsap.context(() => {
    isTouch.value = ScrollTrigger.isTouch;
  });
});

onUnmounted(() => {
  ctx.revert();
});

const props = defineProps({
  prefix: {
    type: Number,
    required: true,
  },
  item: {
    type: Object as PropType<ExperienceContainer>,
    required: true,
  },
});
</script>
