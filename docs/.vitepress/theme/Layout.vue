<script setup>
  import DefaultTheme from 'vitepress/theme'
  import comment from '../components/comment.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <comment />
    </template>
  </DefaultTheme.Layout>
</template>