import {INCREMENT, DESCREMENT} from "../types.js"

const initialState = {
    likes: 0
}

const likesReduser = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
            case DESCREMENT:
                return {
                    ...state,
                    likes: state.likes - 1
                }
            default:
                return state
    }
}

export default likesReduser;