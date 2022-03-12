const images = ['../image/flower1.jpg', '../image/flower2.jpg', '../image/flower3.jpg',
    '../image/flower4.jpg', '../image/flower5.jpg', '../image/flower6.jpg']


let imageIndex = 0
const imageElement = document.getElementById('imageElement')
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0
    }
    const imgUrl = images[imageIndex]
    imageElement.setAttribute('src', imgUrl)
    imageIndex++
}, 2000)