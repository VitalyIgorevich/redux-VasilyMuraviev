import { combineReducers } from "redux";
import  likesReduser  from "./reduser/LikesReduser";


const rootReduser = combineReducers({
    likesReduser
})

export default rootReduser;