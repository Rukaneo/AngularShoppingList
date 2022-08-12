const express = require('express')
const router = express.Router()

const {
	createCategory,
	deleteCategoryById,
	getAllCategory,
  updateCategory,
  getCategoryById
} = require('../controllers/category.controller')



router.route('/category_list').post(createCategory).get(getAllCategory)

router.route('/category_list/:id').delete(deleteCategoryById).get(getCategoryById).put(updateCategory)



module.exports = router
