<template>
  <AppBar />
  <main><router-view /></main>
  <!-- <FooterBar /> -->
</template>

<script lang="ts">
import router from "@/router";
import AppBar from "@/views/AppBar.vue";
import Home from "@/views/Home.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { AppBar, Home },
  methods: {
    back() {
      router.back();
    },
  },
});
</script>
