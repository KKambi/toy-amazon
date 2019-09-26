//import Model
const { User } = require('../model/User.js')

//admin controller class
class Admin{
    constructor(){
        this.User = User
    }    

    async getUserList(){
        return await User.findAll()
    }
}

module.exports = {
    Admin
}