<template>
  <aside class="col-span-2 col-start-1 row-start-1">
    <AtomsWrapper is-full-screen class="sticky top-0 !min-h-[100svh]">
      <template #default="{ isFullScreen }">
        <AtomsFlex :is-full-screen="isFullScreen" wrap>
          <div class="space-y-4">
            <AtomsLogo />
            <div class="text-white">
              <AtomsSmallText>+49 152 26269766</AtomsSmallText>
              <AtomsSmallText>info@lutzweigold.de</AtomsSmallText>
            </div>
          </div>
          <div class="w-full divide-y-2 divide-white border-2 border-white">
            <div
              class="pointer-events-auto flex w-full cursor-pointer justify-between px-2 py-1"
              data-item="menu"
              @click="handleNavigation($event)"
            >
              <AtomsBodyText html-tag="span" theme="dark">{{ $t('general.cta.menu') }}</AtomsBodyText>
              <AtomsBodyText html-tag="span" theme="dark">[<span ref="nav"></span>]</AtomsBodyText>
            </div>
            <div
              class="pointer-events-auto flex w-1/2 cursor-pointer justify-between px-2 py-1 lg:w-full"
              data-item="lang"
              @click="handleNavigation($event)"
            >
              <AtomsBodyText html-tag="span" theme="dark"> {{ $t('general.cta.language') }}</AtomsBodyText>
              <AtomsBodyText html-tag="span" theme="dark">[<span ref="lang"></span>]</AtomsBodyText>
            </div>
          </div>
        </AtomsFlex>
      </template>
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
const activeRoute = useActiveRoute();

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
        const localRoute = localePath(String(activeRoute()), 'en');
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
