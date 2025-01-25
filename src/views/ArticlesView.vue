<template>
  <div class="articles-page">
    <Title text="Статьи" />
    <ArticlesList :articles="store.getArticlesPage" />
    <Pagination :elemsOnPage="store.pagination.elemsOnPage" :elemsCount="store.articles.length" />
  </div>
</template>

<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles'
import ArticlesList from '@/components/Articles/List.vue'
import Pagination from '@/components/UI/Pagination.vue'
import Title from '@/components/UI/AppTitle.vue'
const store = useArticlesStore()
</script>
