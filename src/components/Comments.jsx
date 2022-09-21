import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid"
import { commentCreate } from "../Redux/actions";
import SingleComments from "./SingleComments";

const Comments = (props) => {
    const [textComment, setTextComment] = useState('')
    const comments = useSelector(state => {
        const {commentsReducer} = state
        return commentsReducer.commets
    })

    const dispatch = useDispatch();

    const handleInput = (event) => {
        console.log("🚀 ~ event", event.target.value)
        setTextComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id))
    }

    return ( 
        <div className="card-comments">
            <form onSubmit={handleSubmit} action="" className="comments-item-create">
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden />
            </form>
            {comments.length && comments.map(result => {
                return  <SingleComments key={result.id} date={result}/>
            }) }
            
        </div>
     );
}
 
export default Comments;