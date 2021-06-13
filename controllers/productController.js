const Product = require('../models/Product')

const getAllProducts = async (req, res, next) => {
    try {
        const response = await Product.find({})
        res.status(200)
            .json(response)
    } catch(err) {
        console.error(err)
    }
}

module.exports = {
    getAllProducts
}
