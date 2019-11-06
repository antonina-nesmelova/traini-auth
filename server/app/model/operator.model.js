module.exports = (sequelize, Sequelize) => {
	const Operator = sequelize.define('operator', {
		name: {
			type: Sequelize.STRING
		},
		birthDate: {
			type: Sequelize.DATE
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