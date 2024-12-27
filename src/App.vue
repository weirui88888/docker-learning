<script setup lang="ts">
import { useRouter } from 'vue-router'
// const title = import.meta.env.VITE_APP_TITLE
// const request_base_url = import.meta.env.VITE_APP_REQUEST_URL
import { watch, ref } from 'vue'
const router = useRouter()

const router_name = ref('')

watch(
  () => router.currentRoute.value.name,
  newValue => {
    router_name.value = newValue as string
  }
)
</script>

<template>
  <!-- <div>
    <h1 class="h1-title">title:{{ title }}</h1>
    <h1 class="h1-title">request_base_url:{{ request_base_url }}</h1>
  </div> -->
  <!-- <div>
    <img src="./assets/debugger.jpg" alt="" class="debugger-img" />
    <img src="/public-pic.jpg" alt="" class="debugger-img" />
  </div> -->
  <header>
    <div>
      <ul>
        <li
          :class="{
            active: router_name === 'Home'
          }"
        >
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li
          :class="{
            active: router_name === 'Template'
          }"
        >
          <RouterLink to="/template">Template</RouterLink>
        </li>
      </ul>
    </div>
  </header>
  <router-view />
</template>

<style scoped>
header {
  padding: 10px 0;
}
ul {
  display: flex;
}

ul > li {
  list-style: none;
  font-size: 24px;
  margin-right: 20px;
}

ul > li.active a {
  color: red;
  font-weight: bold;
}
</style>
