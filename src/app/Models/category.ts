export class Category{
  _id:String;
	category:  String;
  item_name:  String;
	item_id: String;


constructor(_id?: String, item_name?:String, category?:String, item_id?:String,){
  this._id = _id!;
  this.item_name = item_name!;
  this.category = category!;
  this.item_id = item_id!;

}
}

// let categorySchema = new db.Schema({
// 	category: { type: String, required: true },
// 	item_name: { type: String, required: false },
// 	item_id: { type: String, required: true },

// })
