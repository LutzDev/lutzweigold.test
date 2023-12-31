<template>
  <div
    class="pb-safe fixed left-0 z-30 w-full pb-0.5"
    :style="{
      bottom: 'calc(0px - env(safe-area-inset-bottom))',
      backdropFilter: 'blur(8px) brightness(0.4)',
      '-webkit-backdrop-filter': 'blur(8px) brightness(0.4)',
    }"
  >
    <AtomsWrapper class="text-white">
      <div class="flex divide-x-2 divide-white border-2 border-white">
        <div
          class="pointer-events-auto flex w-1/2 cursor-pointer justify-between px-2 py-1"
          data-item="lang"
          @click="handleNavigation($event)"
        >
          <AtomsBodyText html-tag="span" theme="dark"> {{ $t('general.cta.language') }}</AtomsBodyText>
          <AtomsBodyText html-tag="span" theme="dark">[<span ref="lang"></span>]</AtomsBodyText>
        </div>
        <div
          class="pointer-events-auto flex w-1/2 cursor-pointer justify-between px-2 py-1"
          data-item="menu"
          @click="handleNavigation($event)"
        >
          <AtomsBodyText html-tag="span" theme="dark">{{ $t('general.cta.menu') }}</AtomsBodyText>
          <AtomsBodyText html-tag="span" theme="dark">[<span ref="nav"></span>]</AtomsBodyText>
        </div>
      </div>
    </AtomsWrapper>
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();
const navigationStore = useNavigationStore();
const modalStore = useModalStore();
const { isModalOpen } = storeToRefs(modalStore);
const { toggleModal } = modalStore;
const { t, locale } = useI18n();
const localePath = useLocalePath();
const localeRoute = useLocaleRoute();

const { openMenu, openLang, navigationState } = navigationStore;

const route = useRoute();
const nav = ref<HTMLSpanElement | null>(null);
const lang = ref<HTMLSpanElement | null>(null);

let ctx: gsap.Context;

const handleNavigation = (self: any) => {
  const dataItem: string = self.currentTarget?.getAttribute('data-item');
  if (navigationState[dataItem] || isModalOpen.value) {
    toggleModal();
  }

  if (self.currentTarget?.getAttribute('data-item') === 'menu') {
    openMenu();
  } else {
    openLang();
  }
};

onMounted(() => {
  ctx = gsap.context(() => {
    watch(
      () => route.name,
      (newValue) => {
        const localRoute = localePath(String(localeRoute('')?.name).split('___')[0], 'en');
        gsap.to(nav.value, {
          duration: 1,
          scrambleText: {
            text: `${
              newValue !== 'index___de' && newValue !== 'index___en'
                ? t(`pages.${localRoute.split('/').splice(-1, 1)[0]}.name`).toLowerCase()
                : t(`pages.about.name`).toLowerCase()
            }`,
            chars: '/$#',
            tweenLength: true,
          },
        });
      },
      { immediate: true }
    );

    watch(
      () => locale.value,
      (newValue) => {
        gsap.to(lang.value, {
          duration: 1,
          scrambleText: {
            text: newValue,
            chars: '/$#',
            tweenLength: true,
          },
        });
      },
      { immediate: true }
    );
  });
});

onUnmounted(() => {
  ctx.revert();
});
</script>
