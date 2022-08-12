const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
	createItem,
	deleteItemsById,
	getAllItems,
  getItemsByCategory,
  updateItem,
  getItemById,

} = require('../controllers/items.controller')


router.route('/').get(IndexController.index)

router.route('/shopping_list').post(createItem).get(getAllItems)

router.route('/shopping_list/:id').delete(deleteItemsById).get(getItemById).patch(updateItem)

router.route('/shopping_list/:category').get(getItemsByCategory)



module.exports = router
