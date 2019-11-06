'use strict'
module.exports = (sequelize, DataTypes) => {
	const Operator = sequelize.define('Operator', {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING
	}, {})
	Operator.associate = function(models) {
		// associations can be defined here
	}
	return Operator
}