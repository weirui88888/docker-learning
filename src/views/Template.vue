<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getTemplate } from '../api/template'

interface Template {
  postId: string
  content: string
  [key: string]: any
}

const templates = ref<Template[]>([])

onMounted(async () => {
  const res = await getTemplate()
  templates.value = res?.data?.templates || []
  console.log(res)
})
</script>

<template>
  <div class="template-container">
    <div v-for="template in templates" :key="template.postId">
      {{ template.content }}
    </div>
  </div>
</template>

<style scoped></style>
