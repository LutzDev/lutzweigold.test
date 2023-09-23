<template>
  <NuxtLink
    v-if="props.to && props.title"
    class="col-span-full flex items-center justify-between py-sm"
    :to="isExternal ? $t(props.to) : localePath({ name: $t(props.to) })"
    :title="$t(props.title)"
    :target="isExternal ? '_blank' : '_self'"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <AtomsBodyText html-tag="span" :theme="props.theme">{{ $t(props.name) }}</AtomsBodyText>
    <AtomsButton
      v-if="props.to"
      :event="hover"
      size="sm"
      :to="$t(props.to)"
      :theme="props.theme"
      @external="handleExternal"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
import { PropType } from 'vue/dist/vue';
import { Theme } from '@Types';
const localePath = useLocalePath();

const hover = ref<boolean>(false);
const isExternal = ref<boolean>(false);

const handleExternal = (item: boolean) => {
  isExternal.value = item;
};

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  theme: {
    type: String as PropType<Theme>,
    default: 'light',
    required: false,
  },
});
</script>
