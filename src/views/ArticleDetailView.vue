<template>
  <div class="article">
    <Title text="Статья" />

    <div class="container">
      <DetailArticle :article="article" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
import { useArticlesStore } from '@/stores/articles'
const store = useArticlesStore()
import Title from '@/components/UI/AppTitle.vue'
import DetailArticle from '@/components/Articles/Detail.vue'
let article = ref(store.getArticleByKeyword(route.params.keyword))
</script>
