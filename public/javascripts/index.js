import MiniCarousel from './mini_carousel.js'
import BenefitCard from './benefit_card.js'

const SECOND = 1000

const main_carousel_options = {
    shadow: false,
    big: true,
    background: true,
    headers:[
        `Fast, FREE delivery on over 100 million items`,
        `FREE Same-Day Delivery`,
        `Skip the lines and get it on release day`,
        `Ultrafast delivery on thousands of items`,
        `Watch movies, TV, live events, and more`,
        `Free Games & Loot with Twitch Prime`,
        `Millions of songs for every moment`,
        `Enjoy Amazon Original series and more`,
        `Original audio programs for life on the go`,
        `Our healthiest benefit yet`,
        `The simplest way to shop. Just ask Alexa.`,
        `Exclusive brands and deals available only to Prime members`,
        `Save on supplies for the family`,
        `Prime members read free`,
        `Read next month's new releases today`,
        `Earn more with Prime Rewards`,
        `Unlimited, free photo storage`,
    ],
    blurb: [
        `Super-fast delivery, tens of millions of items, and flexible delivery options to fit your life. Plus, Prime members get FREE One-Day Delivery on tens of millions of items. `,
        `Prime members get FREE Same-Day Delivery on over three million items with qualifying orders.`,
        `No more waiting in line! Choose Free Release-Date Delivery at checkout on qualified items, and your package will be delivered on the release day by 7pm. `,
        `Prime Now offers household items and essentials you need everyday plus the best of Amazon, delivered to your doorstep. Choose 2-hour delivery or 1-hour delivery in select cities. `,
        `As a Prime member, you can watch exclusive Amazon Originals and thousands of popular movies and TV shows—all at no extra cost. Watch at home or on the go with practically any device.`,
        `Gamers can get free games, in-game items, a free Twitch channel subscription every month and more with Twitch Prime.`,
        `As a Prime member, you can stream over 2 million songs ad free, listen on any Echo device, and take your music anywhere with offline listening.`,
        `Watch award-winning Amazon Originals like The Marvelous Mrs. Maisel, as well as exclusive series available only with Prime, including Goliath, Sneaky Pete, and The Grand Tour.`,
        `Audible Channels are free with your Prime membership. Enjoy original audio series and playlists handcrafted for every interest. Just download the Audible app and start listening. `,
        `Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)`,
        `With Alexa, shopping for essentials and reordering your favorite items from Amazon has never been easier.`,
        `As a Prime member enjoy early access to deals, Prime exclusive brands, and savings.`,
        `Prime members save 20% off both diapers and baby food when they have 5 or more subscriptions arriving`,
        `As a Prime member, you can now read as much as you like from over a thousand top Kindle books, magazines, short works, books with Audible narration, comics, children's books and more—all at no additional cost.`,
        `Each month, Prime members can download one editors' pick for free--before the official publication date. Downloaded titles are yours to keep.`,
        `Eligible Prime members can earn 5% back at Amazon.com using the Amazon Prime Rewards Visa Card or the Amazon Prime Store card. All Prime members earn 2% rewards with Amazon Prime Reload. `,
        `Back up and share your photos with unlimited photo storage. Add your photos to the free app to see them on all your devices.`,
    ],
    cta: [
        `Explore Prime Delivery`,
        `Explore Same-Day Delivery`,
        `Explore Release-Date Delivery`,
        `Explore Prime Now`,
        `Explore Prime Video`,
        `Explore Twitch Prime`,
        `Explore Prime Music`,
        `Explore Amazon Originals`,
        `Explore Audible Channels`,
        `Explore Prime at Whole Foods`,
        `Learn more about Alexa and Prime`,
        `Shop Prime Member Exclusives`,
        `Explore Family Supplies`,
        `Explore Prime Reading`,
        `Learn more about Amazon First Reads`,
        `Learn more about Prime Rewards`,
        `Explore Amazon Photos`
    ],
    ctaURL: [
        `https://www.amazon.com/b?node=15247183011`,
        `https://www.amazon.com/b?node=8729023011`,
        `https://www.amazon.com/b?node=16067347011`,
        `https://primenow.amazon.com/onboard?sourceUrl=%2F`,
        `https://www.amazon.com/b/ref=dvm_us_aq_np_dhb_be_optpvt1?node=2858778011`,
        `https://twitch.amazon.com/prime`,
        `https://www.amazon.com/gp/dmusic/promotions/PrimeMusic?ref=hawkfire_prime_detail_page_benefit_desc`,
        `https://www.amazon.com/gp/video/storefront/ref=dvm_us_aq_np_dhb_be_optorigt1?ie=UTF8&merchId=originals1`,
        `https://www.audible.com/mt/getchannels`,
        `https://www.amazon.com/wholefoods`,
        `https://www.amazon.com/alexa-voice-shopping/b?ie=UTF8&node=14552177011`,
        `https://www.amazon.com/b?ie=UTF8&node=16205654011`,
        `https://www.amazon.com/gp/family/signup`,
        `https://www.amazon.com/kindle-dbs/fd/prime-pr`,
        `https://www.amazon.com/kindlefirst`,
        `https://www.amazon.com/b?node=16914437011&ref=acqNPrewards`,
        'https://www.amazon.com/b?node=13234696011'
    ]
}

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