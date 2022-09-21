import { combineReducers } from "redux";
import  likesReduser  from "./reduser/LikesReduser";
import {inputReduser} from "./reduser/inputReduser"
import { commentsReduser } from "./reduser/commentsReducer";


const rootReduser = combineReducers({
    likesReduser,
    inputReduser,
    commentsReduser
})

export default rootReduser;