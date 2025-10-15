<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col"
  >
    <NavBar />

    <main
      class="flex-1 flex justify-center items-start px-6 py-10 md:px-12 lg:px-24"
    >
      <div
        class="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 w-full max-w-4xl border border-indigo-100"
      >
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
