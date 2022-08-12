const db = require('mongoose')

let categorySchema = new db.Schema({
	category: { type: String, required: true },
	item_name: { type: String, required: false },
	item_id: { type: String, required: true },

})

module.exports = db.model('category', categorySchema)
