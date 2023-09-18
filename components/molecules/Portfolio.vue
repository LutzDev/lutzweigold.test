<template>
  <AtomsPortfolioFilter
    :tags="computedTags"
    :total-length="items.length"
    :list-length="computedList.length"
    @update-filter="handleFilter"
  />
  <TransitionGroup
    tag="div"
    :css="false"
    class="col-span-full"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <div v-for="(item, key) in computedList" :key="key">
      <AtomsPortfolioItem :item="item" :position="key + 1" />
      <div class="line col-span-full col-start-3 my-2 h-[2px] w-full origin-left bg-black md:col-span-8"></div>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { PortfolioItem } from '@Types';

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
const query = ref('');

const handleFilter = (value: string) => {
  query.value = value;
};

const computedList = computed(() => {
  return items.filter((item) => item.tags.some((tag) => tag.toLowerCase().includes(query.value.toLowerCase())));
});

const computedTags = computed(() => {
  const tagList = new Map<string, number>();

  items.forEach((item) => {
    item.tags.forEach((tag) => {
      if (tagList.get(tag)) {
        tagList.set(tag, tagList.get(tag)! + 1);
      } else {
        tagList.set(tag, 1);
      }
    });
  });
  return tagList;
});

function onBeforeEnter(el: any) {
  el.style.opacity = 0;
  el.style.height = 0;
}

function onEnter(el: any, done: any) {
  gsap.to(el, {
    opacity: 1,
    height: 'auto',
    delay: el.dataset.index * 0.15,
    onComplete: () => {
      ScrollTrigger.refresh();
      done();
    },
  });
}

function onLeave(el: any, done: any) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: () => {
      ScrollTrigger.refresh();
      done();
    },
  });
}

const items: Array<PortfolioItem> = [
  {
    title: 'Portfolio',
    tags: ['Digital', 'E-Commerce'],
    to: 'asdasdasd',
  },
  {
    title: 'Didem',
    tags: ['iOS', 'React'],
    to: 'https',
  },
  {
    title: 'Xtrym',
    tags: ['Nuxt', 'Vue3'],
    to: '/projects/xtrym',
  },
  {
    title: 'Freya',
    tags: ['Nuxt', 'Vue3'],
    to: 'asdasdasd',
  },
  {
    title: 'Pleta',
    tags: ['Nuxt', 'Vue3'],
    to: 'asdasdasd',
  },
  {
    title: 'SmarAct',
    tags: ['Nuxt', 'Vue3'],
    to: 'asdasdasd',
  },
  {
    title: 'Querformat',
    tags: ['Nuxt', 'Vue3'],
    to: 'asdasdasd',
  },
  {
    title: 'Dark Pattern',
    tags: ['Nuxt', 'Vue3'],
    to: 'asdasdasd',
  },
  {
    title: 'Fuwa Car',
    tags: ['Nuxt', 'Vue3'],
    to: 'asdasdasd',
  },
];
</script>
