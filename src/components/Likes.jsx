import { connect } from "react-redux";

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
        console.log('click')
        const action = {type: 'INCREMENT'}
        dispatch(action)
      },
      onDecrement: () => {
        console.log('click')
        const action = {type: 'DECREMENT'}
        dispatch(action)
      }
    }
    }
    
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Likes);