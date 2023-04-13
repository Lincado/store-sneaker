const iconSearch = document.querySelector(".search")
const inputSearch = document.querySelector("#input-search")

const focusInputSearch = () => {
    inputSearch.focus()
}

iconSearch.addEventListener("click", focusInputSearch)

const images = document.querySelectorAll(".item")
const controls = document.querySelectorAll(".control")
const maxItems = images.length
let currentItem = 0

controls.forEach( control => {
    control.addEventListener("click", (event) => {
        const isLeft = event.target.classList.contains("arrow-left")

        if(isLeft) {
            currentItem -= 1
        } else {
            currentItem += 1
        }

        if (currentItem >= maxItems) {
            currentItem = 0
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1
        }

        images.forEach(() => {
            images[currentItem].scrollIntoView({
                behavior: "smooth",
                inline: "center"
            })
        })
    })
})