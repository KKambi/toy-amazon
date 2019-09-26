//import Model
import User from '../model/User'

//import HTML source
import adminHTML from '../javascripts/adminHTML.js'

//admin controller class
class Admin{
    constructor(){
        this.User = new User()
        this.content_container = undefined
        this.nav_buttons = undefined
    }

    init(){
        //elements
        this.content_container = document.getElementById("content-container");
        this.nav_buttons = document.querySelector(".nav-buttons")

        //nav_buttons에서 link의 click이벤트를 감지
        this.addLinkHandler(this.nav_buttons)
        this.addContentHandler(this.content_container)
    }

    addLinkHandler(nav_buttons){
        nav_buttons.addEventListener("click", (event) => {
            if (this.isAdminButton(event.target) === false) return;
            this.changeMarkup(this.content_container, event.target.getAttribute("data-link-type"));
        })
    }

    isAdminButton(element){
        return (element.hasAttribute("data-link-type") === true)
    }

    changeMarkup(content_container, link_type){
        content_container.innerHTML = adminHTML.link[link_type]
    }

    addContentHandler(content_container){
        content_container.addEventListener("click", (event) => {
            if (this.isIndexButton(event.target) ===  false) return;
            const content_body = content_container.querySelector(".content-body");
            this.changeContent(content_body, event.target.getAttribute("data-body-type"))
        })
    }

    isIndexButton(element){
        return (element.hasAttribute("data-body-type") === true)
    }

    changeContent(content_body, body_type){
        content_body.innerHTML = adminHTML.body[body_type]
    }

    getUserList(){

    }
}

export default Admin