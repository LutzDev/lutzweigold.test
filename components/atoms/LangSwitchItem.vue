<template>
  <li class="overflow-hidden">
    <div class="navItem flex translate-y-full items-baseline gap-2 py-2">
      <AtomsBodyText theme="dark" html-tag="span">0{{ props.prefix }}</AtomsBodyText>
      <AtomsDisplayText
        theme="dark"
        :class="`pointer-events-auto cursor-pointer ${isLangItemActive}`"
        html-tag="span"
        @click="handleClick"
      >
        <slot />
      </AtomsDisplayText>
    </div>
  </li>
</template>

<script setup lang="ts">
const router = useRouter();
const modalStore = useModalStore();
const { toggleModal } = modalStore;
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();

const handleClick = () => {
  router.push({ path: switchLocalePath(props.lang) });
  toggleModal();
};

const isLangItemActive = computed(() => {
  return locale.value === props.lang ? 'underline underline-offset-8 decoration-8' : '';
});

const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
  prefix: {
    type: Number,
    required: true,
  },
});
</script>
