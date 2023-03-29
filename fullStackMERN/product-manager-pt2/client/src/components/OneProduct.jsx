import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneProduct = (props) => {
    const { id } = useParams();

    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setOneProduct(res.data.products))
            .catch(err => console.log(err))
    }, [])

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", marginTop: "500px"}}>
            <h1>{oneProduct.title} </h1>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
        </div>
    )
}

export default OneProduct