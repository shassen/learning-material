<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>Vue Practice</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink to="/counter">Counter</RouterLink>
      |
      <RouterLink to="/todo">Todo</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  font-family: system-ui, sans-serif;
  margin: 2rem;
}
nav a {
  margin-right: 0.25rem;
}
</style>
