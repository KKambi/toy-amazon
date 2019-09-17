const leftArrow = document.getElementById("left-arrow")
const miniCarouselRow = document.querySelector(".mini-carousel-row")
const rMinus = /-/
let click;

miniCarouselRow.addEventListener("transitionend", () => {
    let lastCard = miniCarouselRow.lastChild
    miniCarouselRow.removeChild(lastCard)
    miniCarouselRow.insertAdjacentElement('afterbegin', lastCard)
    miniCarouselRow.style.transition = ''
    miniCarouselRow.style.transform = `translateX(${-280}px)`
})

leftArrow.addEventListener("click", () => {
    if (click) {
        clearTimeout(click)
    }
    let translate = miniCarouselRow.style.transform
    let px = Number(translate.replace(/[^0-9]/g,''))
    let sign = rMinus.test(translate) ? -1 : 1
    click = setTimeout(() => {
        miniCarouselRow.style.transition = 'all 0.3s ease-out'
        miniCarouselRow.style.transform = `translateX(${px * sign + 280}px)`
    }, 100)
})