const env = {
	database: 'spacefidesdb',
	username: 'root',
	password: 'root',
	host: 'localhost',
	port: '3306',
	dialect: 'mysql',
	pool: {
		min: 0,
		max: 5,
		acquire: 30000,
		idle: 10000
	}
}

module.exports = env
