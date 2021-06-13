const Product = require('./models/Product')
const productSeeder = require('./data/productSeeder')

const importData = async () => {
    try {
        await Product.deleteMany()
        await Product.insertMany(productSeeder)
        console.log('IMPORT DATA SUCCESS')
        process.exit()
    } catch(err) {
        console.log('IMPORT DATA FAILED')
        process.exit(1)
    }
}

importData()
