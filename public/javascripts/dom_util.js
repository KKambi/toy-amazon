const dom_util = {
    /** Enable element  */
    enableElement(element){
        element.removeAttribute("disabled")
    },

    /** Disable element */
    disableElement(element){
        element.setAttribute("disabled", "")
    }
}

export default dom_util