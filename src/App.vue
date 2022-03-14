<template>
  <div class="flex">
    <div class="flex w-64 bg-dark-blue h-screen"></div>
    <main class="p-10 flex flex-1 flex-col space-y-5"></main>
  </div>
</template>

<script setup lang="ts">
import { DefaultApolloClient } from "@vue/apollo-composable";
import { provide } from "vue";
import { apolloClient } from "./plugins";

provide(DefaultApolloClient, apolloClient);
</script>
