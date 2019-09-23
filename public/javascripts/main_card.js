import '../stylesheets/main_card.sass'

class MainCard {
    constructor(container, cardURL, cardWidth, cardHeight, options){
        this.container = container
        this.cardURL = cardURL || []
        this.cardWidth = cardWidth || 200
        this.cardHeight = cardHeight || 280
        this.options = options || {}

        this.cardNumber = 5
    }

    init(){
        this.insertHTML()

        if (this.options.center === true) this.alignCenter()
        if (this.options.carouselContainer) this.addSlideEvent()
    }

    insertHTML(container = this.container){
        let html = ""
        let buttonStart = 0
        for (let i=0; i<this.cardNumber; i++){
            const color = `#${this.options.colors[i]}`
            const buttonNumber = this.options.buttons[i]
            
            const buttonHTML = this.makeButtonHTML(buttonStart, buttonNumber)
            buttonStart += buttonNumber

            const cardHTML = this.makeCardHTML(buttonHTML, this.cardWidth, this.cardHeight, color)
            html += cardHTML
        }
        html = `
        <div class="main-card-row">
            ${html}
        </div>`
        container.insertAdjacentHTML('afterbegin', html)
    }

    makeButtonHTML(start, number){
        let html = ""
        for (let i=start; i<start+number; i++){
            let buttonHTML = `<button class="main-card-button" data-id="${i}"></button>`
            html += buttonHTML
        }
        html = `
        <div class="main-card-button-row">
            ${html}
        </div>
        `
        return html
    }    

    makeCardHTML(buttonHTML, width, height, color){
        return `
            <div class="main-card" style="width:${width}px; height:${height}px; background-color:${color}">
                ${buttonHTML}
            </div>`
    }

    alignCenter(container = this.container){
        container.setAttribute("style", "justify-content: center")
    }

    addSlideEvent(container = this.container, carouselContainer = this.options.carouselContainer){
        const mainCardRow = container.querySelector(".main-card-row")
        mainCardRow.addEventListener("click", (event) => {
            if (event.target.className === "main-card-button"){
                const buttonIndex = event.getAttribute("data-id")
                const currentCard = carouselContainer.querySelector(".mini-carousel-row").children[1]
                const currentCardIndex = card.getAttribute("data-id")
                
            }
        })
    }
}

export default MainCard