export const company = {
	query: {
		async companies(parent, args, {models}) {
			return models.company.findAll({include: ['employees']})
		},
		async company(parent, {id}, {models}) {
			return models.company.findByPk(id, {include: ['employees']})
		}
	}
}