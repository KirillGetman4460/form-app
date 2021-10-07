import { createStore } from 'redux'

const defaultState = { 
    user: JSON.parse(localStorage.getItem("user")) || {},
    activeUser: false,
}

const counterReducer = (state = defaultState, action)=>{
    switch(action.type){    
        case "set_user":
            return {state, user: localStorage.setItem('user',JSON.stringify(action.payload))};
        case "logout_user":
            return {state, user: localStorage.removeItem('user')};
        case "active_user":
            return {state, activeUser: state.activeUser = action.payload}
        default:
          return state
      }
}
let store = createStore(counterReducer)
export default store;