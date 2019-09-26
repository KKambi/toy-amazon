//import HTML source
const { adminHTML } = require('../javascripts/adminHTML.js')

class adminView {
    constructor(){
        this.content_container = undefined
        this.nav_buttons = undefined
    }

    init(){
        //elements
        this.content_container = document.getElementById("content-container");
        this.nav_buttons = document.querySelector(".nav-buttons")
        
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
        content_container.addEventListener("click", async (event) => {
            if (this.isIndexButton(event.target) ===  false) return;
            const content_body = content_container.querySelector(".content-body");
            await this.changeContent(content_body, event.target.getAttribute("data-body-type"))
        })
    }

    isIndexButton(element){
        return (element.hasAttribute("data-body-type") === true)
    }

    async changeContent(content_body, body_type){
        //TODO: api서버에 body_type에 맞는 데이터를 달라고 요청
        if (body_type === "read_user"){
            const response = await fetch('/api/user/all')
            const userList = await response.json()
            console.log("비동기 sql 끝남")
            return userList
        }

        // 응답받은 데이터로 갈아끼움
        console.log("이게 먼저 나오면 안됨")
        content_body.innerHTML = adminHTML.body[body_type]
    }
}

const view = new adminView();
view.init();