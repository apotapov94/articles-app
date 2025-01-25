<template>
  <div class="article-page">
    <div class="article__image">
      <img :src="getImageUrl(article.image)" class="article__img" alt="" />
    </div>
    <div class="article__title">{{ article.title }}</div>
    <div class="article__text">{{ article.text }}</div>
  </div>
</template>

<script setup>
defineProps({
  article: Object,
})

function getImageUrl(name) {
  return new URL(`@/assets/article.jpg`, import.meta.url).href
}
</script>
