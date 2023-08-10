<template>
  <div id="smooth-wrapper" class="grid min-h-screen grid-cols-12">
    <header class="fixed -z-10 grid h-screen w-full grid-cols-12 bg-gray-900">
      <nav class="col-span-full bg-green-400 lg:col-span-10 lg:col-start-3">Navigation</nav>
    </header>
    <aside
      class="grid-row-1 pointer-events-none fixed left-0 right-0 top-0 z-10 grid h-[100dvh] w-full grid-cols-12 lg:grid-rows-2"
    >
      <div
        class="pointer-events-auto col-span-full col-start-1 flex justify-between self-start px-2 py-1 lg:col-span-2 lg:block"
      >
        <div @click="console.log('Logo')">crafted by lutz.</div>
        <div>
          <div>+49 152 26269766</div>
          <div>info@lutzweigold.de</div>
        </div>
      </div>
      <div class="col-span-full col-start-1 row-start-2 self-end lg:col-span-2">
        <div
          class="flex flex-row-reverse divide-x-2 divide-x-reverse divide-white border-2 lg:block lg:divide-x-0 lg:divide-y-2"
        >
          <div class="flex w-1/2 justify-between px-2 py-1 lg:w-full">
            <span> Menu </span>
            <span> [about] </span>
          </div>
          <div class="flex w-1/2 justify-between px-2 py-1 lg:w-full">
            <span> Language </span>
            <span> [DE] </span>
          </div>
        </div>
      </div>
    </aside>
    <div id="smooth-content" class="col-span-full col-start-1 lg:col-span-10 lg:col-start-3">
      <main class="translate-x-full bg-red-500">
        <section class="h-screen bg-gray-500 p-10">
          <div @click="console.log('Button')">Button</div>
        </section>
        <section class="h-screen bg-gray-400">Section 2</section>
        <section class="h-screen bg-gray-500">Section 3</section>
      </main>
      <footer class="bg-yellow-600">Footer</footer>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { $ScrollSmoother: ScrollSmoother } = useNuxtApp();
onMounted(() => {
  ScrollSmoother.create({
    smooth: 1.5, // how long (in seconds) it takes to "catch up" to native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });
});
</script>
