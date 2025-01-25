<template>
  <div class="container title">
    <h1>{{ text }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: String,
})
</script>
