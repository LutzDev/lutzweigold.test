<template>
  <li class="overflow-hidden">
    <div class="navItem flex translate-y-full items-baseline gap-2 py-2">
      <AtomsBodyText theme="dark" html-tag="span">0{{ props.prefix }}</AtomsBodyText>
      <NuxtLink
        :to="localePath({ name: props.to })"
        :title="$t(props.title!)"
        active-class="underline underline-offset-8 decoration-8 decoration-white"
        @click="toggleModal"
      >
        <AtomsDisplayText theme="dark" class="pointer-events-auto cursor-pointer" html-tag="span">
          {{ $t(`${props.name}`) }}
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
  name: {
    type: String,
    required: true,
  },
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
