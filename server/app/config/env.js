const env = {
	database: 'testdb',
	username: 'root',
	password: 'root',
	host: 'localhost',
	port: '3307',
	dialect: 'mysql',
	pool: {
		min: 0,
		max: 5,
		acquire: 30000,
		idle: 10000
	}
}

module.exports = env
