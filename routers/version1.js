const express = require('express')
const router = express.Router()
const {getAllProducts, createProduct, getSomeProduct, deleteProduct, updateProduct} = require('../controllers/productController')

router.get('/products', getAllProducts)
router.get('/products/:slug', getSomeProduct)
router.post('/products', createProduct)
router.patch('/products/:slug', updateProduct)
router.delete('/products/:slug', deleteProduct)

module.exports = router
