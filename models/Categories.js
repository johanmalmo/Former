const Sequelize = require('sequelize')

module.exports = function createUserModel(sequelize) {
	const Category = sequelize.define(
		'Category',
		{
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		},
		{}
	)
	Category.associate = ({Form, FormCategories}) =>
	Category.belongsToMany(Form, {
		as: 'forms',
		through: FormCategories,
		foreignKey: 'categoryName'
	})

	return Category
}