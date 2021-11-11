'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const authorId = 1
		const formId = 2
		const categoryNames = ['Health', 'Programming']
		const secret = 'abbeeecc'

		await queryInterface.bulkInsert(
			'Users',
			[
				{
					id: authorId,
					email: 'joe@demo.com',
					hash: require('crypto').createHash('sha256').update('qwerty').digest('hex'),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		),

		await queryInterface.bulkInsert(
			'Forms',
			[
				{
					id: formId,
					title: 'This is a demo form',
					body: 'Form',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		),

		await queryInterface.bulkInsert(
			'Categories',
			[
				{
					name: categoryNames[0],
				},
				{
					name: categoryNames[1],
				},
			],
			{}
		),

		await queryInterface.bulkInsert(
			'FormAuthors',
			[
				{
					authorId,
					formId,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		),

		await queryInterface.bulkInsert(
			'FormCategories',
			[
				{
					formId,
					categoryName: categoryNames[0],
				},
				{
					formId,
					categoryName: categoryNames[1],
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		const deleteFormCategories = queryInterface.bulkDelete(
			'FormCategories',
			null,
			{}
		)
		const deleteFormAuthors = queryInterface.bulkDelete(
			'FormAuthors',
			null,
			{}
		)
		const deleteUsers = queryInterface.bulkDelete('Users', null, {})
		const deleteForms = queryInterface.bulkDelete('Forms', null, {})
		const deleteCategories = queryInterface.bulkDelete('Categories', null, {})

		return Promise.all([
			deleteFormCategories,
			deleteFormAuthors,
			deleteUsers,
			deleteForms,
			deleteCategories,
		])
	}
};
