// convert image url to image file line the one that we get from imageInput.files[0]
const blobUrlToFile = (blobUrl: string): Promise<File> => new Promise((resolve) => {
    fetch(blobUrl).then((res) => {
        res.blob().then((blob) => {
            // please change the file.extension with something more meaningful
            // or create a utility function to parse from URL
            const file = new File([blob], 'empty-image.png', { type: blob.type })
            resolve(file)
        })
    })
})

export default blobUrlToFile;