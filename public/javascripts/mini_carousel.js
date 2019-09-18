//Object For Indexing
const childMap = {
    "left": "lastChild",
    "right": "firstChild"
}
const insertMap = {
    "left": "afterbegin",
    "right": "beforeend"
}

//Variable for State
let intervalId = ""
let direction = ""

//DOM Element
const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
const miniCarouselRow = document.querySelector(".mini-carousel-row")
const button = document.querySelector(".mini-carousel-arrow")

class MiniCarousel {
    constructor(){
        this.intervalId = ""
        this.direction = ""
        this.elements = {
            leftArrow: document.getElementById("left-arrow"),
            rightArrow: document.getElementById("right-arrow"),
            miniCarouselRow: document.querySelector(".mini-carousel-row"),
            button: document.querySelector(".mini-carousel-arrow")
        }
    }
}

/** 
 * Slide carousel card to left/right
 *
 * @param {string} direction sliding direction ["left"/"right"]
 * @return {void} 
 */
const slideCard = function(direction){
    const translate = miniCarouselRow.style.transform
    const currentSign = translate.includes('-') ? -1 : 1
    const currentPixel = Number(translate.replace(/[^0-9]/g,''))
    const slidePixel = direction==="left" ? 280 : -280

    miniCarouselRow.style.transition = 'all 0.1s ease-out'
    miniCarouselRow.style.transform = `translateX(${currentSign * currentPixel + slidePixel}px)`
}

/** 
 * Move carousel [first/last] card to [last/first] 
 *
 * @param {string} direction sliding direction ["left"/"right"]
 * @return {void} 
 */
const moveCard = function(direction){
    const card = miniCarouselRow[childMap[direction]]
    miniCarouselRow.removeChild(card)
    miniCarouselRow.insertAdjacentElement(insertMap[direction], card)
    miniCarouselRow.style.transition = ''
    miniCarouselRow.style.transform = `translateX(${-280}px)`
}

/** 
 * Start Auto Slide card to right
 *
 * @param {string} interval sliding interval (ms)
 * @return {number} intervalId 
 */
const startAutoSlide = function(interval){
    return setInterval(() => {
        slideCard("right")
        button.setAttribute("disabled", "")
    }, interval)
}

//Auto sliding start
intervalId = startAutoSlide(3000)

//Auto sliding restart
setInterval(() => {
    if (intervalId === ""){
        // sliding start
        direction = "right"
        intervalId = startAutoSlide(3000)
        button.setAttribute("disabled", "")
    }
}, 10000)

//Carousel left-arrow click event
leftArrow.addEventListener("click", () => {
    if (intervalId){
        clearInterval(intervalId)
        intervalId = ""
    }
    direction = "left"
    slideCard(direction)
    button.setAttribute("disabled", "")
})

//Carousel right-arrow click event
rightArrow.addEventListener("click", () => {
    if (intervalId){
        clearInterval(intervalId)
        intervalId = ""
    }
    direction = "right"
    slideCard(direction)
    button.setAttribute("disabled", "")
})

//Carousel card transition end event
miniCarouselRow.addEventListener("transitionend", () => {
    moveCard(direction)
    button.removeAttribute("disabled")
})