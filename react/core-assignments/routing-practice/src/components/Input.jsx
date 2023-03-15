import React from 'react'
import { useParams } from 'react-router-dom';



const Input = (props) => {
    const { numberCheck } = props;
    const { user_input } = useParams();

    numberCheck(user_input)
    return (
        <div>
            {/* {numberCheck === undefined && <h1>Welcome</h1>} */}
            {/* {numberCheck === undefined ? (<h1>Welcome</h1>) : <h1>{numberCheck(user_input)}</h1> } */}
            {/* <h1>Welcome</h1> */}
            {/* {numberCheck(user_input) ? (<h1>The word is: {user_input}</h1>) : (<h1>The number is: {user_input}</h1>)} */}
            <h1>{numberCheck(user_input)}</h1> 
        </div>
    )
}

export default Input