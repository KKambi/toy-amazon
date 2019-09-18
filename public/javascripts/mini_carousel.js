import { is_util } from './is_util.js'
import { dom_util } from './dom_util.js'

const WIDTH = 280
const HEIGHT = 210 
const SECOND_3 = 3000

class MiniCarousel {
    constructor(imageWidth, imageHeight, interval){
        this.imageWidth = imageWidth || 300
        this.imageHeight = imageHeight || 300
        this.interval = interval || SECOND_3
        this.intervalId = ""
        this.direction = "right"
        this.elements = {
            leftArrow: document.getElementById("left-arrow"),
            rightArrow: document.getElementById("right-arrow"),
            miniCarouselRow: document.querySelector(".mini-carousel-row"),
            button: document.querySelector(".mini-carousel-arrow")
        }
        this.map = {
            childMap: {
                "left": "lastChild",
                "right": "firstChild"
            },
            insertMap: {
                "left": "afterbegin",
                "right": "beforeend"
            }
        }
    }

    init(){
        //Start Auto Sliding
        this.intervalId = this.startAutoSlide(this.interval)    

        //Check State Cyclically -> Restart Auto sliding
        setInterval(() => {
            if (is_util.isNotWorking(this.intervalId)){
                this.intervalId = this.startAutoSlide(this.interval)
                dom_util.disableElement(this.elements.button)
            }
        }, this.interval * 4)

        //Add arrow click event handler
        this.addArrowEventHandler(this.elements.leftArrow, "left")
        this.addArrowEventHandler(this.elements.rightArrow, "right")

        //Add carousel card transition end event handler
        this.addTransitionEndEventHandler(this.elements.miniCarouselRow)
    }

    /** Set direction */
    setDirection(direction){
        this.direction = direction 
    }

    /** Initialize intervalId */
    initializeIntervalId(){
        this.intervalId = ""
    }
   
    /** 
     * Start Auto Slide card to right
     *
     * @param {string} interval sliding interval (ms)
     * @return {number} intervalId 
     */
    startAutoSlide(interval){
        return setInterval(() => {
            this.setDirection("right")
            this.slideCard("right")
            dom_util.disableElement(this.elements.button)
        }, interval)
    }

    /** 
     * Slide carousel card to left/right
     *
     * @param {string} direction sliding direction ["left"/"right"]
     * @return {void} 
     */
    slideCard(direction){
        const miniCarouselRow = this.elements.miniCarouselRow
        const translate = miniCarouselRow.style.transform
        const currentSign = translate.includes('-') ? -1 : 1
        const currentPixel = Number(translate.replace(/[^0-9]/g,''))
        const slidePixel = direction === "left" ? this.imageWidth : -this.imageWidth

        miniCarouselRow.style.transition = 'all 0.1s ease-out'
        miniCarouselRow.style.transform = `translateX(${currentSign * currentPixel + slidePixel}px)`
    }

    /** 
     * Move carousel [first/last] card to [last/first] 
     *
     * @param {string} direction sliding direction ["left"/"right"]
     * @return {void} 
     */
    relocateCard(direction){
        const card = this.elements.miniCarouselRow[this.map.childMap[direction]]

        this.elements.miniCarouselRow.removeChild(card)
        this.elements.miniCarouselRow.insertAdjacentElement(this.map.insertMap[direction], card)
        this.elements.miniCarouselRow.style.transition = ''
        this.elements.miniCarouselRow.style.transform = `translateX(${-this.imageWidth}px)`
    }

    /** 
     * Add carousel arrow click event handler to element
     *
     * @param {element} element arrow
     * @return {void}
     */
    addArrowEventHandler(element, direction = "left"){
        element.addEventListener("click", () => {
            if (is_util.isWorking(this.intervalId)){
                clearInterval(this.intervalId)
                this.initializeIntervalId()
            }
            this.setDirection(direction)
            this.slideCard(direction)
            dom_util.disableElement(this.elements.button)
        })
    }

    /** 
     * Add carousel transition end event to element
     *
     * @param {element} element carousel row
     * @return {void}
     */
    addTransitionEndEventHandler(element){
        element.addEventListener("transitionend", () => {
            this.relocateCard(this.direction)
            dom_util.enableElement(this.elements.button)
        })
    }    
}

new MiniCarousel(WIDTH, HEIGHT, SECOND_3).init()