<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>
