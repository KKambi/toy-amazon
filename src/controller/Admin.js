//import stylesheets
import '../stylesheets/admin.sass'
import '../stylesheets/navbar.sass'

//import HTML source
import adminHTML from '../javascripts/adminHTML'

//admin controller class
class Admin{
    constructor(){
        this.content_container = undefined
        this.nav_buttons = undefined
    }

    init(){
        //elements
        this.content_container = document.getElementById("content-container");
        this.nav_buttons = document.querySelector(".nav-buttons")

        //nav_buttons에서 link의 click이벤트를 감지
        this.addClickHandler(this.nav_buttons)
    }

    addClickHandler(nav_buttons){
        nav_buttons.addEventListener("click", (event) => {
            if (this.isAdminButton(event.target) === false) return;
            this.changeHTML(this.content_container);
        })
    }

    isAdminButton(element){
        return (element.hasAttribute("data-type") === true)
    }

    changeHTML(content_container, data_type){
        content_container.innerHTML(adminHTML[data_type])
    }
}

const adminController = new Admin();
adminController.init();