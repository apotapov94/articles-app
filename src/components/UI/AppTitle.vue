<template>
  <div class="container title">
    <h1>{{ text }}</h1>
  </div>
</template>

<script setup>
defineProps({
  text: String,
})
</script>
