<template>
  <div class="article-page container" v-if="article">
    <Title :text="article.title" />
    <div class="article__image">
      <img v-if="article.image" :src="getImageUrl(article.image)" class="article__img" alt="" />
    </div>
    <div class="article__text">{{ article.text }}</div>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/UI/AppTitle.vue'
defineProps({
  article: Object,
})

function getImageUrl(name: string) {
  return new URL(`@/assets/article.jpg`, import.meta.url).href
}
</script>
