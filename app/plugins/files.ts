import type { FilePlugin } from '../../types'

export default defineNuxtPlugin(() => {
  const images = ref()
  const router = useRouter()
  const toast = useToast()
  // https://hub.nuxt.com/docs/storage/blob#useupload
  const upload = useUpload('/api/images/upload', { multiple: true })

  async function getImages() {
    const { data: files } = await useFetch('/api/images')

    images.value = files.value
  }

  async function uploadImage(images: FileList, filter: boolean = false) {
    await upload(images).catch(err => toast.add({
      color: 'red',
      title: 'Failed to upload image',
      description: err.data?.message || err.message
    }))

    getImages()

    if (filter) {
      router.push('/')
    }
  }

  async function deleteImage(pathname: string) {
    await $fetch(`/api/images/${pathname}`, { method: 'DELETE' })

    getImages()
  }

  return {
    provide: {
      file: {
        getImages,
        images,
        uploadImage,
        deleteImage
      } as FilePlugin
    }
  }
})
