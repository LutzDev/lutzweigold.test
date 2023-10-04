<template>
  <div
    :class="`relative inline-block cursor-pointer overflow-hidden leading-[0px] after:absolute after:left-0 after:top-0 after:h-full after:bg-primary-400 after:transition-all after:ease-in-out ${
      event ? 'after:w-full' : 'after:w-0'
    }`"
  >
    <div
      :class="`relative z-10 transition-all ${
        event ? (isExtern ? '-translate-y-full translate-x-full' : 'translate-x-full') : 'translate-x-0 translate-y-0'
      }`"
    >
      <Icon
        :class="`${
          props.size === 'sm'
            ? 'm-0 h-2 w-2 xs:m-0.25 xl:m-0.5 xl:h-3 xl:w-3 3xl:m-1 3xl:h-6 3xl:w-6'
            : props.size === 'md'
            ? 'm-0.25 h-4 w-4 xs:m-0.5 xs:h-8 xs:w-8 xl:m-1 xl:h-12 xl:w-12 3xl:m-2 3xl:h-20 3xl:w-20'
            : props.size === 'lg'
            ? 'm-0.5 h-8 w-8 xs:h-12 xs:w-12 sm:m-1 xl:m-2 xl:h-20 xl:w-20 3xl:m-3 3xl:h-24 3xl:w-24'
            : 'm-0.25 h-4 w-4 xs:m-0.5 xs:h-8 xs:w-8 xl:m-1 xl:h-12 xl:w-12 3xl:m-2 3xl:h-20 3xl:w-20'
        } ${props.theme === 'light' ? 'text-black' : 'text-white'}`"
        :name="`${isExtern ? 'ic:outline-arrow-outward' : 'ic:outline-arrow-forward'}`"
      />
      <Icon
        :class="`${
          props.size === 'sm'
            ? 'm-0 h-2 w-2 xs:m-0.25 xl:m-0.5 xl:h-3 xl:w-3 3xl:m-1 3xl:h-6 3xl:w-6'
            : props.size === 'md'
            ? 'm-0.25 h-4 w-4 xs:m-0.5 xs:h-8 xs:w-8 xl:m-1 xl:h-12 xl:w-12 3xl:m-2 3xl:h-20 3xl:w-20'
            : props.size === 'lg'
            ? 'm-0.5 h-8 w-8 xs:m-1 xs:h-12 xs:w-12 xl:m-2 xl:h-20 xl:w-20 3xl:m-3 3xl:h-24 3xl:w-24'
            : 'm-0.25 h-4 w-4 xs:m-0.5 xs:h-8 xs:w-8 xl:m-1 xl:h-12 xl:w-12 3xl:m-2 3xl:h-20 3xl:w-20'
        } absolute -left-full ${isExtern ? ' top-full' : ''} text-black`"
        :name="`${isExtern ? 'ic:outline-arrow-outward' : 'ic:outline-arrow-forward'}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Theme, Variant } from '@Types';
const isExtern = ref<boolean>(false);

const emit = defineEmits<{
  (e: 'external', id: boolean | undefined): void;
}>();

watch(
  () => props.to,
  (newValue) => {
    isExtern.value = newValue.includes('http') || newValue.includes('mailto:') || newValue.includes('tel:');
    emit('external', isExtern.value);
  },
  { immediate: true }
);

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  event: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<Variant>,
    required: false,
    default: 'md',
  },
  theme: {
    type: String as PropType<Theme>,
    default: 'light',
    required: false,
  },
});
</script>
