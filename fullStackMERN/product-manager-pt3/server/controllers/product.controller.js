const Product = require('../models/product.model');

// Find all products
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// Find one product
module.exports.findOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(oneProduct => res.json({ products: oneProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}


// Create product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct }))
        .catch(err => res.json({ message: "Something went wrong,", error: err }))
}



