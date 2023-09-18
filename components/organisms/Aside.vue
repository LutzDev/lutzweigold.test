<template>
  <aside class="grid-row-1 fixed left-0 right-0 top-0 z-10 grid h-[100dvh] w-full grid-cols-12 lg:grid-rows-2">
    <AtomsWrapper
      class="pointer-events-auto col-span-full col-start-1 flex justify-between self-start lg:col-span-2 lg:block lg:space-y-4"
    >
      <AtomsBodyText @click="console.log('Logo')">crafted by lutz. Building site</AtomsBodyText>
      <div>
        <AtomsSmallText>+49 152 26269766</AtomsSmallText>
        <AtomsSmallText>info@lutzweigold.de</AtomsSmallText>
      </div>
    </AtomsWrapper>
    <AtomsWrapper class="col-span-full col-start-1 row-start-2 self-end lg:col-span-2">
      <div
        class="flex flex-row-reverse divide-x-2 divide-x-reverse divide-white border-2 border-white lg:block lg:divide-x-0 lg:divide-y-2"
      >
        <div
          class="pointer-events-auto flex w-1/2 cursor-pointer justify-between px-2 py-1 lg:w-full"
          data-item="menu"
          @click="handleNavigation($event)"
        >
          <AtomsBodyText html-tag="span" theme="dark">{{ $t('general.cta.menu') }}</AtomsBodyText>
          <AtomsBodyText html-tag="span" theme="dark">[<span ref="nav"></span>]</AtomsBodyText>
        </div>
        <div
          class="pointer-events-auto flex w-1/2 cursor-pointer justify-between px-2 py-1 lg:w-full"
          data-item="lang"
          @click="handleNavigation"
        >
          <AtomsBodyText html-tag="span" theme="dark"> {{ $t('general.cta.language') }}</AtomsBodyText>
          <AtomsBodyText html-tag="span" theme="dark">[<span ref="lang"></span>]</AtomsBodyText>
        </div>
      </div>
    </AtomsWrapper>
  </aside>
</template>

<script lang="ts" setup>
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
                ? t(`pages.${localRoute.split('/').splice(-1, 1)[0]}.title`).toLowerCase()
                : t(`pages.about.title`).toLowerCase()
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
