const Product = require('./models/Product')
const User = require('./models/User')
const productSeeder = require('./data/productSeeder')
const userSeeder = require('./data/userSeeder')

const importData = async () => {
    try {
        // import dumy products
        await Product.deleteMany()
        await Product.insertMany(productSeeder)
        // import dumy users
        await User.deleteMany()
        await User.insertMany(userSeeder)

        console.log('IMPORT DATA SUCCESS')
        process.exit()
    } catch(err) {
        console.log('IMPORT DATA FAILED', err)
        process.exit(1)
    }
}

importData()
