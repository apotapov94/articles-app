<template>
  <div class="container">
    <div class="articles">
      <Article v-if="articles" v-for="article in articles" :article="article" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Article from '@/components/Articles/Item.vue'

defineProps({
  articles: Array<Object>,
})
</script>
