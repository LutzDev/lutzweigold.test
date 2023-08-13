<template>
  <AtomsWrapper html-tag="nav">
    <ul class="sm:flex sm:flex-wrap sm:gap-x-10 xl:justify-end">
      <AtomsNavigationItem v-for="(item, key) in navItems" :key="key" :prefix="key + 1" :to="item.to"
        >{{ item.entry }}
      </AtomsNavigationItem>
    </ul>
  </AtomsWrapper>
</template>

<script lang="ts" setup>
const navItems = [
  {
    entry: 'About',
    to: '/',
  },
  {
    entry: 'Work',
    to: '/work',
  },
  {
    entry: 'Skill',
    to: '/skill',
  },
  {
    entry: 'Contact',
    to: '/contect',
  },
];
</script>
