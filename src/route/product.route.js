'use strict'
const product = require('../controller/product.controller');
const type =  require('../../config/multer.config');

module.exports = (app) => {
    app.post('/product', type, product.create);
    app.get('/product', product.findAll);
    app.put('/product', product.updateOne);
    app.delete('/product', product.delete);
}