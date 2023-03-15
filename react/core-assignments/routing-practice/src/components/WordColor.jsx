import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'


const WordColor = (props) => {
    const { numberCheck } = props;
    const { user_input, tColor, bColor } = useParams();

numberCheck(user_input)

    return (
        <div>
            <h1  className="style" style={{ color: tColor, backgroundColor: bColor }}>
                {numberCheck(user_input)}
            </h1>
        </div>
    )
}

export default WordColor;