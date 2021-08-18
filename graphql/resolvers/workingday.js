export const workingDay = {
	query: {
		async wdByPk(parent, { id }, { models }) {
			return models.workingday.findByPk(id, {include: ['employees']})
		}
	},
	mutation: {
		async setDays(parent, {ids}, {models}) {
			const users = await models.user.findAll({where: {id: ids }, include: ['days']})
			const days = await models.workingday.findAll()

			await Promise.all(users.map(async user => await user.setDays(days)))
		}
	}
}

/**
 * query Query($usersIds: [Int]!) {
  users(ids: $usersIds) {
    id
    email
    days {
      workingDate
      weekDay
      id
      isWorking
    }
  }
}
"Cannot return null for non-nullable field User.id.",
mutation Mutation($setDaysIds: [Int]!) {
  setDays(ids: $setDaysIds) {
    id
    email
    days {
      id
      isWorking
      workingDate
      weekDay
    }
  }
}
 */