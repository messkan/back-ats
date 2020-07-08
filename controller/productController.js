
const mongoose = require('mongoose');
const axios = require('axios');
const request = require('request');
const Product = require("../models/Product");

exports.fetchProducts = async (req, res) => {

    request.get("http://test.ats-digital.com:3000/products?size=100", (error, response, body) => {
        if (error) {
            return res.json(error);
        }
        const products = JSON.parse(body);
        products.products.forEach(element => {
            Product.create(element);
        });
        return res.json('ok');
    });


}

exports.productById = async (req, res) => {
    try {
        console.log('here')
        const product = await Product.findById(req.params.id);
        return res.status(200).json(product);
    } catch (
    error
    ) {
        return res.status(500).json(error)
    }
}

exports.products = async (req, res) => {
    let perPage = 10;
    let page = Math.max(0, req.query.page);
   // vaut mieux nkamel bel async
    Product
    .find()
    .limit(perPage)
    .skip(perPage * page).
    then(products => res.json(products)).catch(err => res.status(500).json(error));
}