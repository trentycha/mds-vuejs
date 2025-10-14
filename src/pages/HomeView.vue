<script setup>
import { ref } from "vue";
const showHelloWorld = ref(false);

const names = ["Alice", "Bob", "Charlie"];
</script>

<template>
  <h1>Home View</h1>
  <button @click="showHelloWorld = !showHelloWorld">Toggle Hello World</button>
  <p v-if="showHelloWorld">Hello World!</p>
  <ul>
    <li v-for="name in names" :key="name">{{ name }}</li>
  </ul>
</template>
