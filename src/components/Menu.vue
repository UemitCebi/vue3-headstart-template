<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const solutions = [
  {
    name: 'Home',
    description: 'Welcome page with default layout',
    href: '/',
    icon: `
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              aria-hidden='true'
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="8" fill="#FFEDD5" />
              <path
                d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
                stroke="#FB923C"
                stroke-width="2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
                stroke="#FDBA74"
                stroke-width="2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
                stroke="#FDBA74"
                stroke-width="2"
              />
            </svg>
          `,
  },
  {
    name: 'About',
    description: 'This page requires auth',
    href: '/about',
    icon: `
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="8" fill="#FFEDD5" />
              <path
                d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
                stroke="#FB923C"
                stroke-width="2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
                stroke="#FDBA74"
                stroke-width="2"
              />
            </svg>
          `,
  },
  {
    name: 'Auth',
    description: 'Auth page with custom layout',
    href: '/auth/login',
    icon: `
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="8" fill="#FFEDD5" />
              <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
              <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
              <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
              <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
              <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
              <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
            </svg>
          `,
  },
]
</script>

<template>
  <div class="w-full max-w-sm px-4 _fixed _top-16">
    <Popover v-slot="{ open }" class="relative">
      <PopoverButton
        :class="open ? '' : 'text-opacity-90'"
        class="
          inline-flex
          items-center
          px-3
          py-2
          text-base
          font-medium
          bg-green-500
          text-white
          rounded-md
          group
          hover:text-opacity-100
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-opacity-75
        "
      >
        <span>Menu</span>
        <ChevronDownIcon
          :class="open ? '' : 'text-opacity-70'"
          class="
            w-5
            h-5
            ml-2
            text-orange-300
            transition
            duration-150
            ease-in-out
            group-hover:text-opacity-80
          "
          aria-hidden="true"
        />
      </PopoverButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
          class="
            absolute
            z-10
            w-screen
            max-w-sm
            px-4
            mt-3
            transform
            _-translate-x-1/2
            _left-1/2
            sm:px-0
            lg:max-w-3xl
          "
        >
          <div
            class="
              overflow-hidden
              rounded-lg
              shadow-lg
              ring-1 ring-black ring-opacity-5
            "
          >
            <div class="relative grid gap-8 bg-white p-7">
              <a
                v-for="item in solutions"
                :key="item.name"
                :href="item.href"
                class="
                  flex
                  items-center
                  p-2
                  -m-3
                  transition
                  duration-150
                  ease-in-out
                  rounded-lg
                  hover:bg-gray-50
                  focus:outline-none
                  focus-visible:ring
                  focus-visible:ring-orange-500
                  focus-visible:ring-opacity-50
                "
              >
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                    w-10
                    h-10
                    text-white
                    sm:h-12 sm:w-12
                  "
                >
                  <div v-html="item.icon"></div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">
                    {{ item.name }}
                  </p>
                  <p class="text-sm text-gray-500">
                    {{ item.description }}
                  </p>
                </div>
              </a>
            </div>
            <div class="p-4 bg-gray-50">
              <a
                href="##"
                class="
                  flow-root
                  px-2
                  py-2
                  transition
                  duration-150
                  ease-in-out
                  rounded-md
                  hover:bg-gray-100
                  focus:outline-none
                  focus-visible:ring
                  focus-visible:ring-orange-500
                  focus-visible:ring-opacity-50
                "
              >
                <span class="flex items-center">
                  <span class="text-sm font-medium text-gray-900">
                    Documentation
                  </span>
                </span>
                <span class="block text-sm text-gray-500"> See Readme </span>
              </a>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
