<template>
  <div class="article">
    <DetailArticle :article="article" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
import { useArticlesStore } from '@/stores/articles'
const store = useArticlesStore()

import DetailArticle from '@/components/Articles/Detail.vue'
let article = ref(store.getArticleByKeyword(route.params.keyword))
</script>
