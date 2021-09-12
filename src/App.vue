<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const layout = computed(
  () => `${useRoute().meta.useLayout || 'default'}-layout`
)
</script>

<template>
  <component :is="layout"><router-view></router-view></component>
</template>
