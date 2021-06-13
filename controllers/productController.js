const Product = require('../models/Product')
const slug = require('slug')

const createProduct = (req, res, next) => {
    const name = req.body.name
    const uri = slug(name)
    const price = req.body.price
    const stock = req.body.stock
    const description = req.body.description

    const product = new Product({
        name: name,
        slug: uri,
        price: price,
        stock: stock,
        description: description
    })
    product.save()
    res.status(201)
        .json(product)
}

const getAllProducts = async (req, res, next) => {
    try {
        const response = await Product.find({})
        res.status(200)
            .json(response)
    } catch(err) {
        console.error(err)
    }
}

const getSomeProduct = async (req, res, next) => {
    try {
        const response = await Product.findOne({slug:req.params.slug})
        res.status(200)
            .json(response)
    } catch(err) {
        console.error(err)
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const response = await Product.findOneAndDelete({slug: req.params.slug})
        res.status(202)
            .json(response)
    } catch(err) {
        console.error(err)
    }
}

const updateProduct = async (req, res, next) => {

    const name = req.body.name
    const price = req.body.price
    const stock = req.body.stock
    const description = req.body.description


    try {
        const response = await Product.findOneAndUpdate({slug: req.params.slug}, {
            name: name,
            price: price,
            stock: stock,
            description: description
        })
        res.status(202)
            .json(response)
    } catch(err) {
        console.error(err)
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getSomeProduct,
    deleteProduct,
    updateProduct
}
