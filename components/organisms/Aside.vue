<template>
  <aside class="grid-row-1 fixed left-0 right-0 top-0 z-10 grid h-[100dvh] w-full grid-cols-12 xl:grid-rows-2">
    <AtomsWrapper
      class="pointer-events-auto col-span-full col-start-1 flex justify-between self-start xl:col-span-2 xl:block"
    >
      <div @click="console.log('Logo')">crafted by lutz.</div>
      <div>
        <div>+49 152 26269766</div>
        <div>info@lutzweigold.de</div>
      </div>
    </AtomsWrapper>
    <AtomsWrapper class="col-span-full col-start-1 row-start-2 self-end xl:col-span-2">
      <div
        class="flex flex-row-reverse divide-x-2 divide-x-reverse divide-white border-2 xl:block xl:divide-x-0 xl:divide-y-2"
      >
        <div class="flex w-1/2 justify-between px-2 py-1 text-white xl:w-full">
          <span> Menu </span>
          <span> [about] </span>
        </div>
        <div class="flex w-1/2 justify-between px-2 py-1 text-white xl:w-full">
          <span> Language </span>
          <span> [DE] </span>
        </div>
      </div>
    </AtomsWrapper>
  </aside>
</template>

<script lang="ts" setup></script>
