const images = document.getElementsByClassName("image")
const previous = document.getElementById("previous")
const next = document.getElementById("next")
const pagination = document.getElementById("pagination")

function hideImages() {
    Array.from(images).forEach(image => {
        image.style.opacity = '0'
    })
}
hideImages()
images[0].style.opacity = '1'

let imgCount = 0

Array.from(images).forEach(image => {
    pagination.innerHTML += "<div class='page'></div>"
})

const pages = document.getElementsByClassName('page')

function deactivate(){
    Array.from(pages).forEach(page => page.classList.remove("active"))
}

Array.from(pages).forEach((page, idx) => {
    page.addEventListener("click", () => {
        deactivate()
        hideImages()
        imgCount = idx
        images[imgCount].style.opacity = '1'
        page.classList.add("active")
        
    })
})

previous.addEventListener("click", () => {
    deactivate()
    hideImages()
    if (imgCount <= 0) imgCount = images.length - 1
    else imgCount -= 1

    images[imgCount].style.opacity = '1'
    pages[imgCount].classList.add("active")
})

next.addEventListener("click", () => {
    deactivate()
    hideImages()
    if (imgCount >= images.length - 1) imgCount = 0
    else imgCount += 1

    images[imgCount].style.opacity = '1'
    pages[imgCount].classList.add("active")
})
pages[imgCount].classList.add("active")

setInterval(() => {
    deactivate()
    hideImages()
    if (imgCount >= images.length - 1) imgCount = 0
    else imgCount += 1

    images[imgCount].style.opacity = '1'
    pages[imgCount].classList.add("active")
}, 5000)
