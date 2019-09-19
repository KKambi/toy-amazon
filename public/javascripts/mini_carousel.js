import is_util from './is_util.js'
import dom_util from './dom_util.js'

class MiniCarousel {
    constructor(container, imageWidth, imageHeight, interval) {
        this.imageWidth = imageWidth || 300
        this.imageHeight = imageHeight || 300
        this.imageNumber = 4    //FIXME: 이후 fetch API와 연동하여 수정
        this.interval = interval || 1000
        this.intervalId = ""
        this.direction = "right"
        this.elements = {}
        this.container = container
        this.map = {
            childMap: {
                "left": "lastElementChild",
                "right": "firstElementChild"
            },
            insertMap: {
                "left": "afterbegin",
                "right": "beforeend"
            }
        }
        this.html = 
            `<div class="mini-carousel-scroller">
                <div class="mini-carousel-container">
                    <div class="mini-carousel-col mini-carousel-left"> 
                        <a class="mini-carousel-arrow" id="left-arrow"></a>
                    </div>
                    <div class="mini-carousel-col mini-carousel-center">
                        <div class="mini-carousel-viewport">
                            <ol class="mini-carousel-row">
                                <li class="mini-carousel-card">
                                    <a class="img-link">
                                        <img src="/images/Sub_Card_A/Sub_Card_A01.jpg" alt="Homecoming New Series">
                                    </a>
                                </li>
                                <li class="mini-carousel-card">
                                    <a class="img-link">
                                        <img src="/images/Sub_Card_A/Sub_Card_A02.jpg" alt="The Man in the High Castle">
                                    </a>
                                </li>
                                <li class="mini-carousel-card">
                                    <a class="img-link">
                                        <img src="/images/Sub_Card_A/Sub_Card_A03.jpg" alt="The Marvelous Mrs.Meisel">
                                    </a>
                                </li>
                                <li class="mini-carousel-card">
                                    <a class="img-link">
                                        <img src="/images/Sub_Card_A/Sub_Card_A04.jpg" alt="Tom Clansy's Jack Lyan">
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div class="mini-carousel-col mini-carousel-right">
                        <a class="mini-carousel-arrow" id="right-arrow"></a>
                    </div>
                </div>
            </div>`
    }

    init() {
        this.insertHTML(this.container)
        this.setElements()
        this.setViewSize(this.imageWidth, this.imageHeight, this.imageNumber)
        // this.intervalId = this.startAutoSlide(this.interval)
        setInterval(() => {
            if (is_util.isNotWorking(this.intervalId)) {
                this.intervalId = this.startAutoSlide(this.interval)
                dom_util.disableElement(this.elements.button)
            }
        }, this.interval * 3)
        this.addArrowEventHandler(this.elements.leftArrow, "left")
        this.addArrowEventHandler(this.elements.rightArrow, "right")
        this.addTransitionEndEventHandler(this.elements.miniCarouselRow)
    }

    insertHTML(container){
        container.insertAdjacentHTML('afterbegin', this.html)
    }

    setElements(){
        this.elements = {
            view: document.querySelector(".mini-carousel-viewport"),
            leftArrow: document.getElementById("left-arrow"),
            rightArrow: document.getElementById("right-arrow"),
            miniCarouselRow: document.querySelector(".mini-carousel-row"),
            button: document.querySelector(".mini-carousel-arrow")
        }
    }

    setViewSize(imageWidth, imageHeight, imageNumber){
        this.elements.view.style.width = `${imageWidth}px`
        this.elements.view.style.height = `${imageHeight}px`
        const row = this.elements.view.querySelector("ol")
        row.style.transform = `translateX(-${this.imageWidth}px)`
        row.style.width = `${imageWidth * imageNumber}px`
        this.elements.view.querySelectorAll("img").forEach((imgTag) => {
            imgTag.style.width = `${imageWidth}px`
            imgTag.style.height = `${imageHeight}px`
        })
    }

    setDirection(direction) {
        this.direction = direction
    }

    initializeIntervalId() {
        this.intervalId = ""
    }

    /** 
     * Start Auto Slide card to right
     *
     * @param {string} interval sliding interval (ms)
     * @return {number} intervalId 
     */
    startAutoSlide(interval) {
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
    slideCard(direction) {
        const miniCarouselRow = this.elements.miniCarouselRow
        const translate = miniCarouselRow.style.transform
        const currentSign = translate.includes('-') ? -1 : 1
        const currentPixel = Number(translate.replace(/[^0-9]/g, ''))
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
    relocateCard(direction) {
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
    addArrowEventHandler(element, direction = "left") {
        element.addEventListener("click", () => {
            if (is_util.isWorking(this.intervalId)) {
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
    addTransitionEndEventHandler(element) {
        element.addEventListener("transitionend", () => {
            this.relocateCard(this.direction)
            dom_util.enableElement(this.elements.button)
        })
    }
}

export default MiniCarousel