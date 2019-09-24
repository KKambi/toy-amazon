import '../stylesheets/benefit_card.sass'

class BenefitCard{
    constructor(container, header, blurb, cta, ctaURL){
        this.container = container
        this.header = header
        this.blurb = blurb
        this.cta = cta
        this.ctaURL = ctaURL
        this.html = 
            `<div class="benefit">
                <div class="benefit-header">
                    ${this.header}
                </div>
                <div class="benefit-blurb">
                    ${this.blurb}
                </div>
                <a class="benefit-cta" href="${ctaURL}">
                    ${this.cta}
                </a>
            </div>`
    }
    insertHTML(position, container){
        container.insertAdjacentHTML(position, this.html)
    }

    init(position) {
        this.insertHTML(position, this.container)
    }
}

export default BenefitCard
