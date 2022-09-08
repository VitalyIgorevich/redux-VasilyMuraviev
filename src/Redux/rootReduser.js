import { combineReducers } from "redux";
import  likesReduser  from "./reduser/LikesReduser";
import {inputReduser} from "./reduser/inputReduser"


const rootReduser = combineReducers({
    likesReduser,
    inputReduser
})

export default rootReduser;