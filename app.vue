<template>
  <div class="grid min-h-screen grid-cols-12">
    <header class="fixed -z-10 grid h-screen w-full grid-cols-12 bg-gray-900">
      <nav class="col-span-full bg-green-400 lg:col-span-10 lg:col-start-3">Navigation</nav>
    </header>
    <aside class="grid-row-1 pointer-events-none fixed z-10 grid h-screen w-full grid-cols-12 lg:grid-rows-2">
      <div class="pointer-events-auto col-span-full col-start-1 flex justify-between self-start lg:col-span-2 lg:block">
        <div @click="console.log('Logo')">Logo</div>
        <div>
          <div>+49 152 26269766</div>
          <div>info@lutzweigold.de</div>
        </div>
      </div>
      <div class="col-span-full col-start-1 row-start-2 self-end lg:col-span-2">
        <div class="flex divide-x-2 divide-white border-2 lg:block lg:divide-x-0 lg:divide-y-2">
          <div class="w-1/2 lg:w-full">Button</div>
          <div class="w-1/2 lg:w-full">Button</div>
        </div>
      </div>
    </aside>
    <main class="col-span-full col-start-1 bg-red-500 lg:col-span-10 lg:col-start-3">
      <section class="h-screen bg-gray-500 p-10">
        <div @click="console.log('Button')">Button</div>
      </section>
      <section class="h-screen bg-gray-400">Section 2</section>
      <section class="h-screen bg-gray-500">Section 3</section>
    </main>
    <footer class="col-span-full col-start-1 bg-yellow-600 lg:col-span-10 lg:col-start-3">Footer</footer>
  </div>
</template>
<script lang="ts" setup></script>
