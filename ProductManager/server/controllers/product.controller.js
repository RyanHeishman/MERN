const Product = require('../models/product.model')

module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
       message: "Hello World"
    });
}

module.exports.findAllProducts = (request, response) => {
    Product.find()
        .then((allProducts) => {
            response.json({products: allProducts})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error:err})
        })
}
module.exports.createProduct = (request, response) => {
    Product.create(request.body)
    .then(product => response.json(product))
    .catch(err => response.json(err));
}