<template>
  <div class="page-not-found">
    <Title text="Страница не найдена" />
    <span class="error">404</span>
    <p><RouterLink to="/">Вернуться на главную</RouterLink></p>
  </div>
</template>
<script setup lang="ts">
import Title from '@/components/UI/AppTitle.vue'
</script>
