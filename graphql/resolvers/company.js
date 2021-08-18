export const company = {
	query: {
		async companies(parent, args, {models}) {
			return models.company.findAll()
		}
	}
}