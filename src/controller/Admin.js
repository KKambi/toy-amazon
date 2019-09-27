//import Model
const { User } = require('../model/User.js')
const { Carousel } = require('../model/Carousel.js')
const { Item } = require('../model/Item.js')

//admin controller class
class Admin{
    constructor(){
        this.User = User
    }    

    async getUserList(){
        return await User.findAll()
    }

    async setAdmin(user_id){
        await User.update(user_id, "admin", 1)
    }

    async dismissAdmin(user_id){
        await User.update(user_id, "admin", 0)
    }

    async getCarouselList(){
        return await Carousel.findAll()
    }

    async createCarousel(name){
        await Carousel.create(name)
    }

    async getItem(item_id){
        return await Item.find(item_id)
    }

    async getItemList(){
        return await Item.findAll()
    }

    async createItem(params){
        await Item.create(params)
    }
}

module.exports = {
    Admin
}