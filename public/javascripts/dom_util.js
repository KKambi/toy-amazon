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

module.exports = {
    dom_util
}