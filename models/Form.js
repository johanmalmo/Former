const Sequelize = require("sequelize")

module.exports = function createUserModel(sequelize) {
	const Form = sequelize.define(
		'Form',
		{
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			body: {
				type: Sequelize.STRING,
				allowNull: false
			},
		},
		{}
	)
	Form.associate = ({
		User,
		FormAuthors,
		Category,
		FormCategories,
	}) => {
		Form.belongsToMany(User, {
			as: 'authors',
			through: FormAuthors,
			foreignKey: 'formId'
		})

		Form.belongsToMany(Category, {
			as: 'categories',
			through: FormCategories,
			foreignKey: 'formId'
		})
		return Form
	}
}