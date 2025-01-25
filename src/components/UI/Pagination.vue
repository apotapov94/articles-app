<template>
  <div class="container">
    <div class="pagination">
      <span @click="store.toFirstPage" v-if="store.pagination.curPage > 2"><<</span>
      <span @click="store.prevPage" v-if="store.pagination.curPage > 1"><</span>
      <span @click="store.toPage(store.getPrevPrevPage)" v-if="store.pagination.curPage > 2">{{
        store.getPrevPrevPage
      }}</span>
      <span @click="store.toPage(store.getPrevPage)" v-if="store.pagination.curPage > 1">{{
        store.getPrevPage
      }}</span>
      <span class="active">{{ store.pagination.curPage }}</span>
      <span
        v-if="store.pagination.curPage < store.getLastPage"
        @click="store.toPage(store.getNextPage)"
        >{{ store.getNextPage }}</span
      >
      <span
        v-if="store.pagination.curPage < store.getLastPage - 1"
        @click="store.toPage(store.getNextNextPage)"
        >{{ store.getNextNextPage }}</span
      >
      <span v-if="store.pagination.curPage < store.getLastPage - 2" @click="store.nextPage">></span>
      <span
        v-if="store.pagination.curPage < store.getLastPage - 2"
        @click="store.toPage(store.getLastPage)"
        >>></span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles'
const store = useArticlesStore()
console.log(store.getLastPage - 2)
defineProps({
  elemsOnPage: Number,
  elemsCount: Number,
})
</script>
