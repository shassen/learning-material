import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import CounterView from "./views/CounterView.vue";
import TodoView from "./views/TodoView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/counter", name: "counter", component: CounterView },
    { path: "/todo", name: "todo", component: TodoView },
  ],
});
