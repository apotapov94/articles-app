<template>
  <div class="container">
    <div class="articles">
      <Article v-for="article in articles" :article="article" />
    </div>
  </div>
</template>

<script setup>
import Article from '@/components/Articles/Item.vue'

defineProps({
  articles: Array,
})
</script>
