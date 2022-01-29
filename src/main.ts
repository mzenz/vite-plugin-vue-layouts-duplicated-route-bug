import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)
// NOTE: REPLACING LINE ABOVE WITH LINE BELOW BYPASSES THE BUG BY NOT USING THE LAYOUTS PLUGIN
// const routes = generatedRoutes

const router = createRouter({
  history: createWebHistory(),
  routes
});

console.debug(routes)
console.debug(router.getRoutes())

if (routes.length !== router.getRoutes().length) {
  // TODO: UNCOMMENT LINE BELOW TO BREAK INTO DEBUGGER
  // debugger
}

const app = createApp(App)
app.use(router)
app.mount('#app')
