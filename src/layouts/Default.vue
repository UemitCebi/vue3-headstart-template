<script setup lang="ts">
import Menu from '../components/Menu.vue'
import ToggleDarkMode from '../components/ToggleDarkMode.vue'
</script>

<template>
  <div
    id="default-layout"
    class="h-screen w-screen flex flex-col dark:bg-gray-800"
  >
    <div class="flex justify-between p-8">
      <Menu />
      <ToggleDarkMode />
    </div>
    <slot />
  </div>
</template>
