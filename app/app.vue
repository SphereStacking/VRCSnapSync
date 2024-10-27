<script setup lang="ts">
const { getImages } = useFile()

useHead({
  link: [
    { rel: 'icon', href: '/logo.svg' }
  ],
  htmlAttrs: {
    lang: 'ja'
  }
})

const title = 'SnapSync'
const description = '画像共有'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogSiteName: 'SnapSync',
  ogImage: '/social-card.png',
  twitterCard: 'summary_large_image'
})

await getImages()
</script>

<template>
  <div
    class="bg-black min-h-[100dvh] overflow-x-auto relative"
    :class="{ 'flex flex-col md:block': $router.currentRoute.value.fullPath !== '/' }"
  >
    <UNotifications />
    <NuxtPage />
    <ImageThumbnailList :class="$router.currentRoute.value.fullPath !== '/' ? 'opacity-100 z-[9999]' : 'opacity-0 z-[-1]'" />
  </div>
</template>
