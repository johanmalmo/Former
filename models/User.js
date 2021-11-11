const Sequelize = require('sequelize')

module.exports = function createUserModel(sequelize) {
	const User = sequelize.define('user', {
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {isEmail: true},
		},
		hash: {
			type: Sequelize.STRING,
			allowNull: false
		}
	}, {})

	User.associate = ({Form, FormAuthors}) =>
	User.belongsToMany(Form, {
		as: "forms",
		through: FormAuthors,
		foreignKey: "authorId",
	})

	return User
}