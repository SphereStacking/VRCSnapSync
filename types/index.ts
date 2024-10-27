import type { BlobObject } from '@nuxthub/core'

export interface FilePlugin {
  getImages: () => Promise<void>
  images: Ref<BlobObject[]>
  uploadImage: (images: FileList, filter?: boolean) => Promise<void>
  deleteImage: (pathname: string) => Promise<void>
}
