const is_util = {
    isWorking(intervalId){
        return !(intervalId === undefined || intervalId === "")
    },
    
    isNotWorking(intervalId){
        return (intervalId === undefined || intervalId === "")
    }
}

module.exports = {
    is_util
}