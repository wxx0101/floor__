const ChangeFn = (index) => {
    // console.log(index,key)
    return {
        type: "CHANGEFN",
        index
    }
}
const getIndex = (ind) => {
    return {
        type: "INDEX",
        ind
    }
}

export default {ChangeFn,getIndex}