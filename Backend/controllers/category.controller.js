const { JSONResponse } = require('../lib/helper')
const Category = require('../models/category.model')

/**
 * ### Description
 * Get all items
 */
exports.getAllCategory = async (req, res) => {
	try {
		const categories = await Category.find()
        JSONResponse.success(res, 'Success.', categories, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling Category model.", error, 500)
	}
}

/**
 * ### Description
 * Creating an item
 */
exports.createCategory = async (req, res) => {
	try {
		const categories = await Category.create(req.body)
		JSONResponse.success(res, 'Success.', categories, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling Category model.", error, 500)
	}
}

/**
 * ### Description
 * Deleting items from list
 */
exports.deleteCategoryById = async (req, res) => {
	try {
		const category = await Category.findById(req.params.id)
		if (category) await category.delete()
		JSONResponse.success(res, 'Success.', category, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling Category Model.', error, 500)
	}
}
//#### Description
// Getting 1 Category
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.find({ _id: req.params.id });

    JSONResponse.success(res, 'Success.', {data: {category}}, 200)
  } catch (error) {
    // res.status(404).json({
    //   status: "fail to find category",
    //   message: err
    // })
    JSONResponse.error(res, 'Failure handling Category Model', error, 500)
  }
}

//Edit Category
exports.updateCategory = async (req, res) => {
  //
  try {
    const editCategory = await Category.findOneAndUpdate({_id: req.params.id}, req.body)


 JSONResponse.success(res, 'Success.', {data: {editCategory, new: req.body}}, 200)
  } catch (error) {
    JSONResponse.error(res, 'Failure handling Category Model', error, 500)
  }
};
