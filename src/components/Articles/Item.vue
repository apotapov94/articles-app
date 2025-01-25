<template>
  <div class="article" v-if="article">
    <div class="article__top">
      <img :src="getImageUrl(article.image)" class="article__img" alt="" />
    </div>
    <div class="article__bottom">
      <div class="article__title">{{ article.title }}</div>
      <div class="article__link">
        <RouterLink :to="`/articles/${article.keyword}`">Подробнее</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Article from '@/components/Articles/Item.vue'

const props = defineProps({
  article: Object,
})

function getImageUrl(name: string) {
  return new URL(`@/assets/article.jpg`, import.meta.url).href
}
</script>
