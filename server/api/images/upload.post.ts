export default eventHandler(async (event) => {
  await requireUserSession(event)

  // https://hub.nuxt.com/docs/storage/blob#handleupload
  return hubBlob().handleUpload(event, {
    multiple: true,
    put: {
      addRandomSuffix: true
    },
    ensure: {
      maxSize: '16MB',
      types: ['image/jpeg', 'image/png', 'image/gif', 'image/heic', 'image/webp']
    }
  })
})
