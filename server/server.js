var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const db = require('./app/config/db.config.js')

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
	console.log('Drop and Resync with { force: true }')
})

require('./app/route/operator.route.js')(app)

// Create a Server
const server = app.listen(8081, function () {
	const host = server.address().address
	const port = server.address().port

	console.log('App listening at http://%s:%s', host, port)
})
