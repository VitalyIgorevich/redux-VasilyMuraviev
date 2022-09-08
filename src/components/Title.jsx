import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../Redux/actions";


const Title = (props) => {
    const text = useSelector(state => {
        const {inputReduser} = state
        return inputReduser.text
    })

    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(inputText(event.target.value))
    }

    return (  
        <div className="card-title">
            <div className="card-title-top">
                <input type="text" onChange={handleChange}/>
            </div>
            <p>{text}</p>
        </div>
    );
}
 
export default Title;