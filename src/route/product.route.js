module.exports = (app) => {
    const product = require('../controller/product.controller');
    const type = require('../../config/multer.config');
    
    app.post('/product', type, product.create);
    app.get('/product', product.findAll);
    app.put('/product/:id', product.updateOne);
    app.delete('/product/:id', product.delete);
}