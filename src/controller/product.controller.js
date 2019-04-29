'use strict'
const ProductModel = require('../model/product.model');

exports.create = (req, res) => {
    console.log(req.file.path);
    const newProduct = new ProductModel({
        productName: req.body.productName,
        productDetail: req.body.productDetail,
        productImage: req.file.path
    });
    newProduct.save()
        .then(data => {
            return res.status(200).send({
                success: true,
                data: data
            })
        })
        .catch(err => {
            return res.status(404).send({
                success: false,
                message: err.message
            })
        })
}


exports.findAll = (req, res) => {
    console.log('i am here ...');
    ProductModel.find()
        .then(data => {
            if(data.length > 0) {
                return res.status(200).send({
                    success: true,
                    data: data, 
                    length: data.length
                })
            } else {
                return res.status(200).send({
                    success: false,
                    data: 'no record found'
                })
            }
        })
        .catch(err => {
            return res.status(404).send({
                success: false,
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    ProductModel.update({
            _id: req.params.id,
            $set: req.body
        })
        .then(data => {
            return res.status(200).send({
                success: true,
                message: 'updated successfully...'
            })
        })
        .catch(err => {
            return res.status(404).send({
                success: false,
                message: err.message
            })
        })
}


exports.delete = (req, res) => {
    ProductModel.findByIdAndRemove(req.params.id)
        .then(data => {
            return res.status(200).send({
                success: true,
                message: 'deleted successfull...'
            })
        })
        .catch(err => {
            return res.status(404).send({
                success: false,
                message: err.message
            })
        })
}