module.exports = function(app) {
 
	const operators = require('../controller/operator.controller.js')
	// Create a new Customer
	app.post('/api/operators', operators.create)
 
	// Retrieve all Customer
	app.get('/api/operators', operators.findAll)

	// Retrieve a single Customer by Id
	app.get('/api/operators/:operatorId', operators.findById)

	// Update a Customer with Id
	app.put('/api/operators/:operatorId', operators.update)
 
	// Delete a Customer with Id
	app.delete('/api/operators/:operatorId', operators.delete)

	app.get('*', (req, res) => res.status(200).send({
		message: 'Welcome to the beginning of nothingness.',
	}))
}