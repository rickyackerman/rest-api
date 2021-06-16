const User = require('../models/User')

const register = async (req, res, next) => {
	const response = new User({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		phone: req.body.phone
	})
	await response.save()
	res.status(201)
		.json(response)
}

module.exports = {
	register
}
