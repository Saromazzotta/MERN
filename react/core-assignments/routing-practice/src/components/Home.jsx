import React from 'react'
import { useParams } from 'react-router-dom';



const Home = (props) => {
    const { numberCheck } = props;
    const { user_input } = useParams();

    numberCheck(user_input)
    return (
        <div>
            <h1>Welcome</h1>
            {/* {
                ? (numberCheck(user_input)) 
                    return <h1>The number is: {user_input}</h1>
            
                : return <h1>The word is:{user_input}</h1>
            } */}
            <h1>{numberCheck(user_input)}</h1>
            
        </div>
    )
}

export default Home