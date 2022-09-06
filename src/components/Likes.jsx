import { connect } from "react-redux";

function Likes(props) {
    
    return (
      <div className='button-controls'>
        <button onClick={props.onIncrementLikes}>❤ {props.likes} </button>
        <button >Dislike</button>
      </div>
    )
  }
  const mapStateToProps = (state) => {
    return {
        likes: state.likes
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementLikes: () => {
            console.log('click')
            const action = {type: "INCREMENT"}
            dispatch(action)
        }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Likes);