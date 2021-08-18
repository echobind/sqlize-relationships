const db = require('../../db/models')

export default function handler(req, res) {
	// use this to test your sequelize functions, before you try adding graphql
	// res.status(200).json({ name: 'John Doe' })
	db.company.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({message: err})
		})
}