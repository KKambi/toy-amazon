const is_util = {
    isWorking(intervalId){
        return !(intervalId === undefined || intervalId === "")
    },
    
    isNotWorking(intervalId){
        return (intervalId === undefined || intervalId === "")
    },

    isSame(inputPassword, savedPassword){
        return (inputPassword === savedPassword);
    }
}

export default is_util;