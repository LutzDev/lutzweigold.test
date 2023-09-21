<template>
  <li class="overflow-hidden">
    <div class="navItem flex translate-y-full items-baseline gap-2 py-2 text-white">
      <AtomsBodyText theme="dark" html-tag="span">0{{ props.prefix }}</AtomsBodyText>
      <NuxtLink :to="localePath({ name: props.to })" @click="toggleModal">
        <AtomsDisplayText class="pointer-events-auto cursor-pointer" html-tag="span">
          {{ $t(`${props.title}`) }}
        </AtomsDisplayText>
      </NuxtLink>
    </div>
  </li>
</template>

<script lang="ts" setup>
const modalStore = useModalStore();
const { toggleModal } = modalStore;
const localePath = useLocalePath();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  prefix: {
    type: Number,
    required: true,
  },
});
</script>
