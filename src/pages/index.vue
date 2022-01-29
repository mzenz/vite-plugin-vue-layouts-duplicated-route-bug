<template>
  <h1>Home</h1>
  <div>
    <p
      v-for="r in routes"
    >
      <router-link :to="r.path">{{ r.path }}</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const routes = router.getRoutes()
// console.debug('index.vue:')
// console.debug(routes)
</script>
