const db = require('../config/db.config.js')
const Customer = db.customers

// Post a Customer
exports.create = (req, res) => {
	// Save to MySQL database
	Customer.create({
		name: req.body.name,
		birthDate: req.body.birthDate,
		email: req.body.email
	}).then(customer => {
		// Send created customer to client
		res.send(customer)
	})
}

// FETCH all Customers
exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
		// Send all customers to Client
		res.send(customers)
	})
}

// Update a Customer
exports.update = (req, res) => {
	const id = req.params.customerId
	Customer.update({
		name: req.body.name,
		birthDate: req.body.birthDate,
		email: req.body.email
	},
	{ where: { id: req.params.customerId } }).then(() => {
		res.status(200).send('updated successfully a customer with id = ' + id)
	})
}

// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.customerId
	Customer.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).send('deleted successfully a customer with id = ' + id)
	})
}
