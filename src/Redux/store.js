import { createStore } from "redux";

const initialState = {
    likes: 13
}

const reduser = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                ...state,
                likes: state.likes + 1
            }
            case "DECREMENT":
                return {
                    ...state,
                    likes: state.likes - 1
                }
            default:
                return state
    }
    
}

const store = createStore(reduser)

export default store;