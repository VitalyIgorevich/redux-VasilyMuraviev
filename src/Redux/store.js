import { createStore } from "redux";

const initialState = {
    likes: 13
}

const reduser = (state = initialState, action) => {
    console.log("🚀 ~ action", action)
    return state;
}

const store = createStore(reduser)

export default store;