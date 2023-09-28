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
      <div class="col-span-full col-start-3 my-2 h-[2px] w-full bg-black md:col-span-8"></div>
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
    tags: ['pages.work.content.filter.tags.website'],
    link: {
      to: 'projects-portfolio',
    },
  },
  {
    title: 'Didem',
    tags: ['pages.work.content.filter.tags.application'],
    link: {
      to: 'projects-didem',
    },
  },
  {
    title: 'Xtrym',
    tags: ['pages.work.content.filter.tags.shop'],
    link: {
      to: 'projects-xtrym',
    },
  },
  {
    title: 'Freya',
    tags: ['pages.work.content.filter.tags.website'],
    link: {
      to: 'projects-freya',
    },
  },
  {
    title: 'Pleta',
    tags: ['pages.work.content.filter.tags.shop'],
    link: {
      to: 'projects-pleta',
    },
  },
  {
    title: 'SmarAct',
    tags: ['pages.work.content.filter.tags.website'],
    link: {
      to: 'projects-smaract',
    },
  },
  {
    title: 'Querformat',
    tags: ['pages.work.content.filter.tags.website'],
    link: {
      to: 'projects-querformat',
    },
  },
  {
    title: 'Dark Pattern',
    tags: ['pages.work.content.filter.tags.application'],
    link: {
      to: 'projects-darkpattern',
    },
  },
  {
    title: 'Fuwa Car',
    tags: ['pages.work.content.filter.tags.application'],
    link: {
      to: 'projects-fuwacar',
    },
  },
];
</script>
