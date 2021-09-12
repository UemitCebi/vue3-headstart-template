<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const credentials = ref({ email: '', password: '' })

const handleSubmit = async () => {
  await userStore.login(credentials.value)
  if (route.query.redirect) {
    router.push({ path: `${route.query.redirect}` })
  } else {
    router.push({ name: 'home' })
  }
}
</script>
<template>
  <section class="w-screen h-screen flex justify-center items-center">
    <form @submit.prevent="handleSubmit()" class="shadow-lg p-8 w-1/3">
      <legend class="font-bold mb-4">Login</legend>
      <div class="flex flex-col justify-between p-4">
        <label for="email">E-Mail</label>
        <input
          type="email"
          id="email"
          v-model="credentials.email"
          class="border-b w-full p-2"
        />
      </div>
      <div class="flex flex-col justify-between p-4 mt-4">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="credentials.password"
          class="border-b w-full p-2"
        />
      </div>
      <div class="p-4">
        <button class="bg-green-500 text-white w-full px-4 py-2">Login</button>
      </div>
    </form>
  </section>
</template>
