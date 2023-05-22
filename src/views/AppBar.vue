<template>
  <router-link to="/" custom v-slot="{ navigate }">
    <span
      class="text-h4 pl-8"
      @click="navigate"
      role="link"
      style="cursor: pointer"
    >
      <div class="glitch-wrapper">
        <div class="glitch" data-glitch="TRAKTer">TRAKTer</div>
      </div>
    </span>
  </router-link>
  <br />
</template>

<!-- primary, secondary, success, info, warning, help, danger -->

<style>
@import "@/assets/glitcheffect.css";
</style>
