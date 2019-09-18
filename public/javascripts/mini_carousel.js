const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
const miniCarouselRow = document.querySelector(".mini-carousel-row")
const button = document.querySelector(".mini-carousel-arrow")
const childMap = {
    "left": "lastChild",
    "right": "firstChild"
}
const insertMap = {
    "left": "afterbegin",
    "right": "beforeend"
}
let intervalId = ""
let direction = ""

miniCarouselRow.addEventListener("transitionend", () => {
    const card = miniCarouselRow[childMap[direction]]
    miniCarouselRow.removeChild(card)
    miniCarouselRow.insertAdjacentElement(insertMap[direction], card)
    miniCarouselRow.style.transition = ''
    miniCarouselRow.style.transform = `translateX(${-280}px)`
    button.removeAttribute("disabled")
})

leftArrow.addEventListener("click", () => {
    if (intervalId){
        console.log(`interval:${intervalId}`)
        clearInterval(intervalId)
        intervalId = ""
    }
    const translate = miniCarouselRow.style.transform
    const px = Number(translate.replace(/[^0-9]/g,''))
    const sign = translate.includes('-') ? -1 : 1
    direction = "left"

    miniCarouselRow.style.transition = 'all 0.1s ease-out'
    miniCarouselRow.style.transform = `translateX(${px * sign + 280}px)`
    button.setAttribute("disabled", "")

})

rightArrow.addEventListener("click", () => {
    if (intervalId){
        console.log(`interval:${intervalId}`)
        clearInterval(intervalId)
        intervalId = ""
    }
    const translate = miniCarouselRow.style.transform
    const px = Number(translate.replace(/[^0-9]/g,''))
    const sign = translate.includes('-') ? -1 : 1
    direction = "right"

    miniCarouselRow.style.transition = 'all 0.1s ease-out'
    miniCarouselRow.style.transform = `translateX(${px * sign - 280}px)`
    button.setAttribute("disabled", "")
})

intervalId = setInterval(() => {
    rightArrow.click() 
}, 3000)