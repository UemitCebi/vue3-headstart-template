<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { Switch } from '@headlessui/vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/solid'

const isDark = useDark()
</script>

<template>
  <div class="flex gap-4 items-center">
    <SunIcon class="h-8 w-8 text-black dark:text-white" />
    <Switch
      v-model="isDark"
      :class="isDark ? 'bg-green-900' : 'bg-green-500'"
      class="
        relative
        inline-flex
        flex-shrink-0
        h-[38px]
        w-[74px]
        border-2 border-transparent
        rounded-full
        cursor-pointer
        transition-colors
        ease-in-out
        duration-200
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white
        focus-visible:ring-opacity-75
      "
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="isDark ? 'translate-x-9' : 'translate-x-0'"
        class="
          pointer-events-none
          inline-block
          h-[34px]
          w-[34px]
          rounded-full
          bg-white
          shadow-lg
          transform
          ring-0
          transition
          ease-in-out
          duration-200
        "
      />
    </Switch>
    <MoonIcon class="h-8 w-8 text-black dark:text-white" />
  </div>
</template>
