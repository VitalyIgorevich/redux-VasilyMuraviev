import { createStore } from "redux";

const initialState = {
    likes: 13
}

const reduser = (state = initialState, action) => {
    
    return state;
}

const store = createStore(reduser)

export default store;