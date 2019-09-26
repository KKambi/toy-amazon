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
            const body_type = event.target.getAttribute("data-body-type");
            const res = await this.getContent(body_type)
            this.changeContent(content_body, res)
        })
    }

    isIndexButton(element){
        return (element.hasAttribute("data-body-type") === true)
    }

    async getContent(body_type){
        // api서버에 body_type에 맞는 데이터를 달라고 요청
        if (body_type === "read_user"){
            const response = await fetch('/api/users/all')
            const userList = await response.json()
            console.log(userList)
            return userList
        }
    }

    changeContent(content_body, res){
        let rows = ""
        for (let obj of res){
            let row = ""
            for (let key in obj){
                if (this.isPasswordValue(key) === true){
                    continue
                }
                else if (this.isAdminValue(key) === true){
                    const value = obj[key] === 1 ? "O":"X"
                    row += adminHTML.body.row(value)
                }
                else if (this.isGenderValue(key) === true){
                    const value = obj[key] === 'm' ? "남자":"여자"
                    row += adminHTML.body.row(value)
                }
                else{
                    row += adminHTML.body.row(obj[key])
                }
            }
            rows += `<tr>${row}</tr>`
        }
        content_body.innerHTML = adminHTML.body.rows(rows)
    }

    isPasswordValue(key){
        return (key === 'password')
    }

    isAdminValue(key){
        return (key === 'admin')
    }

    isGenderValue(key){
        return (key === 'gender')
    }
}

const view = new adminView();
view.init();