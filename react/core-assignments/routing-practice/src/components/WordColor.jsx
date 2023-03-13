import React from 'react'
import { useParams } from 'react-router-dom'

const WordColor = (props) => {

    const { word } = useParams();
    const { tColor } = useParams();
    const { bColor } = useParams();

    const { numberCheck } = props;


    return (
        <div>
            <h1 style={{ color: { tColor }, backgroundColor: { bColor } }}>
                The word is: {word}
            </h1>



        </div>
    )
}

export default WordColor;