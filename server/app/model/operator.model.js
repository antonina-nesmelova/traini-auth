module.exports = (sequelize, Sequelize) => {
	const Operator = sequelize.define('operator', {
		name: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING,
			isUnique :true,
			allowNull:false,
			validate:{
				isEmail : true
			}
		}
	})
	
	return Operator
}