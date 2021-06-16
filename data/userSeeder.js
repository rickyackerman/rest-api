const bcrypt = require('bcrypt')
const saltRounds = 10
const genSalt = bcrypt.genSaltSync(saltRounds)
const userSeeder = [
    {
        name: 'Ricky Ackerman',
        email: 'rickyackerman@sakilacollection.com',
        username: 'rickyackerman',
        phone: 085860061988,
        password: bcrypt.hashSync('rickyackerman', genSalt)
    }
]

module.exports = userSeeder