<template>
  <div>This is an options API component making an apollo request</div>
  <div>{{ employees?.length }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GET_EMPLOYEES } from "@/graphql/query";

export default defineComponent({
  apollo: {
    employees: {
      query: GET_EMPLOYEES,
    },
  },
  data: () => ({
    employees: [],
  }),
});
</script>
