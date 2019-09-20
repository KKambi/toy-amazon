import MiniCarousel from './mini_carousel.js'
import BenefitCard from './benefit_card.js'
import MainCard from './main_card.js'

import main_carousel_options from './main_carousel_options.js'

const SECOND = 1000

//main-card insert
const main_card_container = document.getElementById("main-card-continaer")
const main_card = new MainCard(
    main_card_container,
    [],
    200,
    280,
    {
        "center": true,
        "buttonNumber": [4, 5, 4, 2, 2],
        "colors": ["2B87AE", "CB0B83", "A90066", "008476", "FC5F36"]
    }
)
main_card.init()

//main-carousel insert
const main_carousel_container = document.getElementById("main-beneift-container")
const main_carousel_imageURL = "http://localhost:3000/images/main"
const main_carousel = new MiniCarousel(
    main_carousel_container, 
    main_carousel_imageURL, 
    1280, 400, SECOND * 3,
    main_carousel_options
)
main_carousel.init('afterbegin')

//video-carousel insert
const video_carousel_container = document.getElementById("video-benefit-container")
const video_carousel_imageURL = "http://localhost:3000/images/sub/A"
const video_carousel = new MiniCarousel(
    video_carousel_container, 
    video_carousel_imageURL, 
    280, 210, SECOND * 3
)
video_carousel.init('afterbegin')

//video-carousel-benefit insert
const video_carousel_header = `Amazon Originals, <br>exclusively on Prime Video`
const video_carousel_blurb = 
    `Prime Video is the only place 
    where you can watch Amazon Original series 
    like "The Marvelous Mrs. Maisel", "Tom Clancy's Jack Ryan", "Homecoming", and "The Man in the High Castle".`
const video_carousel_cta = `Explore Prime Video;`
const video_carousel_ctaURL = `https://www.amazon.com/gp/video/storefront/ref=dvm_us_aq_np_dhb_be_optorigt1?ie=UTF8&amp;merchId=originals1`
const video_benefit_card = new BenefitCard(
    video_carousel_container, 
    video_carousel_header, 
    video_carousel_blurb, 
    video_carousel_cta, 
    video_carousel_ctaURL
)
video_benefit_card.init('beforeend')

//music-carousel insert
const music_carousel_container = document.getElementById("music-benefit-container")
const music_carousel_imageURL = "http://localhost:3000/images/sub/B"
const music_carousel = new MiniCarousel(
    music_carousel_container, 
    music_carousel_imageURL, 
    220, 220, SECOND * 3
)
music_carousel.init('afterbegin')

//music-carousel-benefit insert
const music_carousel_header = `Stay on top of the<br>hottest music`
const music_carousel_blurb = `These songs and artists are the cream of this month's crop of new music. Check out the latest from Taylor Swift, Old Dominion, Kesha, and Brett Young.`
const music_carousel_cta = `Explore Prime Music&#9656;`
const music_carousel_ctaURL = `https://www.amazon.com/gp/dmusic/promotions/PrimeMusic?ref=hawkfire_prime_detail_page_benefit_desc`
const music_benefit_card = new BenefitCard(
    music_carousel_container, 
    music_carousel_header, 
    music_carousel_blurb, 
    music_carousel_cta, 
    music_carousel_ctaURL
)
music_benefit_card.init('beforeend')