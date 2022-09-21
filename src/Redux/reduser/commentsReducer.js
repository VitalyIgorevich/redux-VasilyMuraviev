import { COMMENT_CREATE } from "../types";

const initialState = {
    comments: []
}

export const commentsReduser = (state = initialState, action) => {
    switch(action.type) {
        case COMMENT_CREATE: 
            return {
                ...state,
                comments: [...state.comments, action.date]
            }
        default:
            return state;
    }
}