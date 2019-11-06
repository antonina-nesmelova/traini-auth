const db = require('../config/db.config.js')
const Operator = db.operators

// Post a Operator
module.exports.create = (req, res) => {
	console.log(req)
	// Save to MySQL database
	Operator.create({
		name: req.body.user.name,
		email: req.body.user.email,
		password: req.body.user.password,
	}).then(operator => {
		// Send created operator to client
		res.send(operator)
	})
}

// Find a Customer by Id
module.exports.findById = (req, res) => {
	Operator.findById(req.params.operatorId).then(operator => {
		res.send(operator)
	})
}

// FETCH all Operators
module.exports.findAll = (req, res) => {
	Operator.findAll().then(operators => {
		// Send all operators to Client
		res.send(operators)
	})
}

// Update a Operator
module.exports.update = (req, res) => {
	const id = req.params.operatorId
	Operator.update({
		name: req.body.name,
		email: req.body.email
	},
	{ where: { id: req.params.operatorId } }).then(() => {
		res.status(200).send('updated successfully a operator with id = ' + id)
	})
}

// Delete a Operator by Id
module.exports.delete = (req, res) => {
	const id = req.params.operatorId
	Operator.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).send('deleted successfully a operator with id = ' + id)
	})
}