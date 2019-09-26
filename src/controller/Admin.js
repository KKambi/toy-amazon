//import Model
const { User } = require('../model/User.js')

//admin controller class
class Admin{
    constructor(){
        this.user = new User()
    }    

    getUserList(){

    }
}

module.exports = {
    Admin
}

// import Admin from '../controller/Admin.js'

