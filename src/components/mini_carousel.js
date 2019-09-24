import is_util from '../utils/is_util.js'
import dom_util from '../utils/dom_util.js'
import fetch from 'node-fetch'
import path from 'path'

import '../stylesheets/main_card.sass'

class MiniCarousel {
    constructor(container, imageURL, imageWidth, imageHeight, interval, options) {
        this.container = container
        this.imageWidth = imageWidth || 300
        this.imageHeight = imageHeight || 300
        this.imageURL = imageURL || ""
        this.interval = interval || 1000
        this.options = options || {}
        this.imageNumber = 4    //FIXME: 이후 fetch API와 연동하여 수정
        this.intervalId = ""
        this.direction = "right"
        this.elements = {}
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
        this.cards = {}
    }

    init() {
        this.makeCard(this.imageURL).then(() => {
            this.insertHTML(this.container)
            this.setElements()
            this.setViewSize(this.imageWidth, this.imageHeight, this.imageNumber)
            this.intervalId = this.startAutoSlide(this.interval)
            setInterval(() => {
                if (is_util.isNotWorking(this.intervalId)) {
                    this.intervalId = this.startAutoSlide(this.interval)
                    dom_util.disableElement(this.elements.button)
                }
            }, this.interval * 3)
            this.addArrowEventHandler(this.elements.leftArrow, "left")
            this.addArrowEventHandler(this.elements.rightArrow, "right")
            this.addTransitionEndEventHandler(this.elements.miniCarouselRow)
            if(this.options.shadow === false) this.removeShadow()
            if(this.options.center === true) this.alignCenter()
        })
    }

    insertHTML(container){
        const html = 
        `<div class="mini-carousel-scroller">
            <div class="mini-carousel-container">
                <div class="mini-carousel-col mini-carousel-left"> 
                    <a class="mini-carousel-arrow" id="left-arrow"></a>
                </div>
                <div class="mini-carousel-col mini-carousel-center">
                    <div class="mini-carousel-viewport">
                        <ol class="mini-carousel-row">
                            ${this.cards}
                        </ol>
                    </div>
                </div>
                <div class="mini-carousel-col mini-carousel-right">
                    <a class="mini-carousel-arrow" id="right-arrow"></a>
                </div>
            </div>
        </div>`
        container.insertAdjacentHTML('afterbegin', html)
    }

    getImagePath(imageURL){
        return fetch(imageURL)
            .then((res) => {
                if (/(4..)|(5..)/.test(res.status) === true){
                    console.error(res.statusText)
                }
                else {
                    return res.json()
                }
            })
            .then((list) => {
                return list
            })
            .catch(err => console.log(err))
    }

    makeCard(imageURL){
        return this.getImagePath(imageURL).then((list) => {
            let html = ``
            list.forEach((imagePath, index) => {
                if (this.options.background === true){
                    const cardHTML = 
                        `<li class="mini-carousel-card" data-id="${index}" style='width:${this.imageWidth}px; background-image: url("${path.resolve(imagePath)}")'>
                            <div class="benefit" style="float: right;">
                                <div class="benefit-header">
                                    ${this.options.headers[index]}
                                </div>
                            <div class="benefit-blurb">
                                ${this.options.blurb[index]}
                            </div>
                                <a class="benefit-cta" href="${this.options.ctaURL[index]}">
                                    ${this.options.cta[index]}
                                </a>
                            </div>
                        </li>
                        `
                    html += cardHTML
                }
                else {
                    const cardHTML = 
                        `<li class="mini-carousel-card">
                            <a class="img-link">
                                <img src="${imagePath}">
                            </a>
                        </li>
                        `
                    html += cardHTML
                }
            })
            this.cards = html
            this.imageNumber = list.length
        })
    }

    setElements(){
        this.elements = {
            view: this.container.querySelector(".mini-carousel-viewport"),
            leftArrow: this.container.querySelector("#left-arrow"),
            rightArrow: this.container.querySelector("#right-arrow"),
            miniCarouselRow: this.container.querySelector(".mini-carousel-row"),
            button: this.container.querySelector(".mini-carousel-arrow")
        }
    }

    setViewSize(imageWidth, imageHeight, imageNumber){
        this.elements.view.style.width = `${imageWidth}px`
        this.elements.view.style.height = `${imageHeight}px`
        this.elements.view.querySelectorAll("img").forEach((imgTag) => {
            imgTag.style.width = `${imageWidth}px`
            imgTag.style.height = `${imageHeight}px`
        })
        
        const row = this.elements.view.querySelector("ol")
        row.style.transform = `translateX(-${this.imageWidth}px)`
        row.style.width = `${imageWidth * imageNumber}px`
    }

    setDirection(direction) {
        this.direction = direction
    }

    initializeIntervalId() {
        this.intervalId = ""
    }

    alignCenter(){
        this.container.setAttribute("style", "justify-content: center")
    }

    removeShadow(){
        const center = this.container.querySelector(".mini-carousel-center")
        center.className += " no-before"
        center.className += " no-after"
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