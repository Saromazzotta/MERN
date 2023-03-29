import React, {useState} from 'react'
// import { useNavigate } from 'react-router'
import axios from 'axios';

const ProductForm = () => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })


    const onChangeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/products", product)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form action="" className="col-md-6 mx-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" name="title" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" name="price" onChange={onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" name="description" onChange={onChangeHandler} />
                </div>
                <button className="btn btn-info mt-3">Create Products</button>
            </form>
        </div>
    )
}

export default ProductForm