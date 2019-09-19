import MiniCarousel from './mini_carousel.js'
import BenefitCard from './benefit_card.js'

const SECOND = 1000

const carouselContainer = document.getElementById("video-benefit-container")
const imageURL = "http://localhost:3000/images/sub/A"
const miniCarousel = new MiniCarousel(carouselContainer, imageURL, 280, 210, SECOND * 3)
miniCarousel.init('afterbegin')

const header = `Amazon Originals, <br>exclusively on Prime Video`
const blurb = 
    `Prime Video is the only place 
    where you can watch Amazon Original series 
    like "The Marvelous Mrs. Maisel", "Tom Clancy's Jack Ryan", "Homecoming", and "The Man in the High Castle".`
const cta = `Explore Prime Video`
const ctaURL = `https://www.amazon.com/gp/video/storefront/ref=dvm_us_aq_np_dhb_be_optorigt1?ie=UTF8&amp;merchId=originals1`
const benefitCard = new BenefitCard(carouselContainer, header, blurb, cta, ctaURL)
benefitCard.init('beforeend')