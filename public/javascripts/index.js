import MiniCarousel from './mini_carousel.js'

const SECOND = 1000

const container = document.getElementById("video-benefit-container")
const miniCarousel = new MiniCarousel(container, 800, 210, SECOND * 3)
miniCarousel.init()