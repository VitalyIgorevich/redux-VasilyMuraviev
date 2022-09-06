import { connect } from "react-redux";

function Likes(props) {
    return (
      <div className='button-controls'>
        <button >❤ {props.likes}</button>
        <button >Dislike</button>
      </div>
    )
  }

  const mapStateToProps = (state) => {
    return {
        likes: state.likes
    }
  }
  
  export default connect(mapStateToProps)(Likes);