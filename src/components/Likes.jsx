import { connect } from "react-redux";
import { incrementLikes, decrementLikes} from "../Redux/actions"

function Likes(props) {
    return (
      <div className='button-controls'>
        <button onClick={props.onIncrement}>❤ {props.likes}</button>
        <button onClick={props.onDecrement}>Dislike</button>
      </div>
    )
  }

  const mapStateToProps = (state) => {
    const {likesReduser} = state;
    return {
      likes: likesReduser.likes
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      onIncrement: () => {
        return dispatch(incrementLikes())
      },
      onDecrement: () => {
        return dispatch(decrementLikes())
      }
    }
    }
    
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Likes);