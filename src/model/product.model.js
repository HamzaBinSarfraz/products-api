'use strict'
const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    productName: String, 
    productDetail: String,
    productImage: String
}, {
        timestamps: true

    });

module.exports = mongoose.model("product", productSchema);