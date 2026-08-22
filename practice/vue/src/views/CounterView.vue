<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";

const local = ref(0);
const store = useCounterStore();
</script>

<template>
  <section>
    <h2>Counter</h2>
    <p>Local ref: {{ local }}</p>
    <button type="button" @click="local++">Increment local</button>
    <p>Pinia: {{ store.count }}</p>
    <button type="button" @click="store.increment()">Increment store</button>
  </section>
</template>
