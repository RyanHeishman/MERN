const ProductController = require('../controllers/product.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', ProductController.index);

    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.singleProduct)
    app.post('/api/product', ProductController.createProduct);
}

