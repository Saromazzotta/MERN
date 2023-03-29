import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    // const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
    }, [])

    // //navigate to product form
    // const navigateToProductPage = () => {
    //     navigate("/api/products/:id")
    // }


    return (
        <div>
            <h1>All Products:</h1>
            {products.map((product) => {
                return (
                    <ul>
                        <li key={product._id} style={{listStyleType: "none"}}><Link to={`${product._id}`}>{product.title}</Link></li>
                    </ul>
                )
            }
            )}
        </div>
    )
}

export default AllProducts