<template>
  <div ref="scope" class="col-span-full">
    <div class="mb-8 flex w-full justify-between">
      <AtomsTitleText size="sm"
        ><span class="text-typo-200">{{ $t('pages.work.content.filter.prefix') }}</span
        ><span ref="filterText" class="cursor-pointer underline" @click="openFilter">{{
          $t('pages.work.content.filter.all').toLowerCase()
        }}</span></AtomsTitleText
      >
      <div class=""></div>
      <AtomsTitleText size="sm" class="text-typo-200">[0{{ props.listLength }}]</AtomsTitleText>
    </div>
    <div
      ref="filterWrapper"
      :class="`gapy-md gapx-md pointer-events-none absolute right-0 top-0 z-40 grid !h-[100svh] h-screen w-full touch-none grid-cols-10 overflow-hidden bg-black/0`"
      :style="{ top: y + 'px' }"
    >
      <div
        ref="filterModal"
        class="p-y-md p-x-md gapy-md col-span-full col-start-1 grid translate-x-full bg-white md:col-span-5 md:col-start-6 lg:col-span-4 lg:col-start-7"
      >
        <div
          class="cursor-pointer self-center justify-self-end border-2 border-black px-4 py-1 lg:self-start"
          @click="closeFilter"
        >
          <AtomsBodyText html-tag="span">{{ $t('pages.work.content.filter.close') }}</AtomsBodyText>
        </div>
        <div class="space-y-4 self-start lg:self-end">
          <AtomsHeadline html-tag="h3" class="filterTag col-span-full row-start-2 self-end">{{
            $t('pages.work.content.filter.title')
          }}</AtomsHeadline>
          <div class="col-span-full row-start-3">
            <div class="py-0.2 overflow-hidden">
              <AtomsFlex x-gap="none" class="filterTag">
                <AtomsTitleText
                  size="sm"
                  data-filter=""
                  class="cursor-pointer hover:underline"
                  @click="updateFilter($event)"
                  >{{ $t('pages.work.content.filter.all') }}</AtomsTitleText
                >
                <div class="ml-0.5 -translate-y-0.5">{{ props.totalLength }}</div>
              </AtomsFlex>
            </div>
            <div v-for="(filter, key) in props.tags" :key="key" class="overflow-hidden py-0.5">
              <AtomsFlex x-gap="none" class="filterTag">
                <AtomsTitleText
                  class="cursor-pointer hover:underline"
                  size="sm"
                  :data-filter="filter[0].toLocaleLowerCase()"
                  @click="updateFilter($event)"
                  >{{ $t(filter[0]) }}</AtomsTitleText
                >
                <div class="ml-0.5 -translate-y-0.5">{{ filter[1] }}</div>
              </AtomsFlex>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap, $Power4: Power4 } = useNuxtApp();
const modalStore = useModalStore();
const { smoother } = storeToRefs(modalStore);
const isFilterOpen = ref<boolean>(false);
const filterText = ref();
const query = ref('');
const scope = ref(null);
const filterModal = ref(null);
const filterWrapper = ref(null);
let tl: gsap.core.Timeline;
let ctx: gsap.Context;
const { t } = useI18n();

const { y } = useWindowScroll();

onClickOutside(filterModal, () => {
  if (isFilterOpen.value) {
    closeFilter();
  }
});

// TODO: Pinia, disable scrolling when filter is open

const emit = defineEmits<{
  (e: 'updateFilter', query: string): void;
}>();

const updateFilter = (event: any) => {
  query.value = event.currentTarget.getAttribute('data-filter');
  emit('updateFilter', query.value);
  gsap.to(filterText.value, {
    duration: 1,
    delay: 0.75,
    scrambleText: {
      text: `${query.value !== '' ? t(query.value).toLowerCase() : t('pages.work.content.filter.all').toLowerCase()}`,
      chars: '/$#',
      tweenLength: true,
    },
  });
  closeFilter();
};

const openFilter = () => {
  isFilterOpen.value = true;
  tl.play();
};

const closeFilter = () => {
  isFilterOpen.value = false;
  tl.reverse();
};

onMounted(() => {
  ctx = gsap.context(() => {
    tl = gsap.timeline({
      onStart: () => {
        smoother.value?.paused(true);
      },
      onReverseComplete: () => {
        smoother.value?.paused(false);
      },
      paused: true,
      defaults: { ease: Power4.easeInOut, duration: 1.5 },
    });
    tl.to(
      filterModal.value,
      {
        x: '0%',
        ease: Power4.easeInOut,
      },
      0
    );
    tl.from(
      '.filterTag',
      {
        y: 50,
        opacity: 0,
        stagger: 0.05,
      },
      0
    );
    tl.to(
      filterWrapper.value,
      {
        backgroundColor: 'rgba(0,0,0,0.75)',
        pointerEvents: 'auto',
        ease: Power4.easeInOut,
      },
      0
    );
  }, scope.value!);
});

onUnmounted(() => {
  ctx.revert();
});

const props = defineProps({
  totalLength: {
    type: Number,
    required: true,
  },
  listLength: {
    type: Number,
    required: true,
  },
  tags: {
    type: Map<string, number>,
    required: true,
  },
});
</script>
