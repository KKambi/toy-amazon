const is_util = {
    isWorking(intervalId){
        return !(intervalId === undefined || intervalId === "")
    },
    
    isNotWorking(intervalId){
        return (intervalId === undefined || intervalId === "")
    }
}

export default is_util