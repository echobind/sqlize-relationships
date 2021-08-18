export const user = {
	query: {
		async user(root, { email }, { models }) {
			return models.user.findOne({ where: { email }, include: 'company'})
		},
		async userByPk(root, { id }, { models }) {
			return models.user.findByPk(id, { include: ['days']})
		},
		async users(root, {ids}, { models }) {
			return models.user.findAll({where: {id: ids }, include: ['days']})
		}
	}
}