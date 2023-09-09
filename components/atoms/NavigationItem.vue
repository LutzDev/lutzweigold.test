<template>
  <li class="overflow-hidden">
    <div class="navItem flex translate-y-full items-baseline gap-2">
      <AtomsBodyText html-tag="span">0{{ props.prefix }}</AtomsBodyText>
      <NuxtLink :to="props.to" @click="toggleModal">
        <AtomsDisplayText class="pointer-events-auto cursor-pointer" html-tag="span">
          <slot />
        </AtomsDisplayText>
      </NuxtLink>
    </div>
  </li>
</template>

<script lang="ts" setup>
const modalStore = useModalStore();
const { toggleModal } = modalStore;

const props = defineProps({
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
