import { createStore } from 'redux'



const reducerFn = (state = {count : 0} , action)=>{
    if(action.type === 'INC'){
        return {count : state.count + 1}
    }
    if(action.type === 'DEC'){
        return {count : state.count - 1}
    }
    if (action.type === 'ADD') {
        return {count : state.count + action.payload}
    }


    return state;
}

export const store = createStore(reducerFn)
