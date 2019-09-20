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
    }

    insertHTML(container = this.container){
        let html = ""
        let colorList = this.options.colors
        for (let i=0; i<this.cardNumber; i++){
            const color = `#${colorList[i]}`
            const cardHTML = 
            `<div class="main-card" style="width:${this.cardWidth}px; height:${this.cardHeight}px; background-color:${color}"></div>`
            html += cardHTML
        }
        html = `
        <div class="main-card-row" >
            ${html}
        </div>`
        container.insertAdjacentHTML('afterbegin', html)
    }

    alignCenter(container = this.container){
        container.setAttribute("style", "justify-content: center")
    }
}

export default MainCard