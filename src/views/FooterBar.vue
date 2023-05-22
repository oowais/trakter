<template>
  Made with Vue v{{ vueVersion }} • Pinia v{{ piniaVersion }}
  <br />
  {{ new Date().getFullYear() }}
</template>

<script setup lang="ts">
import { version as piniaVersion } from "pinia/package.json";
import { version as vueVersion } from "vue/package.json";
</script>
