<script setup lang="ts">
import { computed, ref } from "vue";

const name = ref("");
const todos = ref<{ id: number; text: string; done: boolean }[]>([]);
let nextId = 1;

const remaining = computed(() => todos.value.filter((t) => !t.done).length);

function addTodo() {
  const text = name.value.trim();
  if (!text) return;
  todos.value.push({ id: nextId++, text, done: false });
  name.value = "";
}
</script>

<template>
  <section>
    <h2>Todo (Composition API drill)</h2>
    <form @submit.prevent="addTodo">
      <label>
        New todo
        <input v-model="name" type="text" />
      </label>
      <button type="submit">Add</button>
    </form>
    <p>{{ remaining }} remaining</p>
    <ul>
      <li v-for="t in todos" :key="t.id">
        <label>
          <input v-model="t.done" type="checkbox" />
          {{ t.text }}
        </label>
      </li>
    </ul>
  </section>
</template>
