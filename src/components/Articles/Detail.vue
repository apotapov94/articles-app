<template>
  <div class="article-page" v-if="article">
    <div class="article__image">
      <img v-if="article.image" :src="getImageUrl(article.image)" class="article__img" alt="" />
    </div>
    <div class="article__title">{{ article.title }}</div>
    <div class="article__text">{{ article.text }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  article: Object,
})

function getImageUrl(name: string) {
  return new URL(`@/assets/article.jpg`, import.meta.url).href
}
</script>
