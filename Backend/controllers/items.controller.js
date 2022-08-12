const { JSONResponse } = require('../lib/helper')
const Items = require('../models/items.model')

/**
 * ### Description
 * Get all items
 */
exports.getAllItems = async (req, res) => {
	try {
		const items = await Items.find()
        JSONResponse.success(res, 'Success.', items, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling item model.", error, 500)
	}
}


/**
 * ### Description
 * Creating an item
 */
exports.createItem = async (req, res) => {
	try {
		const items = await Items.create(req.body)
		JSONResponse.success(res, 'Success.', items, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling item model.", error, 500)
	}
}

/**
 * ### Description
 * Deleting items from list
 */
exports.deleteItemsById = async (req, res) => {
	try {
		const item = await Items.findById(req.params.id)
		if (item) await item.delete()
		JSONResponse.success(res, 'Success.', item, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling item model.', error, 500)
	}
}

exports.getItemById = async (req, res) => {
  try {
    const item = await Items.find({ _id: req.params.id });

    JSONResponse.success(res, 'Success.', {data: {item}}, 200)
  } catch (error) {
    // res.status(404).json({
    //   status: "fail to find category",
    //   message: err
    // })
    JSONResponse.error(res, 'Failure handling Category Model', error, 500)
  }
}

//Edit Item
exports.updateItem = async (req, res) => {
  //
  try {
    const editItem = await Items.findOneAndUpdate({_id: req.params.id}, req.body)


 JSONResponse.success(res, 'Success.', {data: {editItem, new: req.body}}, 200)
  } catch (error) {
    JSONResponse.error(res, 'Failure handling Category Model', error, 500)
  }
};

exports.getItemsByCategory = async (req, res) => {
  try {
    const item = await Items.find({ category: req.params.category });

    JSONResponse.success(res, 'Success.', {data: {item}}, 200)
  } catch (error) {
    // res.status(404).json({
    //   status: "fail to find category",
    //   message: err
    // })
    JSONResponse.error(res, 'Failure handling Category Model', error, 500)
  }
}

