const Product = require('../models/product')

//Create new product => api/v1/product/new

exports.newProduct = async(req, res, next) => {
    
    //this will get all the data from the request body and then create the const product app (thus the await keyword)
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product   
    })
}

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This route will show all products in database.'
    })
}