const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
const miniCarouselRow = document.querySelector(".mini-carousel-row")
let button = document.querySelector(".mini-carousel-arrow")
let direction = ""
let childMap = {
    "left": "lastChild",
    "right": "firstChild"
}
let insertMap = {
    "left": "afterbegin",
    "right": "beforeend"
}

miniCarouselRow.addEventListener("transitionend", () => {
    let card = miniCarouselRow[childMap[direction]]
    miniCarouselRow.removeChild(card)
    miniCarouselRow.insertAdjacentElement(insertMap[direction], card)
    miniCarouselRow.style.transition = ''
    miniCarouselRow.style.transform = `translateX(${-280}px)`
    button.removeAttribute("disabled")
})

leftArrow.addEventListener("click", () => {
    let translate = miniCarouselRow.style.transform
    let px = Number(translate.replace(/[^0-9]/g,''))
    let sign = translate.includes('-') ? -1 : 1
    direction = "left"

    miniCarouselRow.style.transition = 'all 0.1s ease-out'
    miniCarouselRow.style.transform = `translateX(${px * sign + 280}px)`
    button.setAttribute("disabled", "")

})

rightArrow.addEventListener("click", () => {
    let translate = miniCarouselRow.style.transform
    let px = Number(translate.replace(/[^0-9]/g,''))
    let sign = translate.includes('-') ? -1 : 1
    direction = "right"

    miniCarouselRow.style.transition = 'all 0.1s ease-out'
    miniCarouselRow.style.transform = `translateX(${px * sign - 280}px)`
    button.setAttribute("disabled", "")
})

