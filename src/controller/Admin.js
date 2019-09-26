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

    async setAdmin(user_id){
        await User.update(user_id, "admin", 1)
    }

    async dismissAdmin(user_id){
        await User.update(user_id, "admin", 0)
    }
}

module.exports = {
    Admin
}