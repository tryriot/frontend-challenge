<template>
  <div>This is a composition API component making an apollo request</div>
  <div>{{ employees.length }}</div>
</template>

<script setup lang="ts">
import { GET_EMPLOYEES } from "@/graphql/query";
import { useQuery, useResult } from "@vue/apollo-composable";

const { result: employeesResult } = useQuery(GET_EMPLOYEES);

const employees = useResult(employeesResult, []);
</script>
