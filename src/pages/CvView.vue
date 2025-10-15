<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6 py-10"
  >
    <div
      class="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl p-10 w-full max-w-2xl border border-indigo-100"
    >
      <div class="text-center border-b border-indigo-200 pb-6 mb-6">
        <h1 class="text-3xl font-extrabold text-indigo-800">
          {{ cvData.basics.name }}
        </h1>
        <h2 class="text-lg text-indigo-500 font-medium mt-2">
          {{ cvData.basics.label }}
        </h2>
      </div>

      <div class="space-y-3 text-center text-gray-700">
        <p class="flex justify-center items-center gap-2">
          <span class="text-indigo-500">📧</span> {{ cvData.basics.email }}
        </p>
        <p class="flex justify-center items-center gap-2">
          <span class="text-indigo-500">📞</span> {{ cvData.basics.phone }}
        </p>
        <p class="flex justify-center items-center gap-2">
          <span class="text-indigo-500">📍</span>
          {{ cvData.basics.location.address }}
        </p>
      </div>
    </div>
  </div>

  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6 py-10"
  >
    <div
      class="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl p-10 w-full max-w-2xl border border-indigo-100"
    >
      <div
        v-for="(xp, index) in cvData.work"
        :key="index"
        class="text-center border-b border-indigo-200 pb-6 mb-6"
      >
        <h1 class="text-3xl font-extrabold text-indigo-800">
          {{ xp.name }}
        </h1>
        <h2 class="text-lg text-indigo-500 font-medium mt-2">
          {{ xp.position }}
        </h2>
        <p class="flex justify-center items-center gap-2">
          {{ xp.startDate }}
        </p>
        <p class="flex justify-center items-center gap-2">
          {{ xp.endDate }}
        </p>
        <p class="flex justify-center items-center gap-2">
          {{ xp.summary }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import cvData from "../../cv.json";
</script>
