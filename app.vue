<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <slot />
    </Body>
  </Html>

  <OrganismsLoadingScreen v-if="isAppLoading" />
  <!--    <div class="pb-safe fixed bottom-0 z-20 h-10 w-full bg-green-500">Test</div>-->
  <!--    <AtomsWrapper class="bg-red-black/0 fixed left-0 top-0 z-20 w-full text-white mix-blend-difference lg:hidden"
    >asdasd</AtomsWrapper
  >-->
  <MoleculesStickyHeader v-if="viewport.isLessThan('desktop')" />
  <MoleculesMobileMenu v-if="viewport.isLessThan('desktop')" />
  <div id="smooth-wrapper" class="pointer-events-none grid !min-h-[100svh] min-h-screen grid-cols-12">
    <OrganismsAside v-if="viewport.isGreaterOrEquals('desktop')" />
    <MoleculesLazyLiquidBackground class="pointer-events-none -z-10 col-span-full row-start-1 touch-none" />
    <div id="smooth-content" class="z-20 col-span-full row-start-1 lg:col-span-10 lg:col-start-3">
      <div class="overflow-x-hidden">
        <div ref="modal" class="overflow-hidden bg-white">
          <div ref="content">
            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
          </div>
        </div>
      </div>
    </div>
    <OrganismsHeader class="col-span-full row-span-full row-start-1 lg:col-span-10 lg:col-start-3" />
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { t } = useI18n();
const { $gsap: gsap, $ScrollSmoother: ScrollSmoother, $ScrollTrigger: ScrollTrigger, $Power4: Power4 } = useNuxtApp();
const appStore = useAppStore();
const { isAppLoading } = storeToRefs(appStore);
const modalStore = useModalStore();
const { isModalOpen, smoother } = storeToRefs(modalStore);
const animationStore = useAnimationStore();
let tl: gsap.core.Timeline;
let ctx: gsap.Context;
const modal = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);
const viewport = useViewport();
const activeRoute = useActiveRoute();
const title = ref<string>(t(`pages.${activeRoute().split('-').splice(-1, 1)[0]}.seo.title`));

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});

useSeoMeta({
  // title: 'Self-employed software developer | Lutz Weigold',
  title: () => {
    return title.value;
  },
  ogTitle: () => {
    return t(`pages.${activeRoute().split('-').splice(-1, 1)[0]}.seo.ogTitle`);
  },
  description: () => {
    return t(`pages.${activeRoute().split('-').splice(-1, 1)[0]}.seo.description`);
  },
  ogDescription: () => {
    return t(`pages.${activeRoute().split('-').splice(-1, 1)[0]}.seo.ogDescription`);
  },
  ogImage: '/images/general/og-image.webp',
});

onMounted(() => {
  useEventListener(document, 'visibilitychange', () => {
    if (document.hidden) {
      title.value = '👋 Lutz Weigold';
    } else {
      title.value = t(`pages.${activeRoute().split('-').splice(-1, 1)[0]}.seo.title`);
    }
  });

  useHead({
    bodyAttrs: {
      class: 'overscroll-none',
    },
  });

  ctx = gsap.context(() => {
    tl = gsap.timeline({
      onStart: () => {
        smoother.value?.paused(true);
      },
      onReverseComplete: () => {
        // smoother.value?.paused(false);
        ScrollTrigger.refresh();
      },
      delay: 0,
      data: { name: 'DEFAULT' },
      defaults: { ease: Power4.easeInOut, duration: 1.5 },
    });
    tl.to(
      [modal.value],
      {
        x: '100%',
      },
      0
    );
    tl.to(
      [content.value],
      {
        x: '-50%',
      },
      0
    );

    if (ScrollTrigger.isTouch === 0) {
      smoother.value = ScrollSmoother.create({
        smooth: 0.8,
        ignoreMobileResize: true,
        effects: true,
      });
    } else {
      smoother.value = ScrollSmoother.create({
        smooth: 0,
        effects: false,
      });
    }

    animationStore.master.value.add(tl, 0);

    watch(
      () => isModalOpen.value,
      (state) => {
        if (!state) {
          animationStore.master.value.play();
        } else {
          animationStore.master.value.reverse();
        }
      },
      { immediate: true }
    );
  });
});

onUnmounted(() => {
  ctx.revert();
});

watch(
  () => route.name,
  () => {
    title.value = t(`pages.${activeRoute().split('-').splice(-1, 1)[0]}.seo.title`);
    if (ScrollTrigger.isTouch === 0) {
      smoother.value?.effects().forEach((effect) => effect.kill());
      smoother.value?.effects('[data-lag], [data-speed]');
    }
    smoother.value?.scrollTo(0, true);
    ScrollTrigger.refresh();
  }
);
</script>
