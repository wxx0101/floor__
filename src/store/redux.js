import {createStore} from "redux"

const reducer = (state={num: 0,topArr:[]},action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case "CHANGEFN": 
        {
            let {index} = action
            newState.num = index
            return newState;
        }
    case "INDEX": 
        {
            let {ind} = action
            newState.num = ind
            return newState
        }
    default : 
        return state
    }
}



const store = createStore(reducer)

export default store